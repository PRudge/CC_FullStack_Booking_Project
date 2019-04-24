package com.codeclan.reservations.reservations.controllers;

import com.codeclan.reservations.reservations.models.Reservation;
import com.codeclan.reservations.reservations.repository.customers.CustomerRepository;
import com.codeclan.reservations.reservations.repository.reservations.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    CustomerRepository customerRepository;


    @GetMapping("/date/{date}")
    public List<Reservation> getFindReservationsByDate(@PathVariable String date){
        return reservationRepository.findReservationsByDate(date);
    }

    @GetMapping("/customer/{customerId}")
    public List<Reservation> getFindReservationsForAGivenCustomer(@PathVariable Long customerId){
        return reservationRepository.findReservationsForAGivenCustomer(customerId);
    }

    @GetMapping("/date/{date}/time/{startTime}")
    public List<Reservation>  getFindReservationsForAGivenDateForAGivenTime(@PathVariable String date, @PathVariable String startTime){
        return reservationRepository.findReservationsForAGivenDateForAGivenTime(date, startTime);
    }

//    @GetMapping("/{Id}")
//    public Reservation getFindReservationById(@PathVariable Long Id){
//        return reservationRepository.findReservationsById(Id);
//    }

}