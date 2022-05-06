package com.example.boxinator.services;

import com.example.boxinator.entities.Box;
import com.example.boxinator.repositories.BoxRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BoxService {
    @Autowired
    private BoxRepo boxRepo;
    private final Map<String, Double> Countries = Map.of(
            "Sweden", 1.3,
            "Australia", 7.2,
            "China", 4.0,
            "Brazil", 8.6
    );



    public List<Box> getAll(){
        return boxRepo.getAllBoxes();

        // Without query:
        //return boxRepo.findAll();
    }

    public List<Box> createBox(Box boxInfo) {
        for (String i: Countries.keySet()) {
            if (boxInfo.getCountry().equalsIgnoreCase(i)){
                double shipping_cost = boxInfo.getWeight() * Countries.get(i);
                boxInfo.setShipping_cost( (Math.round(shipping_cost *100.0)/100.0));
                 return boxRepo.sendBoxes(null,boxInfo.getName(),boxInfo.getBox_color(),boxInfo.getWeight(),boxInfo.getShipping_cost(),boxInfo.getCountry());
                 //Without sql query:
                // return boxrepo.save(boxInfo)
            }

        }

        return null;

    }
}
