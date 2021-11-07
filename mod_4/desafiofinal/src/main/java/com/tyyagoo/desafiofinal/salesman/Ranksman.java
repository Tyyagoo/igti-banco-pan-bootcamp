package com.tyyagoo.desafiofinal.salesman;

public class Ranksman implements Comparable<Ranksman> {
    private Long id;
    private String name;
    private Long numberOfSales;

    public Ranksman(Salesman salesman, Long numberOfSales) {
        this.id = salesman.getId();
        this.name = salesman.getName();
        this.numberOfSales = numberOfSales;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getNumberOfSales() {
        return numberOfSales;
    }

    @Override
    public int compareTo(Ranksman o) {
        return o.getNumberOfSales().compareTo(this.numberOfSales);
    }
}
