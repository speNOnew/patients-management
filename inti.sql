-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-01-2019 a las 15:45:39
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inti`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `allergies`
--

CREATE TABLE `allergies` (
  `id` int(10) UNSIGNED NOT NULL,
  `allergies` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `allergies`
--

INSERT INTO `allergies` (`id`, `allergies`, `created_at`, `updated_at`) VALUES
(1, 'n/a', NULL, NULL),
(2, 'Dermatitis', NULL, NULL),
(3, 'Psoriais', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cites`
--

CREATE TABLE `cites` (
  `id` int(10) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `id_patient_id` int(10) UNSIGNED NOT NULL,
  `id_medico_id` int(10) UNSIGNED NOT NULL,
  `id_especialidad_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cites`
--

INSERT INTO `cites` (`id`, `date`, `id_patient_id`, `id_medico_id`, `id_especialidad_id`, `created_at`, `updated_at`) VALUES
(2, '2019-01-18', 2, 1, 1, '2018-11-29 05:21:02', '2018-11-29 18:28:59'),
(3, '2019-01-18', 2, 1, 1, '2018-11-29 05:42:21', '2018-11-29 18:37:40'),
(5, '2019-01-18', 1, 8, 1, NULL, NULL),
(13, '2019-01-18', 2, 1, 1, '2018-11-29 18:47:13', '2018-11-30 01:27:18'),
(14, '2019-01-18', 4, 10, 4, '2018-11-29 18:55:15', '2018-11-29 18:55:15'),
(15, '2019-02-18', 9, 8, 1, '2019-01-14 23:07:32', '2019-01-14 23:07:32'),
(16, '2019-01-18', 2, 1, 1, '2019-01-14 23:08:28', '2019-01-14 23:08:28'),
(17, '2019-01-18', 9, 10, 3, '2019-01-14 23:09:18', '2019-01-14 23:09:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consults`
--

CREATE TABLE `consults` (
  `id` int(10) UNSIGNED NOT NULL,
  `motive` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sintoma` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diagnostico` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tratamiento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_patient_id` int(10) UNSIGNED NOT NULL,
  `id_cite_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `consults`
--

INSERT INTO `consults` (`id`, `motive`, `sintoma`, `diagnostico`, `tratamiento`, `id_patient_id`, `id_cite_id`, `created_at`, `updated_at`) VALUES
(1, '4 semanas de fiebre', 'Fiebre', 'Infeccion respiratoria', 'Atamel por 4 semanas', 1, 2, '2018-11-29 19:54:30', '2018-11-29 19:54:30'),
(2, 'Dolor de cabeza por 3 semanas', 'Congestion nazal', 'Sinusitis', 'Teragrip por 1 semana', 1, 5, '2018-11-29 19:57:08', '2018-11-29 19:57:08'),
(3, 'Sangrado nazal por dos dias sin parar', 'Dolor en fosas nasales', 'Rotura de vaso sanguíneo en fosa nasal', 'Reposo por 1 semana', 1, 2, '2018-11-29 20:31:15', '2018-11-29 20:31:15'),
(4, 'wwwwwwwwwwwwwwww', 'ggggg', 'fffffffff', 'ffffffffffff', 1, 5, '2018-11-30 01:35:59', '2018-11-30 01:35:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `disease`
--

CREATE TABLE `disease` (
  `id` int(10) UNSIGNED NOT NULL,
  `disease` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `disease`
--

INSERT INTO `disease` (`id`, `disease`, `created_at`, `updated_at`) VALUES
(1, 'n/a', NULL, NULL),
(2, 'Sinusitis', NULL, NULL),
(3, 'Gastritis', NULL, NULL),
(4, 'Asma', NULL, NULL),
(5, 'Obesidad', NULL, NULL),
(6, 'Alzheimer', NULL, NULL),
(7, 'Cáncer', NULL, NULL),
(8, 'Hepatitis', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diseases`
--

CREATE TABLE `diseases` (
  `id` int(10) UNSIGNED NOT NULL,
  `diseases` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `diseases`
--

INSERT INTO `diseases` (`id`, `diseases`, `created_at`, `updated_at`) VALUES
(1, 'n/a', NULL, NULL),
(2, 'Sinusitis', NULL, NULL),
(3, 'Gastritis', NULL, NULL),
(4, 'Asma', NULL, NULL),
(5, 'Obesidad', NULL, NULL),
(6, 'Alzheimer', NULL, NULL),
(7, 'Cáncer', NULL, NULL),
(8, 'Hepatitis', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `id` int(10) UNSIGNED NOT NULL,
  `especialidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id`, `especialidad`, `created_at`, `updated_at`) VALUES
(1, 'Ginecologia', NULL, NULL),
(2, 'Medicina general', NULL, NULL),
(3, 'Otorrinolaringología', NULL, NULL),
(4, 'Odontología', NULL, NULL),
(5, 'Oftalmología', NULL, NULL),
(6, 'Traumatología', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `id` int(10) UNSIGNED NOT NULL,
  `ci` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_especialidad_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`id`, `ci`, `name`, `last_name`, `id_especialidad_id`, `created_at`, `updated_at`) VALUES
(1, 13221383, 'Eva', 'Ramos', 1, NULL, NULL),
(8, 124561717, 'Evelin', 'Pabon', 2, NULL, NULL),
(9, 14123456, 'Rafel', 'Obregon', 3, NULL, NULL),
(10, 20206001, 'Carlos', 'Garcia', 4, NULL, NULL),
(11, 16785543, 'Roxenis', 'Sanoja', 5, NULL, NULL),
(12, 21912334, 'David', 'Quiroz', 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_10_29_150721_create_movies_table', 1),
(2, '2018_11_22_143604_table_cites_table', 2),
(3, '2018_11_25_023110_create_patients_table', 3),
(4, '2018_11_25_031251_create_patients_table', 4),
(5, '2018_11_25_231636_create_consults_table', 5),
(6, '2018_11_28_033649_create_rols_table', 6),
(7, '2018_11_28_100001_create_users_table', 7),
(8, '2018_11_28_152046_create_sexo_table', 8),
(9, '2018_11_28_152243_create_state_table', 9),
(10, '2018_11_28_152449_create_allergies_table', 10),
(11, '2018_11_28_152551_create_diseases_table', 11),
(12, '2018_11_28_152626_create_surgerys_table', 11),
(13, '2018_11_28_152720_create_parient_table', 11),
(14, '2018_11_28_152741_create_disease_table', 11),
(15, '2018_11_25_131251_create_patients_table', 12),
(16, '2018_11_28_210543_create_especialidades_table', 13),
(17, '2018_11_28_211734_create_medico_table', 13),
(18, '2018_11_28_21243609_table_cites_table', 14),
(19, '2019_11_25_231636_create_consults_table', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parient`
--

CREATE TABLE `parient` (
  `id` int(10) UNSIGNED NOT NULL,
  `parient` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `parient`
--

INSERT INTO `parient` (`id`, `parient`, `created_at`, `updated_at`) VALUES
(1, 'n/a', NULL, NULL),
(2, 'Padre', NULL, NULL),
(3, 'Madre', NULL, NULL),
(4, 'Abuelo', NULL, NULL),
(5, 'Abuela', NULL, NULL),
(6, 'Hermano', NULL, NULL),
(7, 'Hermana', NULL, NULL),
(8, 'Hijo', NULL, NULL),
(9, 'Hija', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patients`
--

CREATE TABLE `patients` (
  `id` int(10) UNSIGNED NOT NULL,
  `ci` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name2` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name2` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_birth` date NOT NULL,
  `direction` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `allergies` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diseases` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surgerys` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parient` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disease` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `patients`
--

INSERT INTO `patients` (`id`, `ci`, `name`, `name2`, `last_name`, `last_name2`, `sexo`, `state`, `date_birth`, `direction`, `phone`, `email`, `allergies`, `diseases`, `surgerys`, `parient`, `disease`, `created_at`, `updated_at`) VALUES
(1, 24334994, 'Daniel', 'Joan', 'Perez', 'Palacios', '1', '1', '1994-12-12', 'ADjuntas', '04141112233', 'daniel@daniel.com', '2', '1', '1', '1', '1', NULL, '2018-11-29 16:24:00'),
(2, 25032773, 'Yibran', 'Yohander', 'Pereira', 'Zapata', '1', '1', '1994-03-22', 'catia', '04242654498', 'ypereira@sti.com.ve', '1', '1', '1', '1', '1', '2018-11-28 20:49:56', '2018-11-28 20:52:38'),
(3, 2342343, 'Hernan', 'David', 'Prieto', 'Rojas', '1', '1', '1990-02-22', 'La lagunita', '04141889977', 'hernan1234@gmail.com', '1', '1', '1', '1', '1', '2018-11-28 20:50:56', '2018-11-29 16:31:01'),
(4, 13221383, 'Minelva', 'delvalle', 'Zapata', 'Malave', '2', '1', '1974-01-10', 'Catia', '04141875477', 'minelvaz@hotmail.com', '1', '1', '1', '1', '1', '2018-11-28 23:39:35', '2018-11-28 23:39:35'),
(5, 12345678, 'Manuel', 'Adrian', 'Gutierrez', 'Sosa', '2', '1', '1990-01-01', 'Carupano', '04243345678', 'kevin1@gmail.com', '1', '1', '1', '1', '1', '2018-11-29 01:03:17', '2018-11-29 07:17:25'),
(6, 13221384, 'Erick', 'Manuel', 'Rivas', 'Tovar', '1', '1', '1990-02-06', 'dasdasd', '2342343', 'sadasd@hotmail.com', '1', '1', '1', '1', '1', '2018-11-29 05:27:45', '2018-11-29 05:27:45'),
(8, 20174339, 'edmanuel', 'jose', 'tovar', 'ocampo', '1', '1', '1992-05-14', '23 de enero', '04144052352', 'edmanuel@gmail.com', '2', '2', '5', '2', '2', '2018-11-30 01:24:29', '2018-11-30 01:25:03'),
(9, 25220595, 'Carlos', 'Leandro', 'Garcia', 'Ustate', '1', '1', '1995-04-13', 'Monterrey', '04142768714', 'cgarcia@sti.com.ve', '1', '1', '1', '1', '1', '2018-12-07 00:10:14', '2018-12-07 00:10:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id` int(10) UNSIGNED NOT NULL,
  `rol` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `rol`, `created_at`, `updated_at`) VALUES
(1, 'administrador', NULL, NULL),
(2, 'secretaria', NULL, NULL),
(3, 'doctor', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sexo`
--

CREATE TABLE `sexo` (
  `id` int(10) UNSIGNED NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sexo`
--

INSERT INTO `sexo` (`id`, `sexo`, `created_at`, `updated_at`) VALUES
(1, 'Masculino', NULL, NULL),
(2, 'Femenino', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `state`
--

CREATE TABLE `state` (
  `id` int(10) UNSIGNED NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `state`
--

INSERT INTO `state` (`id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Soltero', NULL, NULL),
(2, 'Casado', NULL, NULL),
(3, 'Divorciado', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `surgerys`
--

CREATE TABLE `surgerys` (
  `id` int(10) UNSIGNED NOT NULL,
  `surgerys` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `surgerys`
--

INSERT INTO `surgerys` (`id`, `surgerys`, `created_at`, `updated_at`) VALUES
(1, 'n/a', NULL, NULL),
(2, 'Higado', NULL, NULL),
(3, 'Apendicectomía', NULL, NULL),
(4, 'Cesárea', NULL, NULL),
(5, 'Colecistectomía', NULL, NULL),
(6, 'Corazón', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_rol_id` int(10) UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `id_rol_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(14, 'Demo', 'demo', '$2y$10$oVPCElZVjVFHfi34CxguKekMo2cfzJy38q2dsLpLhSqVoY7dn6xj.', 1, NULL, '2018-12-03 06:26:44', '2018-12-03 06:26:44'),
(15, 'AppAdmin', 'AppAdmin', '$2y$10$LTIJgzbyEmNADsXYvmxShudcS6hSaEwjd40C/neX9dArjEaQVmjoG', 1, NULL, '2018-12-03 06:26:45', '2018-12-03 06:26:45'),
(16, 'Yibran', 'ypereira@sti.com.ve', '$2y$10$RwACx2UNMUjRwlHpVKy1NeuwTR7K7DeXpjqWiwG1at1tdz.shxPXa', 1, NULL, '2018-12-03 06:26:45', '2018-12-03 06:26:45');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `allergies`
--
ALTER TABLE `allergies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cites`
--
ALTER TABLE `cites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cites_id_patient_id_foreign` (`id_patient_id`),
  ADD KEY `cites_id_medico_id_foreign` (`id_medico_id`),
  ADD KEY `cites_id_especialidad_id_foreign` (`id_especialidad_id`);

--
-- Indices de la tabla `consults`
--
ALTER TABLE `consults`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consults_id_patient_id_foreign` (`id_patient_id`),
  ADD KEY `consults_id_cite_id_foreign` (`id_cite_id`);

--
-- Indices de la tabla `disease`
--
ALTER TABLE `disease`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `diseases`
--
ALTER TABLE `diseases`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medico_id_especialidad_id_foreign` (`id_especialidad_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `parient`
--
ALTER TABLE `parient`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `patients_ci_unique` (`ci`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sexo`
--
ALTER TABLE `sexo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `surgerys`
--
ALTER TABLE `surgerys`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_name_unique` (`name`),
  ADD KEY `users_id_rol_id_foreign` (`id_rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `allergies`
--
ALTER TABLE `allergies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cites`
--
ALTER TABLE `cites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `consults`
--
ALTER TABLE `consults`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `disease`
--
ALTER TABLE `disease`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `diseases`
--
ALTER TABLE `diseases`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `medico`
--
ALTER TABLE `medico`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `parient`
--
ALTER TABLE `parient`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sexo`
--
ALTER TABLE `sexo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `state`
--
ALTER TABLE `state`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `surgerys`
--
ALTER TABLE `surgerys`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cites`
--
ALTER TABLE `cites`
  ADD CONSTRAINT `cites_id_especialidad_id_foreign` FOREIGN KEY (`id_especialidad_id`) REFERENCES `especialidades` (`id`),
  ADD CONSTRAINT `cites_id_medico_id_foreign` FOREIGN KEY (`id_medico_id`) REFERENCES `medico` (`id`),
  ADD CONSTRAINT `cites_id_patient_id_foreign` FOREIGN KEY (`id_patient_id`) REFERENCES `patients` (`id`);

--
-- Filtros para la tabla `consults`
--
ALTER TABLE `consults`
  ADD CONSTRAINT `consults_id_cite_id_foreign` FOREIGN KEY (`id_cite_id`) REFERENCES `cites` (`id`),
  ADD CONSTRAINT `consults_id_patient_id_foreign` FOREIGN KEY (`id_patient_id`) REFERENCES `patients` (`id`);

--
-- Filtros para la tabla `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `medico_id_especialidad_id_foreign` FOREIGN KEY (`id_especialidad_id`) REFERENCES `especialidades` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_id_rol_id_foreign` FOREIGN KEY (`id_rol_id`) REFERENCES `rols` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
