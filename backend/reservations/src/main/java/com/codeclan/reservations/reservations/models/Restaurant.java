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
        public Long id;

        @Column(name = "capacity")
        private int capacity;

        @JsonIgnoreProperties("restaurants")
        @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY)
        private List<Reservation> reservations;

        public Restaurant(){}

        public Restaurant(int capacity){
            this.capacity = capacity;
            this.reservations = new ArrayList<>();
        }

}


