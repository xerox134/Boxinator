package com.example.boxinator.services;

import com.example.boxinator.entities.Box;
import com.example.boxinator.repositories.BoxRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoxService {
    @Autowired
    private BoxRepo boxRepo;

    public List<Box> getAll(){
        return boxRepo.findAll();
    }
}
