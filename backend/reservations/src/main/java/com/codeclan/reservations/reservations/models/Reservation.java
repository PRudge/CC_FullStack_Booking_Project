package com.codeclan.reservations.reservations.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "reservations")
public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "date")
    private String date;
    @Column(name = "start_time")
    private String startTime;
    @Column(name="num_guests")
    private int numGuest;

    @JsonIgnoreProperties("reservations")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @JsonIgnoreProperties("reservations")
    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;

    public Reservation(){}

    public Reservation(String date, String startTime, int numGuest, Customer customer, Restaurant restaurant){

        this.date = date;
        this.startTime = startTime;
        this.numGuest = numGuest;
        this.customer = customer;
        this.restaurant = restaurant;
    }

    public static boolean isAvailable(String date, String startTime, int numGuest, List<Reservation> reservations, Restaurant restaurant) {

        int guestTotal = 0;

        for (Reservation res: reservations){

            if ((res.getStartTime().equals(startTime)) && (res.getDate().equals(date))) {
                guestTotal += res.getNumGuest();
            }
        }

        if (numGuest > (restaurant.getCapacity() - guestTotal)){
            return false;
        } else {
            return true;
        }

    }

    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }


    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public int  getNumGuest() {
        return numGuest;
    }

    public void setNumGuest(int numGuest) {
        this.numGuest = numGuest;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
