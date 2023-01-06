package com.BIRDNEST.WebApp;

import com.BIRDNEST.WebApp.Data.Pilot;
import com.BIRDNEST.WebApp.Data.Report;

public interface IBirdnestClient {
    Report getReport() throws Exception;
    Pilot getPilot(String serialNumber) throws Exception;
}
