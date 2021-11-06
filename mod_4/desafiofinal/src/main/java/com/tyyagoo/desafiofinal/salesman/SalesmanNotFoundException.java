package com.tyyagoo.desafiofinal.salesman;

public class SalesmanNotFoundException extends RuntimeException {
    public SalesmanNotFoundException() {
        super("Salesman cannot be found.");
    }
}
