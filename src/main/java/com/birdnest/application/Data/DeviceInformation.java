package com.birdnest.application.data;

public record DeviceInformation(String deviceId,
                                float listenRange,
                                String deviceStarted,
                                long uptimeSeconds,
                                long updateIntervalMs) {
}