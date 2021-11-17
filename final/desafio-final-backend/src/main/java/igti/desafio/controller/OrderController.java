package igti.desafio.controller;

import igti.desafio.model.Order;
import igti.desafio.dto.OrderDto.*;
import igti.desafio.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/orders")
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Create payload) {
        return ResponseEntity.ok().body(service.create(payload));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable  Integer id) {
        return service.getById(id)
                .map(ResponseEntity.ok()::body)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<Listed> getOrders() {
        return ResponseEntity.ok().body(new Listed(service.getAll()));
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Integer id, @RequestBody Update payload) {
        return service.update(id, payload)
                .map(ResponseEntity.ok()::body)
                .orElse(ResponseEntity.badRequest().build());
    }
}
