package com.birdnest.application;


import com.birdnest.application.data.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;
import org.junit.jupiter.api.Assertions;

import java.lang.reflect.Array;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@SpringBootTest
public class MonitorTests {

    @Test
    void CalculateDistance_WhenDistanceZero_Zero(){
        var sut = new Monitor(mock(BirdnestClient.class));
        var distance = sut.calculateDistance(250000.00f, 250000.00f);
        assertTrue((0 == distance), "Should return 0");
    }

    @Test
    void CalculateDistance_WhenDistanceZero_hundred(){
        var sut = new Monitor(mock(BirdnestClient.class));
        var distance = sut.calculateDistance(350000.00f, 250000.00f);
        assertTrue((100000 == distance), "Should return 100m");
    }
    @Test
    void AddNewViolator_WhenCannotGetPilot_SetPilotNotAvailable() throws Exception {
        Drone drone = new Drone("Test1234", "Test", "Test", "Test",
                "Test", "Test", "Test", 250000.00f, 250000.00f, 5000.0f);
        Drone[] drones = new Drone[1];
        drones[0] = drone;
        Capture capture = new Capture(drones, LocalDateTime.now(ZoneId.of("UTC")));
        double distance = 0;
        var mockedClient = mock(BirdnestClient.class);
        var sut = new Monitor(mockedClient);
        sut.addNewViolator(drone, capture, distance);
        var actual = sut.getViolatorReport().violators();
        assertTrue(actual.length == 1 && actual[0].getPilot().pilotId() == "Not Available", "Pilot should be not available");
    }

    @Test
    void AddNewViolator_WhenGetPilot_AddPilot() throws Exception {
        Drone drone = new Drone("Test1234", "Test", "Test", "Test",
                "Test", "Test", "Test", 250000.00f, 250000.00f, 5000.0f);
        Pilot pilot = new Pilot("Test", "Test", "Test", "Test", "Test", "Test");
        Drone[] drones = new Drone[1];
        drones[0] = drone;
        Capture capture = new Capture(drones, LocalDateTime.now(ZoneId.of("UTC")));
        var mockedClient = mock(BirdnestClient.class);
        when(mockedClient.getPilot(anyString())).thenReturn(pilot);
        var sut = new Monitor(mockedClient);
        sut.addNewViolator(drone, capture, 0);
        var actual = sut.getViolatorReport().violators();
        assertTrue(actual.length == 1 && actual[0].getPilot() == pilot, "Pilot should be the test pilot");
    }

    @Test
    void UpdateViolator_WhenViolatorSeenAgain_UpdateTime() throws Exception {
        Drone drone = new Drone("Test1234", "Test", "Test", "Test",
                "Test", "Test", "Test", 250000.00f, 250000.00f, 5000.0f);
        Pilot pilot = new Pilot("Test", "Test", "Test", "Test", "Test", "Test");
        Drone[] drones = new Drone[1];
        drones[0] = drone;
        Capture capture = new Capture(drones, LocalDateTime.now(ZoneId.of("UTC")).plusMinutes(-5));
        var mockedClient = mock(BirdnestClient.class);
        when(mockedClient.getPilot(anyString())).thenReturn(pilot);
        var sut = new Monitor(mockedClient);
        sut.addNewViolator(drone, capture, 0);
        var time = LocalDateTime.now(ZoneId.of("UTC"));
        capture = new Capture(drones, time);
        sut.updateViolator(drone, capture, 0);
        var actual = sut.getViolatorReport().violators()[0].getTime();
        assertTrue(time == actual, "Time should be updated");
    }

    @Test
    void UpdateViolator_WhenViolatorSeenAgain_UpdateTimeAndDistance() throws Exception {
        Drone drone = new Drone("Test1234", "Test", "Test", "Test",
                "Test", "Test", "Test", 250000.00f, 250000.00f, 5000.0f);
        Pilot pilot = new Pilot("Test", "Test", "Test", "Test", "Test", "Test");
        Drone[] drones = new Drone[1];
        drones[0] = drone;
        Capture capture = new Capture(drones, LocalDateTime.now(ZoneId.of("UTC")).plusMinutes(-5));
        var mockedClient = mock(BirdnestClient.class);
        when(mockedClient.getPilot(anyString())).thenReturn(pilot);
        var sut = new Monitor(mockedClient);
        sut.addNewViolator(drone, capture, 90000);
        var actual = sut.getViolatorReport().violators()[0].getDistance();
        sut.printViolators();
        var distance = 50000;
        capture = new Capture(drones, LocalDateTime.now(ZoneId.of("UTC")));
        sut.updateViolator(drone, capture, distance);
        actual = sut.getViolatorReport().violators()[0].getDistance();
        sut.printViolators();
        assertTrue(distance == actual, "Time should be updated");
    }


    @Test
    void RemoveExpired_WhenTimeIsOverTen_RemoveViolator(){
        Drone drone = new Drone("Test1234", "Test", "Test", "Test",
                "Test", "Test", "Test", 250000.00f, 250000.00f, 5000.0f);
        Drone[] drones = new Drone[1];
        drones[0] = drone;
        Pilot pilot = new Pilot("Test", "Test", "Test", "Test", "Test", "Test");
        Capture capture = new Capture(drones, LocalDateTime.now(ZoneId.of("UTC")).plusMinutes(-11));
        var violator = new Violator(pilot, drone, capture, 0);
        ConcurrentMap<String, Violator> violators = new ConcurrentHashMap<>();
        violators.put("Test", violator);
        var mockedClient = mock(BirdnestClient.class);
        var sut = new Monitor(mockedClient);
        sut.removeExpired(violators);
        assertTrue(violators.size() == 0, "Violators should be removed");

    }
}
