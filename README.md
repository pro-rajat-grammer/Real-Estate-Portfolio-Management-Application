# Real Estate Portfolio Management Application

## Description
The Real Estate Portfolio Management Application is a web application built using MongoDB, Node.js, Express.js, and React. It serves as a management platform for handling all properties of a real estate portfolio management company.

## Features
- **Property Management**: View, add and delete properties.
- **Portfolio Organization**: Organize properties into portfolios for better management.
- **User Authentication**: Secure login and role-based access control for administrators and staff.

## Technologies Used
- **MongoDB**: NoSQL database for storing property data, tenant information, and financial records.
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
1. Clone the repository: `git clone https://github.com/pro-rajat-grammer/Real-Estate-Portfolio-Management-Application.git`
2. Navigate to the project directory: `cd real-estate-portfolio-management`
3. Install backend dependencies: `cd backend && npm install`
4. Install frontend dependencies: `cd .. && cd frontend && npm install`
5. Start the backend server: `cd .. && cd backend && npm start`
6. Start the frontend development server: `cd .. && cd frontend && npm start`
7. Open your browser and visit `http://localhost:3000` to access the application.

## Usage
1. Log in to the application using your administrator credentials.
2. Navigate through different sections such as properties.
3. Add, edit, or delete properties and portfolios as needed.
7. Ensure to log out securely after managing the portfolio.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request.



