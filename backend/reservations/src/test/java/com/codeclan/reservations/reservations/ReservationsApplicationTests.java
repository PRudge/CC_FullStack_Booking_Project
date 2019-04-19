package com.codeclan.reservations.reservations;

import com.codeclan.reservations.reservations.models.Customer;
import com.codeclan.reservations.reservations.repository.customers.CustomerRepository;
import com.codeclan.reservations.reservations.repository.reservations.ReservationRepository;
import com.codeclan.reservations.reservations.repository.restaurants.RestaurantRepository;
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
	public void canGetCustomerName() {
		Customer customer1 = new Customer("Abi", 345353455);
		assertEquals("Abi", customer1.getName());

	}

	@Test
	public void canGetCustomerPhoneNum() {
		Customer customer1 = new Customer("Abi", 345353455);
		assertEquals(345353455, customer1.getPhoneNum());

	}
}