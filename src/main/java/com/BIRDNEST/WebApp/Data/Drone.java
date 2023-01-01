package com.BIRDNEST.WebApp.Data;

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
}