/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.StatelessSession;
import org.springframework.stereotype.Component;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author srija
 */
@Component
public class HibernateUtil {

    private SessionFactory sessionFactory;

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public StatelessSession openStatelessSession() {
        StatelessSession statelessSession = null;
        try {
            statelessSession = sessionFactory.openStatelessSession();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return statelessSession;
    }

    public Session openSession() {
        Session session = null;
        try {
            session = sessionFactory.openSession();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return session;
    }
}
