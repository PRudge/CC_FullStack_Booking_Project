package com.codeclan.reservations.reservations.repository.reservations;

import com.codeclan.reservations.reservations.models.Reservation;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class ReservationRepositoryImpl implements ReservationRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Reservation> findAllReservations(){
        List<Reservation> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Reservation.class);
            results = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

    @Transactional
    public List<Reservation> findReservationsForAGivenCustomer(Long customerId){
        List<Reservation> results =null;

        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Reservation.class);
            cr.add(Restrictions.eq("customer.id", customerId));
            results = cr.list();
        }  catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

    @Transactional
    public List<Reservation> findReservationsForAGivenDateForAGivenTime(String date, String startTime){
        List<Reservation> results =null;

        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Reservation.class);
            cr.add(Restrictions.eq("date", date));
            cr.add(Restrictions.eq("startTime", startTime));
            results = cr.list();
        }  catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

    @Transactional
    public Reservation findReservationsById(Long Id){
        List<Reservation> results = null;

        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Reservation.class);
            cr.add(Restrictions.eq("Id", Id));
            results = cr.list();
        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }

        Reservation wantedReservation = results.get(0);
        return wantedReservation;
    }

}
