package com.BIRDNEST.WebApp.Controller;

import com.BIRDNEST.WebApp.Data.Violator;
import com.BIRDNEST.WebApp.Monitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

//@Controller
@RestController
public class Home {
    /*
    private Monitor monitor;

    public Home(){
        this.monitor = new Monitor();
    }
    @RequestMapping("/")
    public String home() throws Exception{
        //var violators = this.monitor.addViolator();
        return ("hello");
    }
    */
    @Autowired
    //private Monitor monitor;
    private Monitor monitor;
    @RequestMapping("/")
    public ModelAndView hello(ModelAndView mav) throws Exception{
        var violators =  this.monitor.addViolator();
        StringBuilder str = new StringBuilder();
        for (Map.Entry<String, Violator> entry : violators.entrySet())
            str.append(entry.getValue().toString());
        mav.addObject("fromStr", str.toString());
        mav.setViewName("home");
        return mav;
    }
    /*
    @GetMapping("/") // GET request of HTTP
    public String index(){
        return ("home");
    }
    */
}