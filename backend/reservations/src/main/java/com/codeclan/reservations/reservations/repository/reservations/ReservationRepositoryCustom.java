package com.codeclan.reservations.reservations.repository.reservations;

import com.codeclan.reservations.reservations.models.Reservation;

import java.util.List;

public interface ReservationRepositoryCustom {
    List<Reservation> findReservationsForAGivenCustomer(Long customerId);
    List<Reservation> findAllReservations();
    List<Reservation> findReservationsForAGivenDateForAGivenTime(String date, String startTime);
}
