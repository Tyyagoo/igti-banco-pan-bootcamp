package igti.desafio.service;

import igti.desafio.modelo.Pedido;
import igti.desafio.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository repository;

    public Pedido fazer(Pedido pedido) {
        pedido.setDataHora(LocalDateTime.now(ZoneId.of("UTC")));
        pedido.setSituacao(Pedido.SITUACAO_AGUARDANDO);
        return repository.save(pedido);
    }

    public Optional<Pedido> obterPorId(Integer id) {
        return repository.findById(id);
    }

    public List<Pedido> obterTodos() {
        return repository.findAll();
    }

    public Optional<Pedido> atualizarPedido(Integer id, Pedido pedido) {
        return repository
                .findById(id)
                .map(p -> {
                    pedido.setId(p.getId());
                    return repository.save(pedido);
                });
    }
}
