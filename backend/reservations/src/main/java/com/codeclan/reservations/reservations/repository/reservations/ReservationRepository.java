package com.codeclan.reservations.reservations.repository.reservations;

import com.codeclan.reservations.reservations.models.Reservation;
import com.codeclan.reservations.reservations.projections.ReservationProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = ReservationProjection.class)
public interface ReservationRepository extends JpaRepository<Reservation, Long>, ReservationRepositoryCustom {
    List<Reservation> findAllReservations();
    List<Reservation> findReservationsByDate(String date);
    List<Reservation> findReservationsForAGivenCustomer(Long customerId);
    List<Reservation> findReservationsForAGivenDateForAGivenTime(String date, String startTime);
    Reservation findReservationsById(Long Id);
}