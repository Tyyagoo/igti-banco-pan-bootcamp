package com.tyyagoo.desafiofinal.sale;

import com.tyyagoo.desafiofinal.salesman.Salesman;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Table(name = "tb_sale")
@Entity
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE, CascadeType.REFRESH, CascadeType.DETACH, CascadeType.REMOVE})
    @JoinColumn(name = "seller_id")
    private Salesman seller;

    @Column(name = "value")
    private Double value;

    @Column(name = "date")
    private Date date;

    public Sale() {}

    public Sale(Long id, Salesman seller, Double value, Date date) {
        this.id = id;
        this.seller = seller;
        this.value = value;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Salesman getSeller() {
        return seller;
    }

    public void setSeller(Salesman seller) {
        this.seller = seller;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sale sale = (Sale) o;
        return Objects.equals(id, sale.id) && Objects.equals(seller, sale.seller) && Objects.equals(value, sale.value) && Objects.equals(date, sale.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, seller, value, date);
    }

    @Override
    public String toString() {
        return "Sale{" +
                "id=" + id +
                ", seller_id=" + seller.getId() +
                ", value=" + value +
                ", date=" + date +
                '}';
    }
}