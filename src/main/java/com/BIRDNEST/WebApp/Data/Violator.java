package com.BIRDNEST.WebApp.Data;

import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Data
@Getter
public class Violator {
    private String name;
    private String email;
    private String phone;
    private double distance;
    private LocalDateTime time;
    private Pilot pilot;
    private Drone drone;

    public Violator(Pilot pilot, Drone drone, Capture capture){
        this.time = capture.snapshotTimestamp();
        this.name = pilot.firstName() + " " + pilot.lastName();
        this.email = pilot.email();
        this.phone = pilot.phoneNumber();
        this.distance = drone.getDistance();
        this.pilot = pilot;
        this.drone = drone;
    }

    public void UpdateDrone(Drone drone, Capture capture){
        this.drone = drone;
        this.distance = drone.getDistance();
        this.time = capture.snapshotTimestamp();
    }

    @Override
    public String toString(){
        return ("[" + this.time.toString() + " "
                + this.name + " "
                + this.email + " "
                + this.phone + " "
                + String.valueOf(this.distance) + "]" );
    }
}
