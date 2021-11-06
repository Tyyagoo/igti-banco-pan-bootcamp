package com.tyyagoo.desafiofinal;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.tyyagoo.desafiofinal.sale.Sale;
import com.tyyagoo.desafiofinal.salesman.SalesmanRepository;
import com.tyyagoo.desafiofinal.sale.SaleRepository;
import com.tyyagoo.desafiofinal.salesman.Salesman;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class RepositoryTest {

    @Autowired
    private SalesmanRepository salesmanRepository;

    @Autowired
    private SaleRepository saleRepository;

    @Test
    public void testRepository() {
        List<Salesman> salesmans =
                Stream.of("Hilma Cardea",
                        "Benedek Ela",
                        "Vitaliya Brittani",
                        "Philippos Marquinhos",
                        "Asaf Tanvi",
                        "Ganesh Ragna",
                        "Yvo Antoni",
                        "Konrad Barbie",
                        "Amparo Chibuike",
                        "Kylie Ashkii")
                .map(name -> new Salesman(name, Set.of()))
                .map(salesmanRepository::save)
                .collect(Collectors.toList());

        Assertions.assertEquals(10, salesmanRepository.count(), "Salesman count must be equal 10.");

        class SalesmanRandomizer {
            private final Random randomizer = new Random();

            Salesman get(List<Salesman> salesmanList) {
                return salesmanList.get(randomizer.nextInt(salesmanList.size()));
            }
        }

        SalesmanRandomizer salesmanRandomizer = new SalesmanRandomizer();

        List<Sale> sales = new Random()
                .doubles(5.00, 15000.00)
                .limit(100)
                .mapToObj(price -> new Sale(salesmanRandomizer.get(salesmans), price))
                .map(saleRepository::save)
                .collect(Collectors.toList());

        Assertions.assertEquals(100, saleRepository.count(), "Sales count must be equal to 100.");

        salesmanRepository.findAll().forEach(salesman -> {
            /*
            System.out.println(salesman);
            long numberOfSales = salesman.getSales().size();
            System.out.println(salesman.getSales());
            long salesInDb = saleRepository.countBySellerId(salesman.getId());

            Assertions.assertEquals(salesInDb, numberOfSales, "Number of sales of salesman must be equal to count by salesman.");
            */
            salesmanRepository.deleteById(salesman.getId());
            Optional<Salesman> mustBeEmptySalesman = salesmanRepository.findById(salesman.getId());
            Assertions.assertTrue(mustBeEmptySalesman.isEmpty(), "SalesmanOptional must be empty after salesman delete.");

            long afterDeleteSales = saleRepository.countBySellerId(salesman.getId());
            Assertions.assertEquals(0, afterDeleteSales, "Sales count by salesman must be equal 0 after salesman delete.");
        });
    }
}
