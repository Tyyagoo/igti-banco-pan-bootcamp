package igti.desafio.service;

import igti.desafio.modelo.Produto;
import igti.desafio.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    public List<Produto> obterTodos() {
        return repository.findAll();
    }
}
