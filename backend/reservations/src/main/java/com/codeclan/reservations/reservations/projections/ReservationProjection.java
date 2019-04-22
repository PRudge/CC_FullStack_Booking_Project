package com.codeclan.reservations.reservations.projections;

import com.codeclan.reservations.reservations.models.Customer;
import com.codeclan.reservations.reservations.models.Reservation;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedCustomer", types = Reservation.class)
public interface ReservationProjection {
    long getId();
    String getDate();
    String getStartTime();
    Customer getCustomer();
}