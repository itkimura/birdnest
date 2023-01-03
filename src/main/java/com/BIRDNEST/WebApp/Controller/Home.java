package com.BIRDNEST.WebApp.Controller;

import com.BIRDNEST.WebApp.Monitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
//@RestController
public class Home {
    @Autowired
    //private Monitor monitor;
    private Monitor monitor;
    @RequestMapping("/")
    public ModelAndView hello(ModelAndView mav, Model model) throws Exception{
        var violators =  this.monitor.addViolator();
        mav.addObject("violators", violators);
        mav.setViewName("home");
        return mav;
    }
}