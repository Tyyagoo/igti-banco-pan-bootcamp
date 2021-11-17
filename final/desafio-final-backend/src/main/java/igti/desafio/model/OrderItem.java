package igti.desafio.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
@Data @NoArgsConstructor @AllArgsConstructor
public class OrderItem {

	@ManyToOne
	@JoinColumn(name = "id_product")
	private Product product;

	@Column(name = "amount")
	private Integer amount;
}
