package com.tyyagoo.desafiofinal.salesman;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;
import com.tyyagoo.desafiofinal.sale.Sale;


@Table(name = "tb_salesman")
@Entity
public class Salesman {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(orphanRemoval = true)
    @JoinColumn(name = "salesman_id")
    private Set<Sale> sales;

    public Salesman() {}

    public Salesman(Long id, String name, Set<Sale> sales) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Sale> getSales() {
        return sales;
    }

    public void setSales(Set<Sale> sales) {
        this.sales = sales;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Salesman salesman = (Salesman) o;
        return Objects.equals(id, salesman.id) && Objects.equals(name, salesman.name) && Objects.equals(sales, salesman.sales);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, sales);
    }

    @Override
    public String toString() {
        return "Salesman{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sales=" + sales +
                '}';
    }
}