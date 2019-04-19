package com.codeclan.reservations.reservations.repository.restaurants;


import com.codeclan.reservations.reservations.models.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long>, RestaurantRepositoryCustom {
}
