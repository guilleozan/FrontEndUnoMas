
CREATE TABLE `Tiket` (
  `Tiket_id` int NOT NULL AUTO_INCREMENT,
  `Customer_id` int DEFAULT NULL,
  `Price` decimal(10,0) DEFAULT NULL,
  `Moivie_id` int DEFAULT NULL,
  `Theater_id` int DEFAULT NULL,
  PRIMARY KEY (`Tiket_id`),
  KEY `customer_idx` (`Customer_id`),
  KEY `movie_idx` (`Moivie_id`),
  KEY `theater_idx` (`Theater_id`),
  CONSTRAINT `customer` FOREIGN KEY (`Customer_id`) REFERENCES `Customer` (`Customer_id`),
  CONSTRAINT `movies` FOREIGN KEY (`Moivie_id`) REFERENCES `Movies` (`Movie_id`),
  CONSTRAINT `theater` FOREIGN KEY (`Theater_id`) REFERENCES `Theater Information` (`Theater_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci



CREATE TABLE `Customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `Last_name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `phone_number` int(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Customer` VALUES (1,'Vinte','Carter','3 Nevada Parkway','Hamilton',315527305,'vintecarter@gmail,com','vintecarter1234');
INSERT INTO `Customer` VALUES (2,'Carl','Myworks','34267 Glendale Street','Wellington',306591170,'carlM@gmail,com',' mcarl12343');
INSERT INTO `Customer` VALUES (3,'Michel','Yadel','096 Pawling Parkway','Auckland',415146037,'michelYan@gmail.com','Mch543554');
INSERT INTO `Customer` VALUES (4,'Jan','Kwideo','81674 Westerfield Circle','Geraldine',254500784,'jankwi@gmail.com','jan543212345');
INSERT INTO `Customer` VALUES (5,'Fred','Topiclounge','0863 Farmco Road','LAke Tekapo',971889129,'Fredtop@gmail.com','fred5473829'	);


-- Volver a pegar esto en sql en workbens

-- INNER JOIN `CINEMA INFORMATION` on `theater information`.Cinema_id= `Cinema Information`.Cinema_id 
-- where `location` ='Auckland, New Zealand' AND `Sound_System` = 'Premium'
-- INNER JOIN `Movies` on `Movie Schedule`.Movie_id= `Movies`.Movie_id 
-- SearchMovieSecheduleByCityAndTheater

-- INNER JOIN `Theater Information` on `Movie Schedule`.Theater_id= `Theater Information`.Theater_id 
-- INNER JOIN `CINEMA INFORMATION` on `theater information`.Cinema_id= `Cinema Information`.Cinema_id 

-- where `location` ='Auckland, New Zealand'


