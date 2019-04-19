package com.codeclan.reservations.reservations.repository.customers;

import com.codeclan.reservations.reservations.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom{
}



