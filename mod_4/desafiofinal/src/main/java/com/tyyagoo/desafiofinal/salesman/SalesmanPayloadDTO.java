package com.tyyagoo.desafiofinal.salesman;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class SalesmanPayloadDTO {
    @NotNull
    @Size(min=2, max=30)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
