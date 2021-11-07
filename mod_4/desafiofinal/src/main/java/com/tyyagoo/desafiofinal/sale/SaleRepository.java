package com.tyyagoo.desafiofinal.sale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {
    @Query("select count(s) from Sale s where s.seller.id = ?1")
    long countBySellerId(Long id);

    @Query("select s from Sale s where s.seller.id = ?1")
    List<Sale> findBySellerId(Long id);
}
