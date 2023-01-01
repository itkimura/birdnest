package com.BIRDNEST.WebApp.Data;

public record DeviceInformation(String deviceId,
                                float listenRange,
                                String deviceStarted,
                                long uptimeSeconds,
                                long updateIntervalMs) {
}