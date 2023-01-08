package com.birdnest.application.data;

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
    ZoneId zone;


    public Violator(Pilot pilot, Drone drone, Capture capture, double distance){
        this.zone = ZoneId.of("UTC");
        this.name = pilot.firstName() + " " + pilot.lastName();
        this.email = pilot.email();
        this.phone = pilot.phoneNumber();
        this.distance = distance;
        this.time = capture.snapshotTimestamp();
        this.pilot = pilot;
        this.drone = drone;
        setInterval();
    }

    public Long dateToLong(LocalDateTime localDateTime) {
        ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, zone);
        Long date = zonedDateTime.toInstant().toEpochMilli();
        return (date);
    }

    public void setInterval(){
        this.interval = dateToLong(LocalDateTime.now(zone))- dateToLong(this.time);
    }

    public void updateTime(Capture capture){
        this.time = capture.snapshotTimestamp();
        setInterval();
    }

    public void updateDrone(Drone drone, double distance){
        this.drone = drone;
        this.distance = distance;
    }

    @Override
    public String toString(){
        return ("[" + this.time.toString() + " "
                + this.name + " "
                + this.email + " "
                + this.phone + " "
                + this.interval + " "
                + String.valueOf(this.distance) +"]" );
    }
}
