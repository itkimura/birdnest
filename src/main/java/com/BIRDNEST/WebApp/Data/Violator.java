package com.BIRDNEST.WebApp.Data;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Data
@Getter
@Setter
public class Violator {
    private String name;
    private String email;
    private String phone;
    private double distance;
    private Pilot pilot;
    private Drone drone;

    private LocalDateTime time;

    long interval;
    int ago;
    ZoneId zone;


    public Violator(Pilot pilot, Drone drone, Capture capture){
        this.zone = ZoneId.of("UTC");
        this.name = pilot.firstName() + " " + pilot.lastName();
        this.email = pilot.email();
        this.phone = pilot.phoneNumber();
        this.distance = drone.getDistance();
        this.time = capture.snapshotTimestamp();
        this.interval = (dateToLong(LocalDateTime.now(zone)) - dateToLong(capture.snapshotTimestamp()))/ (1000 * 60 *60 * 24);
        this.ago = (int) (interval / 60000);
        this.pilot = pilot;
        this.drone = drone;
    }

    public Long dateToLong(LocalDateTime localDateTime) {
        ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, zone);
        Long date = zonedDateTime.toInstant().toEpochMilli();
        return (date);
    }

    public void updateInterval(){
        this.interval = (dateToLong(LocalDateTime.now(zone)) - dateToLong(this.time));
        this.ago = (int) (interval / 60000);
    }

    public void updateDrone(Drone drone, Capture capture){
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
                + String.valueOf(this.distance) +"]" );
    }
}
