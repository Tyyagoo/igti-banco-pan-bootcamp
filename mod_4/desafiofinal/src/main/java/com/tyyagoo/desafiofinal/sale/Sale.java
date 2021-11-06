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
}