package com.codeclan.reservations.reservations.repository.customers;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class CustomerRepositoryImpl {
    @Autowired
    EntityManager entityManager;
}
