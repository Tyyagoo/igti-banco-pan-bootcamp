package com.tyyagoo.desafiofinal.salesman;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/salesman")
public class SalesmanController {

    @Autowired
    private SalesmanService salesmanService;

    @GetMapping
    public ResponseEntity<List<Salesman>> getAll() {
        return ResponseEntity.ok(salesmanService.getAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Salesman> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(salesmanService.getById(id));
    }

    @PostMapping
    public ResponseEntity<?> createOne(@Valid SalesmanPayloadDTO payload, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(bindingResult.getFieldErrors());
        }
        return ResponseEntity.ok(salesmanService.create(payload.getName()));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteOne(@PathVariable Long id) {
        salesmanService.deleteOne(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
