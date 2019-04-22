package com.codeclan.reservations.reservations.projections;

<<<<<<< HEAD
import com.codeclan.reservations.reservations.models.Customer;
import com.codeclan.reservations.reservations.models.Reservation;
import com.codeclan.reservations.reservations.models.Restaurant;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedRestaurant", types = Reservation.class)
public interface ReservationProjection {
    long getId();
    String getDate();
    String getStartTime();
    Restaurant getRestauran();
    Customer getCustomer();
=======
public interface ReservationProjection {
>>>>>>> develop
}
