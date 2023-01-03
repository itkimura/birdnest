package com.BIRDNEST.WebApp;

import com.BIRDNEST.WebApp.Data.Drone;
import com.BIRDNEST.WebApp.Data.Violator;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class Monitor{

    private BirdnestClient client;
    private Map<String, Violator> violators;

    public Monitor(){
        this.client = new BirdnestClient();
        this.violators = new HashMap<String, Violator>();
    }

    public boolean IsDroneInNDZ(Float positionX, Float positionY) {
        var distance = Math.sqrt((positionX-250000)*(positionX-250000)+(positionY-250000)*(positionY-250000));
        System.out.println("Distance:" + distance);
        if (distance > 100000f)
            return (false);
        return (true);
    }

    public Map<String, Violator> addViolator() throws Exception {
        var report = this.client.getReport();
        var drones = report.capture().drones();
        for (Drone drone : drones) {
            Violator violator;
            if (IsDroneInNDZ(drone.positionX(), drone.positionY())) {
                if (this.violators.containsKey(drone.serialNumber())) {
                    violator = this.violators.get(drone.serialNumber());
                    if (violator.getDistance() > drone.getDistance()) {
                        System.out.println("Update:" + violator.getDistance() + "->" + drone.getDistance());
                        violator.UpdateDrone(drone, report.capture());
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
        return (this.violators);
    }
}
