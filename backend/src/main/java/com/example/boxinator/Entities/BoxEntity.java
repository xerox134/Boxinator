package com.example.boxinator.Entities;

import javax.persistence.*;

@Entity
@Table(name = "boxes")
public class BoxEntity {
    private String name;
    private String color;

    public BoxEntity(String name, String color) {
        this.name = name;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "BoxEntity{" +
                "name='" + name + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
