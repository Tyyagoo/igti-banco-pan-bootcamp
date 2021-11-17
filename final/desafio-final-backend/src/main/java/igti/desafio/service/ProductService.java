package igti.desafio.service;

import igti.desafio.dto.ProductDto;
import igti.desafio.model.Product;
import igti.desafio.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public ProductDto.Menu getAll() {
        List<Product> productList = repository.findAll();
        return new ProductDto.Menu(productList, productList.size());
    }
}
