package com.birdnest.application.data;

public record Pilot(String pilotId,
                    String firstName,
                    String lastName,
                    String phoneNumber,
                    String createdDt,
                    String email) {
}