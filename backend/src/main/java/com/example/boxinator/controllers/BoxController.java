package com.example.boxinator.controllers;

import com.example.boxinator.entities.Box;
import com.example.boxinator.services.BoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<Box> getAllBoxes(){
        return boxService.getAll();
    }

}
