package com.example.boxinator.entities;

import javax.persistence.*;

@Entity
@Table(name="boxes")
public class Box {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String box_color;
    private Integer weight;
    private String country;
    private Double shipping_cost;


    public Box() {

    }

    public Box(Long id, String name, String box_color, Integer weight, String country, Double shipping_cost) {
        this.id = id;
        this.name = name;
        this.box_color = box_color;
        this.weight = weight;
        this.country = country;
        this.shipping_cost = shipping_cost;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBox_color() {
        return box_color;
    }

    public void setBox_color(String box_color) {
        this.box_color = box_color;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Double getShipping_cost() {
        return shipping_cost;
    }

    public void setShipping_cost(Double shipping_cost) {
        this.shipping_cost = shipping_cost;
    }

    @Override
    public String toString() {
        return "Box{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", box_color='" + box_color + '\'' +
                ", weight=" + weight +
                ", country='" + country + '\'' +
                ", shipping_cost=" + shipping_cost +
                '}';
    }
}
