package com.codeclan.reservations.reservations.repository.customers;

import com.codeclan.reservations.reservations.models.Customer;
import com.codeclan.reservations.reservations.projections.CustomerProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(excerptProjection = CustomerProjection.class)
public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom{
}
