show databases;
create database joongna_test;
use joongna_test;
show tables;

-- create table item_info (
-- name varchar(50),
-- price int,
-- images varchar(100),
-- origin_url varchar(100),
-- site varchar(20),
-- detail varchar(200),
-- etc varchar(50)
-- );

-- alter table item_info change detail id varchar(24);
-- alter table item_info add category varchar(15);
-- alter table item_info modify site varchar(20) default '' not null;
-- alter table item_info modify name varchar(50) default '' not null primary key;
-- select * from item_info;
-- desc item_info;
-- alter table item_info modify images varchar(200);

-- 11번가: siteName, productName, price, seller, images, rating, commentNum, productLink
-- 중고나라: site, name, price, images, detail, origin_url, etc


-- alter table joongnatest modify images varchar(200);
-- alter table joongnatest drop primary key;
-- alter table joongnatest add id int not null auto_increment primary key;
-- alter table joongnatest convert to charset utf8;
-- desc joongnatest;