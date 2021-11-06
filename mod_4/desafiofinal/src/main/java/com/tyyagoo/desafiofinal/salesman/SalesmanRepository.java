package com.tyyagoo.desafiofinal.salesman;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

public interface SalesmanRepository extends CrudRepository<Salesman, Long> { }
