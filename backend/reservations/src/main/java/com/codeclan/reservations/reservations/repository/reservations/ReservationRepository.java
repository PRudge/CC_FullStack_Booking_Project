package com.codeclan.reservations.reservations.repository.reservations;

import com.codeclan.reservations.reservations.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long>, ReservationRepositoryCustom {
    List <Reservation> findAllReservations();
    List<Reservation> findReservationsByDate(String date);
    List<Reservation> findReservationsForAGivenCustomer(Long customerId);
    List <Reservation> findReservationsForAGivenDateForAGivenTime(String date, String startTime);
}
