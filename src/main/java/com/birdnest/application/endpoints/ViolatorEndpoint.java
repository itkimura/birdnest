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

    /*
    public @Nonnull List<Violator> getViolators() {
        var violators =  this.monitor.getViolators();
        System.out.println("----Map-----");
        for (Map.Entry<String, Violator> entry : violators.entrySet()) {
            System.out.println(entry.getValue().toString());
        }
        List<Violator> list = new ArrayList<>();
        for (Map.Entry<String, Violator> entry : violators.entrySet())
            list.add(entry.getValue());
        return (list);
    }
    */
    public @Nonnull ViolatorReport getViolatorReport() {
        var violatorReport =  this.monitor.getViolatorReport();
        /*
        for (Violator entry : violatorReport.violators())
            System.out.println(entry);

         */
        return (violatorReport);
    }
}
