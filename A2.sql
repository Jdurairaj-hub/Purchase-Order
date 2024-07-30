-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: jdurairaj
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Clients227`
--

DROP TABLE IF EXISTS `Clients227`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Clients227` (
  `clientId227` int(11) NOT NULL,
  `clientName` varchar(100) DEFAULT NULL,
  `clientCity` varchar(100) DEFAULT NULL,
  `moneyOwed` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`clientId227`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clients227`
--

LOCK TABLES `Clients227` WRITE;
/*!40000 ALTER TABLE `Clients227` DISABLE KEYS */;
INSERT INTO `Clients227` VALUES (101,'Client X','City Y',0.00),(102,'Client Z','City W',100.00);
/*!40000 ALTER TABLE `Clients227` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lines227`
--

DROP TABLE IF EXISTS `Lines227`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Lines227` (
  `poNo227` int(11) NOT NULL,
  `lineNo227` int(11) NOT NULL,
  `partNo` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `priceOrdered` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`poNo227`,`lineNo227`),
  KEY `partNo` (`partNo`),
  CONSTRAINT `Lines227_ibfk_1` FOREIGN KEY (`poNo227`) REFERENCES `POs227` (`poNo227`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lines227`
--

LOCK TABLES `Lines227` WRITE;
/*!40000 ALTER TABLE `Lines227` DISABLE KEYS */;
INSERT INTO `Lines227` VALUES (10001,11,1001,10,9.50),(10001,12,1002,5,19.00),(10002,11,1001,20,9.50),(10002,12,1002,10,19.00),(10003,13,1001,10,9.50),(10003,14,1002,5,19.00),(10004,15,1001,5,19.00),(10006,16,1001,11,11.00);
/*!40000 ALTER TABLE `Lines227` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `POs227`
--

DROP TABLE IF EXISTS `POs227`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `POs227` (
  `poNo227` int(11) NOT NULL,
  `clientCompID` int(11) DEFAULT NULL,
  `dateOfPO` date DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`poNo227`),
  KEY `clientCompID` (`clientCompID`),
  CONSTRAINT `POs227_ibfk_1` FOREIGN KEY (`clientCompID`) REFERENCES `Clients227` (`clientId227`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `POs227`
--

LOCK TABLES `POs227` WRITE;
/*!40000 ALTER TABLE `POs227` DISABLE KEYS */;
INSERT INTO `POs227` VALUES (10001,101,'2024-06-10','Pending'),(10002,102,'2024-06-11','Completed'),(10003,101,'2024-06-19','Pending'),(10004,101,'2024-06-20','Pending'),(10005,101,'2024-06-19','Pending'),(10006,101,'2024-06-19','Pending');
/*!40000 ALTER TABLE `POs227` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Parts227`
--

DROP TABLE IF EXISTS `Parts227`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Parts227` (
  `partNo227` int(11) NOT NULL,
  `partName` varchar(100) DEFAULT NULL,
  `currentPrice` decimal(10,2) DEFAULT NULL,
  `qoh227` int(11) DEFAULT NULL,
  PRIMARY KEY (`partNo227`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parts227`
--

LOCK TABLES `Parts227` WRITE;
/*!40000 ALTER TABLE `Parts227` DISABLE KEYS */;
INSERT INTO `Parts227` VALUES (1001,'Part A',10.00,74),(1002,'Part B',20.00,45);
/*!40000 ALTER TABLE `Parts227` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-19 23:06:41
