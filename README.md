# ShopKart

ShopKart is a full-stack e-commerce application built with React, Express, and MongoDB. It supports customer authentication, product browsing, product details, and protected customer actions.

## Tech Stack

- Frontend: React 19, React Router, Vite, Tailwind CSS, Axios
- Backend: Node.js, Express, MongoDB with Mongoose
- Authentication: JWT, HTTP-only cookies, and bcrypt

## Project Structure

```text
ShopKart/
|-- backend/
|   |-- controllers/
|   |-- middlewares/
|   |-- models/
|   |-- routes/
|   |-- utils/
|   |-- index.js
|   |-- package.json
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- context/
|   |   |-- pages/
|   |   |-- services/
|   |-- package.json
|-- README.md
```

## Prerequisites

- Node.js and npm
- A running MongoDB instance or MongoDB Atlas connection

## Setup

### Backend

1. Install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create `backend/.env`:

   ```env
   PORT=8001
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. Start the API server:

   ```bash
   npx nodemon index.js
   ```

The backend runs at `http://localhost:8001` when `PORT=8001`.

### Frontend

In a separate terminal, install dependencies and start the Vite development server:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173` by default.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | API health check |
| `POST` | `/customers/register` | Register a customer |
| `POST` | `/customers/login` | Log in a customer |
| `GET` | `/customers/me` | Get the authenticated customer |
| `POST` | `/customers/logout` | Log out a customer |
| `PATCH` | `/customers/change-password` | Change the authenticated customer's password |
| `GET` | `/products` | Get all products |
| `GET` | `/products/:id` | Get a product by ID |
| `POST` | `/products` | Create a product |

## Available Frontend Commands

Run these commands from `frontend/`:

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```
