package com.tyyagoo.desafiofinal.salesman;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import com.tyyagoo.desafiofinal.sale.Sale;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Table(name = "tb_salesman")
@Entity
public class Salesman {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Sale> sales;

    public Salesman() {
        this.sales = Set.of();
    }

    public Salesman(String name) {
        this();
        this.name = name;
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
        return Objects.equals(id, salesman.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Salesman{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sales=" + sales.stream().map(Sale::getId).map(String::valueOf).collect(Collectors.toList()) +
                '}';
    }
}