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
}