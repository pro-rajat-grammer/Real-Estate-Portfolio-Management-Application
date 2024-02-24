# E-commerce Dashboard Application

## Description
The E-commerce Dashboard Application is a web application built using MongoDB, Node.js, Express.js, and React. It serves as a dashboard interface for managing all products of an e-commerce company.

## Features
- **Product Management**: View, add, edit, and delete products.
- **Category Management**: Organize products into categories for easy navigation.
- **User Authentication**: Secure login and authentication system.
- **Responsive Design**: User-friendly interface accessible on desktop and mobile devices.

## Technologies Used
- **MongoDB**: NoSQL database for storing product data, user information.
- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web application framework for Node.js, used for building RESTful APIs.
- **React**: Frontend JavaScript library for building user interfaces.

## Dependencies
- **Backend**:
 {
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.1.1",
    "nodemon": "^3.0.3"
  }
}


- **Frontend**:
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
 


## Setup Instructions
1. Clone the repository: `git clone github.com/pro-rajat-grammer/E-commerce-dashboard`
2. Navigate to the project directory: `cd e-commerce-dashboard`
3. Install backend dependencies: `cd backend && npm install`
4. Install frontend dependencies: `cd .. && cd frontend && npm install`
5. Start the backend server: `cd .. && cd backend && npm start`
6. Start the frontend development server: `cd .. && cd frontend && npm start`
7. Open your browser and visit `http://localhost:3000` to access the dashboard.

## Usage
1. Log in to the dashboard using your administrator credentials.
2. Navigate through different sections such as products.
3. Add, edit, or delete products and categories as needed.
6. Ensure to log out securely after managing the dashboard.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request.


