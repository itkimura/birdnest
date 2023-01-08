package com.birdnest.application;


import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
public class MonitorTests {
    @Test
    void InNDZ_WhenInZone_True(){
        var sut = new Monitor();
        var actual = sut.IsDroneInNDZ(250000.00f, 250000.00f);
        Assert.isTrue(actual, "Should return true");
    }

    @Test
    void InNDZ_NotInZone_False(){
        var sut = new Monitor();
        var actual = sut.IsDroneInNDZ(400000f, 250000f);
        Assert.isTrue(!actual, "Should return false");
    }
}
