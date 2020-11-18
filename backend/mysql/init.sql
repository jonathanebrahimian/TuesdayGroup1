-- create table in DB
CREATE TABLE `Soldier` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    'username' VARCHAR(45),
    'password' VARCHAR(45),
    `Name` VARCHAR(45), 
    `Gender` VARCHAR(45),
    'Age' int,
    `Branch` VARCHAR(45),
    'Base' VARCHAR(45),
    `Location` VARCHAR(45),
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

INSERT INTO Soldier(id,Name,Gender,Age,Branch,Base,Location) VALUES
(1,'alex123','password','Alex Trevino','Male',24,'Navy','Training Support Center Hampton Roads','Virginia')
(2,'martha123','password','Martha Simon','Female',40,'Coast Guard','Coast Guard Station Alpena AUXOP','Michigan')
(3,'susan123','password','Susan Medina','Female',26,'Army','Camp W. G. Williams (ARNG)','Utah')
(4,'savannah123','password','Savannah Solomon','Female',28,'Army','Fort Benning','Georgia')
(5,'Cody123','password','Cody Adkins','Male',43,'Marines','MCAS Cherry Point','North Carolina')
(6,'timmy123','password','Timothy Carpenter','Male',22,'Coast Guard','Coast Guard Station Fort Myers Beach','Florida')
(7,'jim123','password','Jimmy Ferguson','Male',40,'Air Force','Langley Air Force Base','Virginia')
(8,'alex1235','password','Alex Anderson','Male',27,'Air Force','Selfridge Air National Guard Base','Michigan')
(9,'isabella123','password','Isabella Le','Female',35,'Army','Warrenton Training Center','Virginia')
(10'karen123','password','Karen York','Female',41,'Navy','NASJRB New Orleans','Indiana')


-- create user called `manager` with password `Password`
CREATE USER 'officer'@'%' IDENTIFIED BY 'Password';

-- give access to manager on db
GRANT ALL PRIVILEGES ON db.* TO 'manager'@'%';

-- set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'manager'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password';

-- flush them privileges
FLUSH PRIVILEGES;
