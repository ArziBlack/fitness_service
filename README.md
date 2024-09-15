# Fitness Web Service API Documentation

### Base URL:  
`https://fitness-service.onrender.com`

---

## Overview
The Fitness Web Service provides a set of APIs to manage workouts and categories, as well as user authentication for a fitness application. The API allows users to register, log in, and interact with workout and category resources such as creating, updating, and deleting them. The service is organized into various routes and endpoints.

### Authentication
- The API uses a **JWT-based authentication** system.
- Authenticated routes require a token to be passed in the **Authorization header**.

### Available Routes
All API routes are prefixed with `/fitness`.

---

## Health Check

### **GET** `/fitness/health-check`
- **Description**: Verifies the service is running properly.
- **Response**:  
  ```json
  {
    "check": "Fitness Application server started ok"
  }
  ```

---

# Authentication API

### **Base Route**: `/fitness/api/auth`

### **POST** `/signup`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "userName": "string",
    "email": "string",
    "password": "string",
    "gender": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "user": { ... }
  }
  ```

### **POST** `/signin`
- **Description**: Logs in a user and returns a JWT.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "jwt_token"
  }
  ```

---

# Category API

### **Base Route**: `/fitness/api/category`

### **GET** `/all` (Protected)
- **Description**: Retrieves all categories.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Categories fetched successfully",
    "categories": [ ... ]
  }
  ```

### **POST** `/add` (Protected)
- **Description**: Creates a new category.
- **Request Body**:
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Category created successfully",
    "category": { ... }
  }
  ```

### **PUT** `/edit/:id` (Protected)
- **Description**: Updates an existing category by its ID.
- **Request Body**:
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Category updated successfully",
    "category": { ... }
  }
  ```

### **DELETE** `/delete/:id` (Protected)
- **Description**: Deletes a category by its ID.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Category deleted successfully",
    "category": { ... }
  }
  ```

---

# Workout API

### **Base Route**: `/fitness/api/workout`

### **GET** `/all` (Protected)
- **Description**: Retrieves all workouts.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Workouts fetched successfully",
    "workouts": [ ... ]
  }
  ```

### **POST** `/add` (Protected)
- **Description**: Creates a new workout.
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "category": "string",
    "duration": "number"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Workout created successfully",
    "workout": { ... }
  }
  ```

### **PUT** `/edit/:id` (Protected)
- **Description**: Updates an existing workout by its ID.
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "category": "string",
    "duration": "number"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Workout updated successfully",
    "workout": { ... }
  }
  ```

### **DELETE** `/delete/:id` (Protected)
- **Description**: Deletes a workout by its ID.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Workout deleted successfully",
    "workout": { ... }
  }
  ```

---

# Combined API

### **Base Route**: `/fitness/v1/unsecured`
This route combines both categories and workouts, making them accessible without authentication.

---

## Status Codes

- `200 OK` – Request successful
- `201 Created` – Resource created successfully
- `400 Bad Request` – Request is invalid or missing parameters
- `401 Unauthorized` – No valid token provided
- `404 Not Found` – Resource not found
- `500 Internal Server Error` – An error occurred on the server

## Authorization
All protected routes require a valid JWT token passed in the `Authorization` header:
```
Authorization: Bearer <token>
```

---

This documentation covers all major endpoints in the Fitness Web Service. Be sure to include the required authentication for protected routes and follow the correct status codes for error handling and responses.