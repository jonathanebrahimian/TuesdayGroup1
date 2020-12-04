CREATE DATABASE IF NOT EXISTS forces;
USE forces;

-- create table in DB
CREATE TABLE IF NOT EXISTS `forces`.`soldiers` (
    SoldierID INT NOT NULL AUTO_INCREMENT, 
    Username VARCHAR(45),
    Password VARCHAR(45),
    Name VARCHAR(45), 
    Gender VARCHAR(45),
    Age int,
    Branch VARCHAR(45),
    Rank VARCHAR(45),
    Base VARCHAR(45),
    Location VARCHAR(45),
    PRIMARY KEY (SoldierID), 
    UNIQUE INDEX `id_UNIQUE` (SoldierID ASC) VISIBLE
);

INSERT INTO `soldiers`
(SoldierID, username, Password, Name, Gender, Age, Branch, Rank, Base, Location)
VALUES
(1,'alex123','password','Alex Trevino','Male',24,'Navy', 'Private', 'Training Support Center Hampton Roads','Virginia'),
(2,'martha123','password','Martha Simon','Female',40,'Coast Guard','Private','Coast Guard Station Alpena AUXOP','Michigan'),
(3,'susan123','password','Susan Medina','Female',26,'Army','Private','Camp W. G. Williams (ARNG)','Utah'),
(4,'savannah123','password','Savannah Solomon','Female',28,'Army','Private','Fort Benning','Georgia'),
(5,'Cody123','password','Cody Adkins','Male',43,'Marines','Private','MCAS Cherry Point','North Carolina'),
(6,'timmy123','password','Timothy Carpenter','Male',22,'Coast Guard','Private','Coast Guard Station Fort Myers Beach','Florida'),
(7,'jim123','password','Jimmy Ferguson','Male',40,'Air Force','Private','Langley Air Force Base','Virginia'),
(8,'alex1235','password','Alex Anderson','Male',27,'Air Force','Private','Selfridge Air National Guard Base','Michigan'),
(9,'isabella123','password','Isabella Le','Female',35,'Army','Private','Warrenton Training Center','Virginia'),
(10'karen123','password','Karen York','Female',41,'Navy','Private','NASJRB New Orleans','Indiana');

-- create user called `manager` with password `Password`
CREATE USER 'root'@'%' IDENTIFIED BY 'Password';

-- give access to manager on db
GRANT ALL PRIVILEGES ON Forces.* TO 'root'@'%';

-- set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'root'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password';

-- flush them privileges
FLUSH PRIVILEGES;
