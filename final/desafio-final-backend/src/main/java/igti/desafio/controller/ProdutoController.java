package igti.desafio.controller;

import java.util.List;

import igti.desafio.modelo.Pedido;
import igti.desafio.service.PedidoService;
import igti.desafio.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import igti.desafio.modelo.Produto;

@RestController
@Transactional
public class ProdutoController {

	@Autowired
	private ProdutoService produtoService;

	@Autowired
	private PedidoService pedidoService;

	@GetMapping("/cardapio")
	public List<Produto> listaProdutos() {
		return produtoService.obterTodos();
	}

	@PostMapping("/pedidos")
	public Pedido fazerPedido(@RequestBody Pedido pedido) {
		return pedidoService.fazer(pedido);
	}

	@GetMapping("/pedidos/{id}")
	public ResponseEntity<Pedido> obterPedido(@PathVariable Integer id) {
		return pedidoService.obterPorId(id)
				.map(pedido -> ResponseEntity.ok().body(pedido))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/pedidos")
	public List<Pedido> obterTodosPedidos() {
		return pedidoService.obterTodos();
	}

	@PutMapping("/pedidos/{id}")
	public ResponseEntity<Pedido> atualizarPedido(@PathVariable Integer id, @RequestBody Pedido pedido) {
		return pedidoService.atualizarPedido(id, pedido)
				.map(p -> ResponseEntity.ok().body(p))
				.orElse(ResponseEntity.badRequest().build());
	}
}
