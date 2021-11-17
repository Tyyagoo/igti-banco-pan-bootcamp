package igti.desafio.service;

import igti.desafio.dto.OrderDto;
import igti.desafio.model.Order;
import igti.desafio.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public Order create(OrderDto.Create payload) {
        return repository.save(payload.toModel());
    }

    public List<Order> getAll() {
        return repository.findAll();
    }

    public Optional<Order> getById(Integer id) {
        return repository.findById(id);
    }

    public Optional<Order> update(Integer id, OrderDto.Update payload) {
        return repository.findById(id)
                .flatMap(payload::updateModel)
                .map(repository::save);
    }
}
