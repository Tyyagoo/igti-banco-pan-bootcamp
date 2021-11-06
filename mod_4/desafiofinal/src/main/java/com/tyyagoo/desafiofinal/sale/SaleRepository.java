package com.tyyagoo.desafiofinal.sale;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface SaleRepository extends CrudRepository<Sale, Long> {
    @Query("select count(s) from Sale s where s.seller.id = ?1")
    long countBySellerId(Long id);
}
