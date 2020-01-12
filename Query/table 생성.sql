show databases;
use kj;
-- create table item_info;
-- drop table testdb;
show tables;

create table item_info (
name varchar(50),
price int,
images varchar(100),
origin_url varchar(100),
site varchar(20),
detail varchar(200),
etc varchar(50)
);

alter table item_info change detail id varchar(24);
alter table item_info add category varchar(15);
alter table item_info modify site varchar(20) default '' not null;
alter table item_info modify name varchar(50) default '' not null primary key;
select * from item_info;
desc item_info;
alter table item_info modify images varchar(200);

-- 11번가: siteName, productName, price, seller, images, rating, commentNum, productLink
-- 중고나라: site, name, price, images, detail, origin_url, etc

create table joongnatest (
site varchar(20) not null,
name varchar(50) not null primary key,
price int,
images varchar(100),
detail varchar(200),
origin_url varchar(100),
etc varchar(50)
);
alter table joongnatest modify images varchar(200);

create table ProductList (
	id varchar(24) not null,
    title varchar(50) not null primary key,
    price int not null,
    image varchar(100),
    origin_url varchar(100) not null,
    sitecode varchar(10) not null,
    category varchar(15),
    date date,
    seller varchar(30),
    status varchar(10)
);

alter table ProductList rename productList;
alter table joongnaTest rename joongnatest;

select * from productList;
select * from joongnatest;