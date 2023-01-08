package com.birdnest.application;

import com.birdnest.application.data.Capture;
import com.birdnest.application.data.Drone;
import com.birdnest.application.data.Violator;
import com.birdnest.application.data.ViolatorReport;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class Monitor{

    private BirdnestClient client;
    private ConcurrentMap<String, Violator> violators;
    private final LocalDateTime moniteringStartTime;
    LocalDateTime captureTime;
    private final Integer birdPositionX;
    private final  Integer birdPositionY;
    private final  Integer expireViolatorAfterMS;
    private final Integer inNDZ;


    public Monitor(){
        this.client = new BirdnestClientImpl();
        this.violators = new ConcurrentHashMap<String, Violator>();
        this.moniteringStartTime = LocalDateTime.now(ZoneId.of("UTC"));
        this.birdPositionX = 250000;
        this.birdPositionY = 250000;
        this.expireViolatorAfterMS = 600000;
        this.inNDZ = 100000;
    }

    public boolean isDroneInNDZ(double distance){
        if (distance > inNDZ)
            return false;
        return true;
    }

    public double calucurateDistance(Float positionX, Float positionY){
        var distance = Math.sqrt(((positionX - birdPositionX) * (positionX - birdPositionX))
                        + ((positionY - birdPositionY) * (positionY - birdPositionY)));
        return distance;
    }

    public void removeExpired() {
        for (Map.Entry<String, Violator> entry : this.violators.entrySet()) {
            entry.getValue().setInterval();
            if (entry.getValue().getInterval() >= expireViolatorAfterMS)
                this.violators.remove(entry.getKey());
        }
    }
    public void addViolator(Capture capture) throws Exception {
        for (Drone drone : capture.drones()) {
            Violator violator;
            double distance = calucurateDistance(drone.positionX(), drone.positionY());
            if (this.violators.containsKey(drone.serialNumber()))
            {
                violator = this.violators.get(drone.serialNumber());
                violator.updateTime(capture);
                if (isDroneInNDZ(distance))
                    if (violator.getDistance() > distance)
                        violator.updateDrone(drone, distance);
            }
            else if (isDroneInNDZ(distance))
            {
                var pilot = client.getPilot(drone.serialNumber());
                violator = new Violator(pilot, drone, capture, distance);
                this.violators.put(drone.serialNumber(), violator);
            }
        }
        printViolators();
    }

    @Scheduled(fixedRate = 2000)
    public void updateViolators() throws Exception{
        var report = this.client.getReport();
        addViolator(report.capture());
        this.captureTime = report.capture().snapshotTimestamp();
        removeExpired();
    }

    public Map<String, Violator> getViolators(){
        return (this.violators);
    }

    public void printViolators(){
        System.out.println("----Map-----");
        for (Map.Entry<String, Violator> entry : violators.entrySet()) {
            System.out.println(entry.getValue().toString());
        }
    }

    public ViolatorReport getViolatorReport(){
        var array = this.violators.values().toArray(new Violator[this.violators.size()]);
        var violatorReport = new ViolatorReport(array, this.captureTime, moniteringStartTime);
        return (violatorReport);
    }
}
