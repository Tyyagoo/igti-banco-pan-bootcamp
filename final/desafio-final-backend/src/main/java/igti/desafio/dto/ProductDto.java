package igti.desafio.dto;

import igti.desafio.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

public class ProductDto {

    @Data @AllArgsConstructor
    public static class Menu {
        private List<Product> products;
        private int amount;
    }
}
