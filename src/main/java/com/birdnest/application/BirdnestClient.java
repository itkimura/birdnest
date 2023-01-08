package com.birdnest.application;

import com.birdnest.application.data.*;

public interface BirdnestClient {
    Report getReport() throws Exception;
    Pilot getPilot(String serialNumber) throws Exception;
}
