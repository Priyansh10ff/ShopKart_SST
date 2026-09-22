# ShopKart

ShopKart is a full-stack e-commerce web application built using the MERN stack.

## Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cookie-based authentication

## Features

### Authentication
- Customer registration
- Customer login
- Customer logout
- Get logged-in customer
- Change password
- Protected routes
- HTTP-only authentication cookie

### Products
- View all products
- Search products
- Filter products by category
- View individual product details
- Display product price, stock, category, and image

### Wishlist
- Add product to wishlist
- Remove product from wishlist
- View wishlist
- Single API route for wishlist add/remove toggle
- Wishlist status on product cards
- Add/Remove Wishlist button on product details

## API Routes

### Customer Routes

| Method | Route | Description |
|---|---|---|
| POST | `/customers/register` | Register customer |
| POST | `/customers/login` | Login customer |
| GET | `/customers/me` | Get logged-in customer |
| POST | `/customers/logout` | Logout customer |
| PATCH | `/customers/change-password` | Change password |
| POST | `/customers/wishlist/:productId` | Add or remove wishlist item |
| GET | `/customers/wishlist` | Get customer's wishlist |

### Product Routes

| Method | Route | Description |
|---|---|---|
| POST | `/products` | Create product |
| GET | `/products` | Get products |
| GET | `/products/:id` | Get single product |

## Wishlist Logic

The wishlist uses one toggle endpoint instead of separate add and delete routes.

```text
POST /customers/wishlist/:productId

Product already exists
        ↓
     Remove

Product does not exist
        ↓
       Add
```

## Authentication Flow

```text
Customer Login
      ↓
Verify email and password
      ↓
Generate JWT
      ↓
Store JWT in HTTP-only cookie
      ↓
Browser sends cookie
      ↓
Authentication middleware verifies token
      ↓
req.customer is available
      ↓
Protected controller executes
```

## Project Structure

```text
ShopKart
├── backend
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── .env
│
└── frontend
    └── src
        ├── components
        ├── pages
        ├── context
        ├── services
        └── App.jsx
```

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=8001
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not commit `.env` to GitHub.

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Current Status

### Completed
- Customer authentication
- JWT authentication
- Protected routes
- Product listing
- Product search
- Category filtering
- Product details
- Wishlist toggle
- Wishlist status on product cards
- Wishlist status on product details

### To Be Implemented
- Add to cart
- Cart management
- Checkout
- Order creation
- Order history
- Payment integration
- Product image optimization / Cloudinary
- Admin/product management
