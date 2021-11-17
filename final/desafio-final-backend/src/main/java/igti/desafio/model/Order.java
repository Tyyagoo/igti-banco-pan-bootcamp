package igti.desafio.model;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OrderBy;
import javax.persistence.SequenceGenerator;

@Entity(name = "tb_order")
@Data
public class Order {

	public enum State {
		WAITING("Aguardando"),
		PREPARING("Em preparação"),
		DELIVERING("Saiu para entrega"),
		DELIVERED("Entregue");

		private String value;

		State(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}

		public void setValue(String value) {
			this.value = value;
		}
	}

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_order")
	@SequenceGenerator(name = "seq_order", sequenceName = "seq_order", allocationSize = 1)
	@Column(name = "id_order")
	private Integer id;

	@Column(name = "datetime")
	private LocalDateTime datetime;

	@Column(name = "state")
	private State state;

	@ElementCollection
	@CollectionTable(name = "tb_order_item", joinColumns = { @JoinColumn(name = "id_order") })
	@OrderBy("product")
	private List<OrderItem> items = new ArrayList<>();

}
