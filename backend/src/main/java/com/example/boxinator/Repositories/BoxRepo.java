package com.example.boxinator.Repositories;

import com.example.boxinator.Entities.BoxEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoxRepo extends JpaRepository<BoxEntity, Long> {
    List<BoxEntity> findAll();

}
