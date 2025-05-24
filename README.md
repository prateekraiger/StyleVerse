# StyleVerse

StyleVerse is a modern e-commerce platform for fashion enthusiasts. It allows users to browse products, add them to the cart, and place orders seamlessly. The platform is built using React, Vite, and Node.js.

## Features

- **Product Listing**: Browse a wide range of fashion products dynamically.
- **Cart Management**: Add products to the cart with size and quantity options.
- **Order Tracking**: View and track your orders dynamically.
- **Admin Login**: Secure admin login for managing the platform.
- **Responsive Design**: Optimized for all devices.
- **Secure Payments**: Integrated with Razorpay and Stripe for secure transactions.

## Tech Stack

### Frontend

- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **Tailwind CSS**: For styling.
- **React Router**: For navigation.
- **React Toastify**: For notifications.

### Backend

- **Node.js**: For server-side logic.
- **Express.js**: For building REST APIs.
- **JWT**: For authentication.
- **Environment Variables**: Managed using `.env` files.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/styleverse.git
   cd styleverse
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create `.env` files for both frontend and backend:

   - **Frontend**: Add `VITE_BACKEND_URL` in `frontend/.env`.
   - **Backend**: Add `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `JWT_SECRET` in `backend/.env`.

4. Start the development servers:

   - **Frontend**:
     ```bash
     cd frontend
     npm run dev
     ```
   - **Backend**:
     ```bash
     cd backend
     npm start
     ```

5. Open the frontend in your browser at `http://localhost:5173`.

## Folder Structure

```
StyleVerse/
├── admin/               # Admin panel (React + Vite)
├── backend/             # Backend server (Node.js + Express)
│   ├── controllers/     # API controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Entry point for the backend
├── frontend/            # Frontend application (React + Vite)
│   ├── src/
│   │   ├── assets/      # Static assets
│   │   ├── components/  # Reusable components
│   │   ├── context/     # Global state management
│   │   ├── pages/       # Application pages
│   │   └── App.jsx      # Main application file
│   └── vite.config.js   # Vite configuration
└── README.md            # Project documentation
```

## Scripts

### Frontend

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.

### Backend

- `npm start`: Start the backend server.

## Environment Variables

### Frontend

- `VITE_BACKEND_URL`: URL of the backend server.

### Backend

- `ADMIN_EMAIL`: Admin email for login.
- `ADMIN_PASSWORD`: Admin password for login.
- `JWT_SECRET`: Secret key for JWT authentication.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.


