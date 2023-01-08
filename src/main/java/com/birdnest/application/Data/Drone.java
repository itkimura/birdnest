package com.birdnest.application.data;

public record Drone(String serialNumber,
                    String model,
                    String manufacturer,
                    String mac,
                    String ipv4,
                    String ipv6,
                    String firmware,
                    float positionY,
                    float positionX,
                    float altitude) {
    public double getDistance(){
        var distance = Math.sqrt(
                        (this.positionX()-250000)*(this.positionX()-250000)
                        +(this.positionY()-250000)*(this.positionY()-250000));
        return (distance);
    }
}