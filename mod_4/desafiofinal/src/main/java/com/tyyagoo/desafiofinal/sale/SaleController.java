package com.tyyagoo.desafiofinal.sale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SaleController {

    @Autowired
    private SaleService saleService;

    public ResponseEntity<List<SaleDTO>> getAll() {
        return ResponseEntity.ok(saleService.getAll());
    }

    public ResponseEntity<SaleDTO> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(saleService.getOne(id));
    }
    
    public ResponseEntity<?> deleteOne(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
