-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2022 at 11:18 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_sequelize`
--

-- --------------------------------------------------------

--
-- Table structure for table `address-book`
--

CREATE TABLE `address-book` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `addressLine1` varchar(255) DEFAULT NULL,
  `addressLine2` varchar(255) DEFAULT NULL,
  `city` enum('Ahmedabad','Ghandhinagar','Rajkot','Vadodara','Morabi') DEFAULT NULL,
  `state` enum('Gujarat','Mumbai','Delhi','Rajasthan') DEFAULT NULL,
  `country` enum('India','China','Pakistan','America') DEFAULT NULL,
  `pinCode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address-book`
--

INSERT INTO `address-book` (`id`, `title`, `addressLine1`, `addressLine2`, `city`, `state`, `country`, `pinCode`) VALUES
(1, 'home', 'akhabarnagar vadaj', 'gota circle', 'Ahmedabad', 'Gujarat', 'India', 380013);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `gender`, `image`) VALUES
(1, 'sagar', 'javiyasagar@gmail.com', '$2b$10$zVo.Wo0NcHF2/wtaMFbci.LUU.N/kny4T2AlQHGV7rkmDyaJMbrH2', 'male', 'image-1641766355873');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address-book`
--
ALTER TABLE `address-book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address-book`
--
ALTER TABLE `address-book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
