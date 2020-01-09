create user 'KJ_test'@'%' identified by 'pass';
-- password = pass

use mysql;
show tables;
select host, user, authentication_string from user;