package igti.desafio.controller;

import igti.desafio.dto.ProductDto.Menu;
import igti.desafio.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<Menu> getMenu() {
        return ResponseEntity.ok().body(service.getAll());
    }
}
