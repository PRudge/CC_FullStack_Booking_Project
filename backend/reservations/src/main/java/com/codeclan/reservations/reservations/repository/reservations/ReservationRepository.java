package com.codeclan.reservations.reservations.repository.reservations;

import com.codeclan.reservations.reservations.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long>, ReservationRepositoryCustom {
}
