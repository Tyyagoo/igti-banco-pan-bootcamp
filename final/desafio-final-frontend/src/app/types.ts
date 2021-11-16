export interface Produto {
  categoria: string;
  descricao: string;
  preco: number;
}

export interface ItemPedido {
  produto: Produto;
  quantidade: number;
}

export interface Pedido {
  id: string;
  dataHora: Date;
  situacao: string;
  itens: ItemPedido[];
}
