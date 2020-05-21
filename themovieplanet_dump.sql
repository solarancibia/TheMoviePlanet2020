-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 21, 2020 at 11:33 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `themovieplanet`
--

-- --------------------------------------------------------

CREATE DATABASE IF NOT EXISTS `themovieplanet`;

USE `themovieplanet`;

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED NOT NULL,
  `movie_id` int(20) UNSIGNED NOT NULL,
  `user_id` int(30) UNSIGNED NOT NULL,
  `review_text` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `rating` decimal(3,1) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `bdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `pass`, `bdate`) VALUES
(1, 'Ema Juarez', 'ejuarez@udesa.edu.ar', '$2a$10$LbKFwbllfpDFVRT.Bl9fbec3L1mo2eoqqnbCywC0vw7JAv4Dai23O', NULL),
(2, 'Sol', 'sol@email.com', '$2a$10$XY55UkbABQ1BqfY7nluA6.7ijRwb.fQTXH7CfEt9R8AoFEjXbn7vS', NULL),
(3, 'Javi', 'javi@dh.com', '$2a$10$cs2PEiFN.LbsMyGFiVepAOvB/MYVpSXDBIPWMDudHftOOErurs4DO', NULL),
(4, 'Jebus', 'jenus@gmail.com', '$2a$10$p7xpXXRFxfrcyvJpdxvhxekExx6fTlKHjBIeZA6CQWYSRr1bCsJ/G', '2020-05-22 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_FK` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);