
# Team Pushpak - Full-Stack Project Structure (MERN Stack)

This document outlines a modern, scalable folder structure for the "Team Pushpak" project, using the MERN stack (MongoDB, Express, Node.js, React).

## High-Level Overview

The project is organized into a monorepo-style structure with a `client` folder for the React frontend and a `server` folder for the Node.js/Express backend.

```
/team-pushpak-project
|
|-- client/         # React Frontend Application (all the generated .tsx code goes here)
|   |-- public/
|   |   |-- index.html
|   |
|   |-- src/
|   |   |-- components/
|   |   |-- services/
|   |   |-- App.tsx
|   |   |-- index.tsx
|   |   |-- types.ts
|   |   |-- constants.tsx
|   |
|   |-- package.json
|   |-- tsconfig.json
|
|-- server/         # Node.js + Express Backend
|   |-- config/
|   |   |-- db.js       # MongoDB connection logic
|   |
|   |-- controllers/
|   |   |-- authController.js  # Logic for user authentication
|   |   |-- noticeController.js# Logic for notice board data
|   |   |-- projectController.js# Logic for project data
|   |
|   |-- models/
|   |   |-- User.js     # Mongoose schema for Users
|   |   |-- Notice.js   # Mongoose schema for Notices
|   |   |-- Project.js  # Mongoose schema for Projects
|   |
|   |-- routes/
|   |   |-- api/
|   |   |   |-- auth.js     # API routes for /api/auth
|   |   |   |-- notices.js  # API routes for /api/notices
|   |   |   |-- projects.js # API routes for /api/projects
|   |
|   |-- middleware/
|   |   |-- authMiddleware.js # Authentication and authorization
|   |   |-- errorHandler.js # Global error handler
|   |
|   |-- server.js       # Main Express server entry point
|   |-- package.json
|
|-- .gitignore      # Git ignore file for both client and server
|-- package.json    # Root package.json to run both client & server concurrently
```

---

## `client` (Frontend - React)

This directory contains the complete React single-page application. The generated code you received fits entirely within this `client/src` directory.

-   **`client/public/`**: Contains static assets like `index.html`, favicons, and images.
-   **`client/src/`**: The heart of the React application.
    -   **`components/`**: Contains reusable UI components (e.g., `Header.tsx`, `DroneCard.tsx`). This promotes modularity and code reuse.
    -   **`services/`**: For logic that interacts with external APIs, including your own backend (e.g., `api.ts` to fetch data from the `/server`).
    -   **`App.tsx`**: The main application component that assembles all other components and pages.
    -   **`index.tsx`**: The entry point of the React application, where it mounts to the DOM.
    -   **`types.ts`**: Global TypeScript interfaces and types (e.g., `Drone`, `TeamMember`).
    -   **`constants.tsx`**: Application-wide constants, such as navigation links, static data, or SVG icons.
-   **`client/package.json`**: Manages frontend dependencies (React, Tailwind, etc.) and scripts.

## `server` (Backend - Node.js, Express)

This directory houses the backend logic, API endpoints, and database interactions.

-   **`server/config/`**: For configuration files.
    -   `db.js`: Sets up the connection to your MongoDB database using Mongoose.
-   **`server/controllers/`**: Contains the business logic. Each function takes a request, interacts with the database (via models), and sends a response.
-   **`server/models/`**: Defines the data structure using Mongoose schemas. Each file corresponds to a collection in your MongoDB database.
    -   `User.js`: Schema for users (name, email, role, etc.).
    -   `Notice.js`: Schema for notice board entries.
    -   `Project.js`: Schema for drone projects.
-   **`server/routes/`**: Defines the API endpoints. These files map HTTP methods (GET, POST, PUT, DELETE) and URL paths to the corresponding controller functions.
    -   `api/auth.js`: Handles user registration (`/register`) and login (`/login`).
    -   `api/notices.js`: Provides CRUD endpoints for the Notice Board.
        -   `GET /api/notices`: Fetch all notices.
        -   `POST /api/notices`: Create a notice (Admin only).
        -   `PUT /api/notices/:id`: Update a notice (Admin only).
        -   `DELETE /api/notices/:id`: Delete a notice (Admin only).
    -   `api/projects.js`: Provides CRUD endpoints for Projects.
        -   `GET /api/projects`: Fetch all projects.
        -   `POST /api/projects`: Create a project (Admin/Head only).
        -   `PUT /api/projects/:id`: Update a project (Admin/Head only).
        -   `DELETE /api/projects/:id`: Delete a project (Admin only).
-   **`server/middleware/`**: For functions that run between the request and the controller. Useful for authentication, logging, or error handling.
-   **`server/server.js`**: The entry point for the backend server. It initializes Express, connects to the database, applies middleware, registers the routes, and starts listening for requests on a specific port.
-   **`server/package.json`**: Manages backend dependencies (Express, Mongoose, cors, dotenv, etc.) and scripts (e.g., `start`, `dev`).

## Root Directory

-   **`.gitignore`**: Specifies files and folders that Git should ignore, such as `node_modules`, `.env` files, and build artifacts.
-   **`package.json`**: A root-level `package.json` can be used to manage both the client and server with a single command, using a library like `concurrently`. For example, a `dev` script could start both the React dev server and the Node.js server at the same time.