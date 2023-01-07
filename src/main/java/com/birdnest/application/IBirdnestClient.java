package com.birdnest.application;

import com.birdnest.application.Data.*;

public interface IBirdnestClient {
    Report getReport() throws Exception;
    Pilot getPilot(String serialNumber) throws Exception;
}
