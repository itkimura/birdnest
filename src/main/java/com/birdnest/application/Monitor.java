package com.birdnest.application;

import com.birdnest.application.data.Drone;
import com.birdnest.application.data.Violator;
import com.birdnest.application.data.ViolatorReport;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class Monitor{

    private IBirdnestClient client;
    //@Value("${violators}")
    private ConcurrentMap<String, Violator> violators;
    LocalDateTime captureTime;


    public Monitor(){
        this.client = new BirdnestClient();
        this.violators = new ConcurrentHashMap<String, Violator>();
    }

    public boolean IsDroneInNDZ(Float positionX, Float positionY) {
        var distance = Math.sqrt(((positionX-250000)*(positionX-250000))+((positionY-250000)*(positionY-250000)));
        System.out.println("Distance: " + distance);
        if (distance > 100000)
            return (false);
        return (true);
    }

    public void removeExpired() {
        for (Map.Entry<String, Violator> entry : this.violators.entrySet()) {
            entry.getValue().updateInterval();
            if (entry.getValue().getInterval() >= 600000)
                this.violators.remove(entry.getKey());
        }
    }
    @Scheduled(fixedRate = 2000)
    public void addViolator() throws Exception {
        var report = this.client.getReport();
        var drones = report.capture().drones();
        for (Drone drone : drones) {
            Violator violator;
            if (IsDroneInNDZ(drone.positionX(), drone.positionY())) {
                if (this.violators.containsKey(drone.serialNumber())) {
                    violator = this.violators.get(drone.serialNumber());
                    if (violator.getDistance() > drone.getDistance())
                        violator.updateDrone(drone, report.capture());
                } else {
                    var pilot = client.getPilot(drone.serialNumber());
                    violator = new Violator(pilot, drone, report.capture());
                    this.violators.put(drone.serialNumber(), violator);
                }
            }
        }
        this.captureTime = report.capture().snapshotTimestamp();
        removeExpired();
    }

    public Map<String, Violator> getViolators(){
        return (this.violators);
    }

    public ViolatorReport getViolatorReport(){
        var array = this.violators.values().toArray(new Violator[this.violators.size()]);
        var violatorReport = new ViolatorReport(array, this.captureTime);
        return (violatorReport);
    }
}
