package igti.desafio.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "tb_product")
@Data
public class Product {

	@Id
	@Column(name = "id_product")
	private Integer id;

	@Column(name = "category")
	private String category;

	@Column(name = "description")
	private String description;

	@Column(name = "price")
	private Double price;
}
