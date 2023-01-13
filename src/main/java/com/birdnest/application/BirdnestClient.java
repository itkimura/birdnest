package com.birdnest.application;

import com.birdnest.application.data.Pilot;
import com.birdnest.application.data.Report;

public interface BirdnestClient {
    Report getReport() throws Exception;

    Pilot getPilot(String serialNumber) throws Exception;
}
