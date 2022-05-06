package com.example.boxinator.controllers;

import com.example.boxinator.entities.Box;
import com.example.boxinator.services.BoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BoxController {
    @Autowired
    private BoxService boxService;

    @GetMapping("/hello")
    public String helloWorld(){
        return "Hello World";
    }

    @GetMapping("/rest/boxes")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Box> getAllBoxes(){
        return boxService.getAll();
    }

    @PostMapping("/rest/boxes1")
    @CrossOrigin(origins = "http://localhost:3000")
    public Box createThread(@RequestBody Box boxInfo) {
        System.out.println("test 1");
        return boxService.createBox(boxInfo);
    }

}
