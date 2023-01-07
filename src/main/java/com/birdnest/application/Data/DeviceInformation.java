package com.birdnest.application.Data;

public record DeviceInformation(String deviceId,
                                float listenRange,
                                String deviceStarted,
                                long uptimeSeconds,
                                long updateIntervalMs) {
}