package com.BIRDNEST.WebApp;

import com.BIRDNEST.WebApp.Data.Drone;
import com.BIRDNEST.WebApp.Data.Violator;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class Monitor{

    private IBirdnestClient client;
    //@Value("${violators}")
    private ConcurrentMap<String, Violator> violators;

    public Monitor(){
        this.client = new BirdnestClient();
        this.violators = new ConcurrentHashMap<String, Violator>();
    }

    public boolean IsDroneInNDZ(Float positionX, Float positionY) {
        var distance = Math.sqrt((positionX-250000)*(positionX-250000)+(positionY-250000)*(positionY-250000));
        System.out.println("Distance:" + distance);
        if (distance > 100000f)
            return (false);
        return (true);
    }

    public void removeExpired() {
        for (Map.Entry<String, Violator> entry : this.violators.entrySet()) {
            entry.getValue().updateInterval();
            if (entry.getValue().getInterval() >= 600000)
                this.violators.remove(entry.getKey());
            System.out.println("ago: " + entry.getValue().getAgo());
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
                    if (violator.getDistance() > drone.getDistance()) {
                        System.out.println("Update:" + violator.getDistance() + "->" + drone.getDistance());
                        violator.updateDrone(drone, report.capture());
                    }
                    System.out.println("Not Update:" + violator.getDistance() + "->" + drone.getDistance());
                }
            } else {
                var pilot = client.getPilot(drone.serialNumber());
                violator = new Violator(pilot, drone, report.capture());
                this.violators.put(drone.serialNumber(), violator);
            }
        }
        System.out.println("---------");
        for (Map.Entry<String, Violator> entry : this.violators.entrySet()) {
            System.out.println(entry.getValue().toString());
        }
        System.out.println("---------");
        removeExpired();
    }

    public Map<String, Violator> getViolators(){
        return (this.violators);
    }
}
