package com.birdnest.application.endpoints;

import com.birdnest.application.data.Violator;
import com.birdnest.application.Monitor;
import com.birdnest.application.data.ViolatorReport;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Endpoint
@AnonymousAllowed
public class ViolatorEndpoint {

    @Autowired
    private Monitor monitor;

    public @Nonnull ViolatorReport getViolatorReport() {
        var violatorReport =  this.monitor.getViolatorReport();
        return (violatorReport);
    }
}
