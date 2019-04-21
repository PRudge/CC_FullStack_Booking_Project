package com.codeclan.reservations.reservations;

import com.codeclan.reservations.reservations.models.Customer;
import com.codeclan.reservations.reservations.models.Reservation;
import com.codeclan.reservations.reservations.repository.customers.CustomerRepository;
import com.codeclan.reservations.reservations.repository.reservations.ReservationRepository;
import com.codeclan.reservations.reservations.repository.restaurants.RestaurantRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static junit.framework.TestCase.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ReservationsApplicationTests {

	@Autowired
	RestaurantRepository restaurantRepository;

	@Autowired
	ReservationRepository reservationRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Test
	public void contextLoads() {
	}



	@Test
	public void canFindAllReservations(){
		List<Reservation> found = reservationRepository.findAllReservations();
		assertEquals(4, found.size() );
	}

	@Test
	public void canGetBookingsForGivenDate(){
		List<Reservation> found = reservationRepository.findReservationsByDate("23-4-2019");
		assertEquals(3, found.size());
	}

	@Test
	public void canFindReservationsForAGivenCustomer(){
		List<Reservation> found = reservationRepository.findReservationsForAGivenCustomer(3L);

		assertEquals(2, found.size());
		assertEquals("23-4-2019", found.get(0).getDate());
		assertEquals("27-4-2019", found.get(1).getDate());
	}



	@Test
	public void canFindfindReservationsForAGivenDateForAGivenTime(){
		List <Reservation> found = reservationRepository.findReservationsForAGivenDateForAGivenTime("23-4-2019", "14:30");
		assertEquals(2, found.size());
	}




}