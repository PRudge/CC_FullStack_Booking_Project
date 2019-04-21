package com.codeclan.reservations.reservations.components;


import com.codeclan.reservations.reservations.models.Customer;
import com.codeclan.reservations.reservations.models.Reservation;
import com.codeclan.reservations.reservations.models.Restaurant;
import com.codeclan.reservations.reservations.repository.customers.CustomerRepository;
import com.codeclan.reservations.reservations.repository.reservations.ReservationRepository;
import com.codeclan.reservations.reservations.repository.restaurants.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Abi", 345353455);
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Nuno", 123123123);
        customerRepository.save(customer2);

        Restaurant restaurant1 = new Restaurant(10, "12:00-22:00");
        restaurantRepository.save(restaurant1);

        Reservation reservation1 = new Reservation("12:50", 4, customer1, restaurant1);
        reservationRepository.save(reservation1);

        Reservation reservation2 = new Reservation("14:50", 3, customer2, restaurant1);
        reservationRepository.save(reservation2);


    }

}

