CRUD Tasks Backend
Este proyecto es una aplicación backend para gestionar tareas utilizando Node.js, Express y MySQL. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las tareas almacenadas en una base de datos MySQL.

Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

Node.js
MySQL
Git
1\_ Instalación
Clona este repositorio en tu máquina local: https://github.com/maximilianotraghetti/crud-task-backend

2* Navega al directorio del proyecto:
cd crud-task-backend-Maximiliano
3* Instala las dependencias necesarias:
npm install
4* Crea la base de datos MySQL:
CREATE DATABASE tasks_db;
5* Crea la tabla tasks dentro de la base de datos tasks_db:
CREATE TABLE tasks (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
isComplete BOOLEAN DEFAULT FALSE
);
6_Configura la conexión a la base de datos MySQL:
Crea un archivo .env en la raíz del proyecto con las siguientes variables:
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=tasks_db
Inicia el servidor:
npm run dev
El servidor debería estar corriendo en http://localhost:3000.

Puedes interactuar con la API a través de las siguientes rutas RESTful:

POST /tasks: Añadir una nueva tarea.
GET /tasks: Obtener todas las tareas.
GET /task/
: Obtener una tarea específica por su ID.
PUT /task/
: Actualizar una tarea específica por su ID.
DELETE /task/
: Eliminar una tarea específica por su ID.

Estructura del Proyecto
/routes: Contiene las rutas de la API.
/controllers: Contiene la lógica para manejar las operaciones CRUD.
/models: Contiene la configuración de la base de datos y los modelos.
/config: Contiene la configuración de la conexión a la base de datos.
