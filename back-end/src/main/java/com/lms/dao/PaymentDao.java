package com.lms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lms.entity.Payment;

@Repository
public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
