package com.tyyagoo.desafiofinal.salesman;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesmanService {

    @Autowired
    private SalesmanRepository salesmanRepository;

    public List<Salesman> getAll() {
        return salesmanRepository.findAll();
    }

    public Salesman getById(Long id) {
        return salesmanRepository
                .findById(id)
                .orElseThrow(SalesmanNotFoundException::new);
    }

    public Salesman create(String name) {
        return salesmanRepository.save(new Salesman(name));
    }

    public void deleteOne(Long id) {
        salesmanRepository.deleteById(id);
    }
}
