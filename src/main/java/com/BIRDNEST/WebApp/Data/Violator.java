package com.BIRDNEST.WebApp.Data;

import java.time.LocalDateTime;
import java.time.temporal.Temporal;

public class Violator {
    private Pilot pilot;
    private Drone drone;
    private double distance;
    private LocalDateTime time;

    public Violator(Pilot pilot, Drone drone, Capture capture){
        this.pilot = pilot;
        this.drone = drone;
        this.distance = Math.sqrt((this.drone().positionX()-250000)*(this.drone().positionX()-250000)+(this.drone().positionY()-250000)*(this.drone().positionY()-250000));
        this.time = capture.snapshotTimestamp();
    }
    public Pilot pilot(){
        return (this.pilot);
    }

    public Drone drone(){
        return (this.drone);
    }

    public double distance(){
        return (this.distance);
    }

    public Temporal time(){
        return (this.time);
    }

    public void UpdateDrone(Drone drone){
        this.drone = drone;
        this.distance = Math.sqrt((drone().positionX()-250000)*(drone().positionX()-250000)+(drone().positionY()-250000)*(drone().positionY()-250000));
    }
}
