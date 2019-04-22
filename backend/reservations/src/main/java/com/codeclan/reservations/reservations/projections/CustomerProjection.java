package com.codeclan.reservations.reservations.projections;

import com.codeclan.reservations.reservations.models.Customer;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedReservations", types = Customer.class)
public interface CustomerProjection {
//    long getId();
//    String getFirstName();
//    String getLastName();
    List<ReservationProjection> getReservations();
}
