# Uber Clone Application

This is a full-stack Uber clone application built with a React frontend and a Node.js/Express backend. The application allows users to register, log in, book rides, and track their rides in real-time. Captains (drivers) can also register, log in, and accept ride requests.

## Demo of Project
https://www.loom.com/share/0c5147b0010540019b676016a6841f82?sid=09686c13-09aa-4f6c-9e13-297d46e2b0e2

## Features

### User Features
- **User Registration and Login**: Users can register and log in to the application.
- **Profile Management**: Users can view their profile information.
- **Ride Booking**: Users can book rides by specifying pickup and destination locations.
- **Fare Estimation**: Users can get fare estimates for different vehicle types.
- **Real-time Ride Tracking**: Users can track their rides in real-time using Google Maps.
- **Ride Confirmation**: Users receive OTP-based ride confirmation.
- **Ride Completion**: Users can complete rides and make payments.

### Captain Features
- **Captain Registration and Login**: Captains can register and log in to the application.
- **Profile Management**: Captains can view their profile information.
- **Ride Acceptance**: Captains can accept ride requests from users.
- **Real-time Location Update**: Captains can update their location in real-time.
- **Ride Start and End**: Captains can start and end rides using OTP-based confirmation.

## Installation

### Backend

1. Navigate to the `Backend` directory:
    ```sh
    cd Backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/22) file in the [Backend](http://_vscodecontentref_/23) directory and add the following environment variables:
    ```env
    DB_CONNECT=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    GOOGLE_MAPS_API=<your_google_maps_api_key>
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend

1. Navigate to the [Frontend](http://_vscodecontentref_/24) directory:
    ```sh
    cd Frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/25) file in the [Frontend](http://_vscodecontentref_/26) directory and add the following environment variables:
    ```env
    VITE_BASE_URL=<your_backend_base_url>
    VITE_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
    ```

4. Start the frontend development server:
    ```sh
    npm run dev
    ```

## Deployment

### Deploying the Backend on Vercel

1. Navigate to the [Backend](http://_vscodecontentref_/27) directory:
    ```sh
    cd Backend
    ```

2. Deploy the backend:
    ```sh
    vercel
    ```

3. Set the environment variables in the Vercel dashboard.

### Deploying the Frontend on Vercel

1. Navigate to the [Frontend](http://_vscodecontentref_/28) directory:
    ```sh
    cd Frontend
    ```

2. Deploy the frontend:
    ```sh
    vercel
    ```

3. Set the environment variables in the Vercel dashboard.

## Usage

1. Open the frontend URL in your browser.
2. Register as a user or captain.
3. Log in and start using the application.

