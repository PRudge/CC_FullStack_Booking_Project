package com.codeclan.reservations.reservations.controllers;

import com.codeclan.reservations.reservations.models.Customer;
import com.codeclan.reservations.reservations.models.Reservation;
import com.codeclan.reservations.reservations.models.Restaurant;
import com.codeclan.reservations.reservations.repository.customers.CustomerRepository;
import com.codeclan.reservations.reservations.repository.reservations.ReservationRepository;
import com.codeclan.reservations.reservations.repository.restaurants.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/new")
    public List<Reservation> getFindAllReservations(){
        return reservationRepository.findAll();
    }

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

    @PostMapping("/new")
    public Reservation createReservation(
            @RequestBody HashMap<String, String> body
    ) {
        String date = body.get("date");
        String startTime = body.get("startTime");
        int numGuest = Integer.parseInt( body.get("numGuest") );

        String restaurantUrl = body.get("restaurant");
        String[] restaurantUrlSections = restaurantUrl.split("/");
        String restaurantIdString = restaurantUrlSections[restaurantUrlSections.length - 1];
        Long restaurantId = Long.parseLong(restaurantIdString);
        Optional<Restaurant> maybeRestaurant = restaurantRepository.findById(restaurantId);
        Restaurant restaurant = maybeRestaurant.get();

        String customerUrl = body.get("customer");
        String[] customerUrlSections = customerUrl.split("/");
        String customerIdString = customerUrlSections[customerUrlSections.length - 1];
        Long customerId = Long.parseLong(customerIdString);
        Optional<Customer> maybeCustomer = customerRepository.findById(customerId);
        Customer customer = maybeCustomer.get();

        List<Reservation> reservations = reservationRepository.findAll();

        if (Reservation.isAvailable(date, startTime, numGuest, reservations,restaurant)) {
            Reservation reservation = new Reservation(date, startTime, numGuest, customer, restaurant);
            try {
            reservationRepository.save(reservation);
            return reservation;
            } catch (Exception ex){
                ex.printStackTrace();
                System.out.println(ex.getMessage());
            } finally {
                return null;
            }
        }
        else {
            return null;
       }
    }

}