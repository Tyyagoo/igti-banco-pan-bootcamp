package com.tyyagoo.desafiofinal.sale;

import com.tyyagoo.desafiofinal.salesman.SalesmanNotFoundException;
import com.tyyagoo.desafiofinal.salesman.SalesmanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SalesmanRepository salesmanRepository;

    public SaleDTO create(Long sellerId, SaleDTO saleDTO) {
        return salesmanRepository
                .findById(sellerId)
                .map(salesman -> {
                    Sale sale = new Sale(saleDTO.getPrice(), salesman);
                    return saleRepository.save(sale);
                })
                .map(SaleDTO::new)
                .orElseThrow(SalesmanNotFoundException::new);
    }

    public List<SaleDTO> getAll() {
        return saleRepository
                .findAll()
                .stream()
                .map(SaleDTO::new)
                .collect(Collectors.toList());
    }

    public List<SaleDTO> getAllBySeller(Long sellerId) {
        return saleRepository
                .findBySellerId(sellerId)
                .stream()
                .map(SaleDTO::new)
                .collect(Collectors.toList());
    }

    public SaleDTO getOne(Long id) {
        return saleRepository
                .findById(id)
                .map(SaleDTO::new)
                .orElseThrow(SaleNotFoundException::new);
    }

    public void deleteOne(Long id) {
        saleRepository.deleteById(id);
    }
}
