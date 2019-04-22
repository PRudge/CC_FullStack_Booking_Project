package com.codeclan.reservations.reservations.repository.restaurants;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class RestaurantRepositoryImpl {
    @Autowired
    EntityManager entityManager;
}
