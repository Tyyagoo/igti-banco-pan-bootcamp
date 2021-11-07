package com.tyyagoo.desafiofinal.sale;

public class SaleNotFoundException extends RuntimeException {
    public SaleNotFoundException() {
        super("Sale cannot be found.");
    }
}
