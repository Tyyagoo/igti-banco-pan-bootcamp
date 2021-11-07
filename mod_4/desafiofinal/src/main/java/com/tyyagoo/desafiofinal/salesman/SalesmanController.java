package com.tyyagoo.desafiofinal.salesman;

import com.tyyagoo.desafiofinal.sale.SaleDTO;
import com.tyyagoo.desafiofinal.sale.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/salesman")
public class SalesmanController {

    @Autowired
    private SalesmanService salesmanService;

    @Autowired
    private SaleService saleService;

    @GetMapping
    public ResponseEntity<List<SalesmanDTO>> getAll() {
        return ResponseEntity.ok(salesmanService.getAll());
    }

    @GetMapping(path = "/rank")
    public ResponseEntity<List<Ranksman>> getRanked() {
        return ResponseEntity.ok(salesmanService.getRank());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<SalesmanDTO> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(salesmanService.getById(id));
    }

    @PostMapping
    public ResponseEntity<SalesmanDTO> createOne(@RequestBody SalesmanDTO payload) {
        return ResponseEntity.ok(salesmanService.create(payload.getName()));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteOne(@PathVariable Long id) {
        salesmanService.deleteOne(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PostMapping(path = "/{sellerId}/sales")
    public ResponseEntity<SaleDTO> addSale(@PathVariable Long sellerId, @RequestBody SaleDTO saleDTO) {
        return ResponseEntity.ok(saleService.create(sellerId, saleDTO));
    }

    @GetMapping(path = "/{sellerId}/sales")
    public ResponseEntity<List<SaleDTO>> salesFromSeller(@PathVariable Long sellerId) {
        return ResponseEntity.ok(saleService.getAllBySeller(sellerId));
    }
}
