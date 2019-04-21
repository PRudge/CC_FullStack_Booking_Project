package com.codeclan.reservations.reservations.controllers;

import com.codeclan.reservations.reservations.models.Reservation;
import com.codeclan.reservations.reservations.repository.reservations.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    ReservationRepository reservationRepository;


//    List<Reservation> findReservationsByDate(String date);
//    List<Reservation> findReservationsForAGivenCustomer(Long customerId);
//    List <Reservation> findReservationsForAGivenDateForAGivenTime(String date, String startTime);



    @GetMapping("/{date}")
    public List<Reservation> getFindReservationsByDate(@PathVariable String date){
        return reservationRepository.findReservationsByDate(date);
    }

}

