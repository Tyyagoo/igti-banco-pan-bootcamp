package com.tyyagoo.desafiofinal.salesman;

import com.tyyagoo.desafiofinal.sale.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SalesmanService {

    @Autowired
    private SalesmanRepository salesmanRepository;

    @Autowired
    private SaleRepository saleRepository;

    public List<SalesmanDTO> getAll() {
        return salesmanRepository
                .findAll()
                .stream()
                .map(SalesmanDTO::new)
                .collect(Collectors.toList());
    }

    // ugly ugly ugly ugly ugly ugly ugly ugly ugly ugly
    public List<Ranksman> getRank() {
        return salesmanRepository
                .findAll()
                .stream()
                .map(s -> new Ranksman(s, saleRepository.countBySellerId(s.getId())))
                .sorted(Comparator.naturalOrder())
                .collect(Collectors.toList());
    }

    public SalesmanDTO getById(Long id) {
        return salesmanRepository
                .findById(id)
                .map(SalesmanDTO::new)
                .orElseThrow(SalesmanNotFoundException::new);
    }

    public SalesmanDTO create(String name) {
        Salesman saved = salesmanRepository.save(new Salesman(name));
        return new SalesmanDTO(saved);
    }

    public void deleteOne(Long id) {
        salesmanRepository.deleteById(id);
    }
}
