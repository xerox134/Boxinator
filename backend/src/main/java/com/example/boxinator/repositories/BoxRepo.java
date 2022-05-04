package com.example.boxinator.repositories;

import com.example.boxinator.entities.Box;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoxRepo extends JpaRepository <Box,Long> {

}
