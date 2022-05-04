package com.example.boxinator.Controllers;

import com.example.boxinator.Entities.BoxEntity;
import com.example.boxinator.Services.BoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
public class BoxController {
    @Autowired
    private BoxService boxService;

    @GetMapping("/rest/boxes")
    public List<BoxEntity> getAllBoxes() {
        return boxService.getAllBoxes();
    }

}
