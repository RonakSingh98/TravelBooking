Overview
This project is a full-stack web application for listing properties. It allows users to browse properties, filter them based on various criteria, and manage their cart for booking. The application is designed with a user-friendly interface and includes both frontend and backend components.

Approach

Frontend:

-Built with React for a dynamic and responsive user interface.
-Utilizes React Router for client-side routing.
-Integrates with a backend API for authentication, property data, and cart management.
-Implements context API for user state management and cart functionality.

Backend:

-Developed with Node.js and Express for a robust server-side application.
-Connected to MongoDB for data storage and management.
-Uses JWT for secure user authentication and session management.
-Endpoints are created for user authentication, property data retrieval, and cart management.

Styling:

-CSS is used for styling components and ensuring a consistent look and feel across the application.
-Responsive design is implemented to cater to different screen sizes and devices.

Tech Stack

Frontend:

-React: For building the user interface and managing state.
-React Router: For handling navigation and routing within the application.
-Fetch API: For making HTTP requests to the backend.


Backend:

-Node.js: For the server-side runtime environment.
-Express: For creating the server and defining API routes.
-MongoDB: For database management, storing user and property data.
-Mongoose: For modeling and querying the MongoDB database.
-bcryptjs: For hashing and comparing passwords.
-jsonwebtoken: For generating and verifying JWT tokens for user authentication.


Deployment:

-Vercel: For deploying the frontend application.

Features

User Authentication:

-Signup and login functionality using JWT for secure sessions.
-Protected routes and state management for user sessions.


Property Listings:

-Display properties with details such as price, location, and amenities.
-Filter properties based on location, price range, number of bedrooms, and amenities.


Cart Management:

-Add properties to the cart for booking.
-View and manage items in the cart.
-Proceed to checkout with a form to confirm bookings.

Project Hosted Vercel Link - https://totality-frontend-challenge-so23.vercel.app/

Backend Hosted Link - https://totality-frontend-challenge-seven.vercel.app/
