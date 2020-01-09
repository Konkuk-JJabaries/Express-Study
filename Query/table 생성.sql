show databases;
use KJ_test;
-- create table item_info;
-- drop table item_info;

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