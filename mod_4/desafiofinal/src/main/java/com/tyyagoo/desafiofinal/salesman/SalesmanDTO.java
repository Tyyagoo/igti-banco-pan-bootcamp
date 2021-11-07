package com.tyyagoo.desafiofinal.salesman;

public class SalesmanDTO {
    private Long id;
    private String name;

    public SalesmanDTO() { };

    public SalesmanDTO(Salesman entity) {
        this.id = entity.getId();
        this.name = entity.getName();
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
}
