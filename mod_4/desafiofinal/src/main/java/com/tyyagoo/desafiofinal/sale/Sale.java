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

    @Column(name = "value")
    private Double value;

    @Column(name = "date")
    private Date date;

    @ManyToOne(optional = false)
    @JoinColumn(name = "seller_id", nullable = false)
    private Salesman seller;

    public Sale(Double value, Salesman seller) {
        this.value = value;
        this.date = new Date();
        this.seller = seller;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Salesman getSeller() {
        return seller;
    }

    public void setSeller(Salesman seller) {
        this.seller = seller;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sale sale = (Sale) o;
        return Objects.equals(id, sale.id) && Objects.equals(value, sale.value) && Objects.equals(date, sale.date) && Objects.equals(seller, sale.seller);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, value, date, seller);
    }

    @Override
    public String toString() {
        return "Sale{" +
                "id=" + id +
                ", value=" + value +
                ", date=" + date +
                ", seller_id=" + seller.getId() +
                '}';
    }
}