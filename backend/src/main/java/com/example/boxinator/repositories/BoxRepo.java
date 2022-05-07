package com.example.boxinator.repositories;

import com.example.boxinator.entities.Box;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Array;
import java.util.List;

@Repository
public interface BoxRepo extends JpaRepository <Box,Long> {

    @Query(value = "INSERT INTO boxes VALUES (?1,?2,?3,?4,?5,?6)", nativeQuery = true)
    Box sendBox(Integer numb,String name,String box_color, Integer weight, Double shipping_cost,String country);

    @Query(value = "SELECT * FROM boxes", nativeQuery = true)
    List<Box> getAllBoxes();

    @Query(value = "SELECT SUM(weight) FROM boxes", nativeQuery = true)
    Double getTotalWeight();

    @Query(value = "SELECT SUM(shipping_cost) FROM boxes", nativeQuery = true)
    Double getTotalSum();


}
