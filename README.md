# ShopKart

ShopKart is an e-commerce project with an Express and MongoDB backend for customer account management.

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
```

## Backend

The backend is built with:

- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- cookie-parser for cookies

## Setup

1. Open a terminal in the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file inside `backend/` with the required environment variables:

   ```env
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend with Nodemon:

   ```bash
   npx nodemon index.js
   ```

## API Base Path

Customer endpoints are available under:

```text
/customers
```

The root endpoint is available at:

```text
/
```
