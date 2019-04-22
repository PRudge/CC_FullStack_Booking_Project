package com.codeclan.reservations.reservations.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "restaurants")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name="name")
    private String name;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "open_hours")
    private String opening_hours;

    @JsonIgnoreProperties("restaurants")
    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY)
    private List<Reservation> reservations;

    public Restaurant(){}

    public Restaurant(String name, int capacity, String opening_hours){
        this.name = name;
        this.capacity = capacity;
        this.opening_hours = opening_hours;
        this.reservations = new ArrayList<>();
    }

    public Long getId() {
            return Id;
    }

    public void setId(Long Id) {
            this.Id = Id;
    }

    public String getName() {
            return name;
    }

    public void setName(String name) {
            this.name = name;
    }

    public int getCapacity() {
            return capacity;
    }

    public void setCapacity(int capacity) {
            this.capacity = capacity;
    }

    public String getOpening_hours() {
            return opening_hours;
    }

    public void setOpening_hours(String opening_hours) {
            this.opening_hours = opening_hours;
    }

    public List<Reservation> getReservations() {
            return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
            this.reservations = reservations;
    }

    public void addReservations(Reservation reservation) {
            this.reservations.add(reservation);
    }
}


