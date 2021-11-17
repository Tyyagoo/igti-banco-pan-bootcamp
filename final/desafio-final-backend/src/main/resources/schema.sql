
-- Este script é executado automaticamente pelo Spring Boot para criar a estrutura do banco de dados. 

create sequence seq_order start 100 increment 1;

create table tb_product (
    id_product int not null,
    category varchar(1000) not null,
    description varchar(1000) not null,
    price decimal(8, 2) not null,
    constraint pk_product primary key (id_product)
);

create table tb_order (
    id_order int not null,
    datetime datetime not null,
    state varchar(100) not null,
    constraint pk_order primary key (id_order)
);

create table tb_order_item (
    id_order int not null,
    id_product int not null,
    amount int not null,
    constraint pk_order_item primary key (id_order, id_product)
);

alter table tb_order_item add constraint fk1_order_item foreign key (id_order) references tb_order(id_order) on delete cascade;
alter table tb_order_item add constraint fk2_order_item foreign key (id_product) references tb_product(id_product) on delete restrict;