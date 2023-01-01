package com.BIRDNEST.WebApp.Controller;

import com.BIRDNEST.WebApp.BirdnestClient;
import com.BIRDNEST.WebApp.Data.Violator;
import com.BIRDNEST.WebApp.Monitor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

//@Controller
@RestController
public class Home {
    private BirdnestClient client;
    private Monitor monitor;
    private Map<String, Violator> violators;

    public Home(){
       client = new BirdnestClient();
       monitor = new Monitor();
       violators = new HashMap<String, Violator>();
    }

    @RequestMapping("/")
    public String hello() throws Exception{
        var report = client.getReport();
        //var pilot = sut.getPilot(actual.capture().drones()[0].serialNumber());
        var drones = report.capture().drones();

        System.out.println("---------");
        for (Map.Entry<String, Violator> entry: violators.entrySet()) {
            System.out.print("[" + entry.getValue().pilot().firstName() + " ");
            System.out.print(entry.getValue().pilot().lastName() + " ");
            System.out.print(entry.getValue().pilot().email() + " ");
            System.out.print(entry.getValue().pilot().phoneNumber() + " ");
            System.out.print(entry.getValue().distance() + " ");
            System.out.print(entry.getValue().time() + " ");
            System.out.println("]");
        }
        System.out.println("---------");
        return ("home");
    }
    /*
    @GetMapping("/") // GET request of HTTP
    public String index(){
        return ("home");
    }
    */
}