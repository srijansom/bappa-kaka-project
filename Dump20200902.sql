CREATE DATABASE  IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `project`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	5.7.30-log

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
-- Table structure for table `contractor_lookup`
--

DROP TABLE IF EXISTS `contractor_lookup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contractor_lookup` (
  `contractor_lookup_id` int(11) NOT NULL AUTO_INCREMENT,
  `contractor_name` varchar(100) NOT NULL,
  `is_active` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`contractor_lookup_id`),
  UNIQUE KEY `idcontractor_lookup_UNIQUE` (`contractor_lookup_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contractor_lookup`
--

LOCK TABLES `contractor_lookup` WRITE;
/*!40000 ALTER TABLE `contractor_lookup` DISABLE KEYS */;
INSERT  IGNORE INTO `contractor_lookup` VALUES (1,'Sumanta Som','Y'),(2,'Spandan','Y'),(3,'Anjan','N'),(4,'Anjan','Y');
/*!40000 ALTER TABLE `contractor_lookup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labour_charge_lookup`
--

DROP TABLE IF EXISTS `labour_charge_lookup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labour_charge_lookup` (
  `labour_charge_lookup_id` int(11) NOT NULL AUTO_INCREMENT,
  `labour_charge_name` varchar(45) NOT NULL,
  `labour_charge_amount` int(10) unsigned zerofill NOT NULL,
  `is_active` varchar(45) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`labour_charge_lookup_id`),
  UNIQUE KEY `labour_charge_lookup_id_UNIQUE` (`labour_charge_lookup_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labour_charge_lookup`
--

LOCK TABLES `labour_charge_lookup` WRITE;
/*!40000 ALTER TABLE `labour_charge_lookup` DISABLE KEYS */;
INSERT  IGNORE INTO `labour_charge_lookup` VALUES (1,'sdf',0000000003,'N'),(2,'CLAY BRICK',0000000100,'Y'),(3,'PARON',0000000050,'Y'),(4,'STAG',0000000070,'Y'),(5,'PAKA',0000000120,'Y'),(6,'TEMA',0000000040,'Y'),(7,'sdf',0000001200,'N'),(8,'sdfsdfsef',0000000300,'N'),(9,'rfref',0000002300,'N');
/*!40000 ALTER TABLE `labour_charge_lookup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labour_payment_details`
--

DROP TABLE IF EXISTS `labour_payment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labour_payment_details` (
  `labour_payment_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `reg_id` int(11) DEFAULT NULL,
  `labour_charge_lookup_id` int(11) DEFAULT NULL,
  `work_count` int(11) DEFAULT NULL,
  `created_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`labour_payment_details_id`),
  UNIQUE KEY `labour_payment_details_id_UNIQUE` (`labour_payment_details_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labour_payment_details`
--

LOCK TABLES `labour_payment_details` WRITE;
/*!40000 ALTER TABLE `labour_payment_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `labour_payment_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labour_role_lookup`
--

DROP TABLE IF EXISTS `labour_role_lookup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labour_role_lookup` (
  `labour_role_lookup_id` int(11) NOT NULL AUTO_INCREMENT,
  `labour_role_name` varchar(100) DEFAULT NULL,
  `labour_wage_type_lookup_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`labour_role_lookup_id`),
  UNIQUE KEY `labour_role_lookup_id_UNIQUE` (`labour_role_lookup_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labour_role_lookup`
--

LOCK TABLES `labour_role_lookup` WRITE;
/*!40000 ALTER TABLE `labour_role_lookup` DISABLE KEYS */;
INSERT  IGNORE INTO `labour_role_lookup` VALUES (1,'PATHERA',1),(2,'REJA',1),(3,'BANKIDER',1),(4,'BELDER',2),(5,'COALMAN',2),(6,'CHATAI',2),(7,'FIREMAN',2);
/*!40000 ALTER TABLE `labour_role_lookup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labour_role_mapping`
--

DROP TABLE IF EXISTS `labour_role_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labour_role_mapping` (
  `labour_role_mapping_id` int(11) NOT NULL AUTO_INCREMENT,
  `registration_id` int(11) DEFAULT NULL,
  `labour_role_lookup_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`labour_role_mapping_id`),
  UNIQUE KEY `labour_role_mapping_id_UNIQUE` (`labour_role_mapping_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labour_role_mapping`
--

LOCK TABLES `labour_role_mapping` WRITE;
/*!40000 ALTER TABLE `labour_role_mapping` DISABLE KEYS */;
INSERT  IGNORE INTO `labour_role_mapping` VALUES (1,1,1),(2,2,2),(3,3,7);
/*!40000 ALTER TABLE `labour_role_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labour_transaction_details`
--

DROP TABLE IF EXISTS `labour_transaction_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labour_transaction_details` (
  `labour_transaction_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `labour_transaction_amount` decimal(10,2) NOT NULL,
  `labour_transaction_direction` varchar(45) DEFAULT NULL,
  `labour_transaction_details` varchar(100) DEFAULT NULL,
  `reg_id` int(11) DEFAULT NULL,
  `transaction_date_time` datetime DEFAULT NULL,
  PRIMARY KEY (`labour_transaction_details_id`),
  UNIQUE KEY `labour_transaction_details_id_UNIQUE` (`labour_transaction_details_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labour_transaction_details`
--

LOCK TABLES `labour_transaction_details` WRITE;
/*!40000 ALTER TABLE `labour_transaction_details` DISABLE KEYS */;
INSERT  IGNORE INTO `labour_transaction_details` VALUES (4,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:07:17'),(5,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:08:49'),(6,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:10:42'),(7,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:17:34'),(8,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:21:02'),(9,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:21:57'),(10,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:23:04'),(11,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:24:40'),(12,1.20,'Deposit','Deposit on behalf of daily wage',4,'2020-09-01 15:25:53'),(13,2000.00,'Deposit','monthly wage details',4,'2020-09-01 16:21:59'),(14,1.20,'Deposit','daily wage details',4,'2020-09-01 16:22:15'),(15,2000.00,'Deposit','Monthly wage details for BELDER',4,'2020-09-01 16:30:15'),(16,1.48,'Deposit','daily wage details',4,'2020-09-01 16:40:15'),(17,1200.00,'Deposit','Monthly wage for --Select--',4,'2020-09-01 18:13:38'),(18,1200.00,'Deposit','Monthly wage for --Select--',4,'2020-09-01 18:14:18'),(19,1.20,'Deposit','daily wage details',4,'2020-09-01 18:16:01'),(20,2000.00,'Deposit','Monthly wage for BELDER',4,'2020-09-01 18:21:35'),(21,1.20,'Deposit','daily wage details',4,'2020-09-01 18:22:13'),(22,5000.00,'Withdraw','Money has been withdrawed',4,'2020-09-01 18:23:12'),(23,1200.00,'Withdraw','Money has been withdrawed',4,'2020-09-01 22:42:40'),(24,10000.00,'Deposit','Monthly wage for BELDER',4,'2020-09-01 22:49:25'),(25,1.20,'Deposit','daily wage details',4,'2020-09-01 22:50:02'),(26,0.01,'Deposit','daily wage details',4,'2020-09-01 22:52:36'),(27,10000.00,'Withdraw','Money has been withdrawed',4,'2020-09-01 22:59:55'),(28,10.00,'Withdraw','Money has been withdrawed',4,'2020-09-01 23:59:27'),(29,1000.00,'Withdraw','Money has been withdrawed',4,'2020-09-02 00:07:38'),(30,100.00,'Withdraw','Money has been withdrawed',4,'2020-09-02 00:17:45'),(31,120.00,'Deposit','daily wage details',0,'2020-09-02 13:16:14'),(32,12000.00,'Deposit','Monthly wage for BELDER',0,'2020-09-02 13:16:29'),(33,500.00,'Withdraw','Money has been withdrawed',0,'2020-09-02 13:16:38');
/*!40000 ALTER TABLE `labour_transaction_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labour_wage_type_lookup`
--

DROP TABLE IF EXISTS `labour_wage_type_lookup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labour_wage_type_lookup` (
  `labour_wage_type_lookup_id` int(11) NOT NULL AUTO_INCREMENT,
  `labour_wage_type_name` varchar(100) NOT NULL,
  PRIMARY KEY (`labour_wage_type_lookup_id`),
  UNIQUE KEY `labour_wage_type_id_UNIQUE` (`labour_wage_type_lookup_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labour_wage_type_lookup`
--

LOCK TABLES `labour_wage_type_lookup` WRITE;
/*!40000 ALTER TABLE `labour_wage_type_lookup` DISABLE KEYS */;
INSERT  IGNORE INTO `labour_wage_type_lookup` VALUES (1,'Daily Wage'),(2,'Monthly Wage');
/*!40000 ALTER TABLE `labour_wage_type_lookup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `reg_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `khoraki` decimal(10,2) unsigned zerofill NOT NULL,
  `is_active` varchar(10) NOT NULL,
  `created_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `contractor_lookup_id` int(11) NOT NULL,
  PRIMARY KEY (`reg_id`),
  UNIQUE KEY `reg_id_UNIQUE` (`reg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT  IGNORE INTO `registration` VALUES (1,'Srijan',00000025.00,'Y','2020-06-20 01:27:53',1),(2,'Kumar',00000334.00,'Y','2020-06-20 01:27:53',1),(3,'Akshay',00000025.00,'Y','2020-06-20 01:28:33',2),(4,'Jewel',00001111.89,'Y','2020-06-20 01:28:51',2),(5,'Bishwanath Ruidas',00011620.00,'Y','2020-09-02 13:15:44',4);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-02 13:38:45
