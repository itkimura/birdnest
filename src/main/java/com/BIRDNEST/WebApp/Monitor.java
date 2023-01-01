package com.BIRDNEST.WebApp;

public class Monitor {

    public boolean IsDroneInNDZ(Float positionX, Float positionY) {
        var distance = Math.sqrt((positionX-250000)*(positionX-250000)+(positionY-250000)*(positionY-250000));
        System.out.println("Distance:" + distance);
        if (distance > 100000f)
            return (false);
        return (true);
    }
}
