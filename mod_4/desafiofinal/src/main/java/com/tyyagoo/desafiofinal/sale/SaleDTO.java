package com.tyyagoo.desafiofinal.sale;

import java.util.Date;

public class SaleDTO {
    private Long id;
    private Double price;
    private Date date;

    public SaleDTO() {}

    public SaleDTO(Sale entity) {
        this.id = entity.getId();
        this.price = entity.getValue();
        this.date = entity.getDate();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
