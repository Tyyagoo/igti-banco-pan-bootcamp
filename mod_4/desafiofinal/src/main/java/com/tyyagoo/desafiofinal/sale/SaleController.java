package com.tyyagoo.desafiofinal.sale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sale")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping
    public ResponseEntity<List<SaleDTO>> getAll() {
        return ResponseEntity.ok(saleService.getAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<SaleDTO> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(saleService.getOne(id));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteOne(@PathVariable Long id) {
        saleService.deleteOne(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
