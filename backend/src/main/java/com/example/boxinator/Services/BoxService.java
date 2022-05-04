package com.example.boxinator.Services;

import com.example.boxinator.Entities.BoxEntity;
import com.example.boxinator.Repositories.BoxRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoxService {
    @Autowired
    private BoxRepo boxRepo;


    public List<BoxEntity> getAllBoxes() {
        List<BoxEntity> boxes = boxRepo.findAll();
        return boxes;
    }

}
