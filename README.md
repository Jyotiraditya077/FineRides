# FineRides

<p align="center">
  <img src="https://github.com/Jyotiraditya077/FineRides/blob/main/admin/public/logo.png" alt="FineRides Logo" width="170px">
</p>

**FineRides** is a vehicle rental platform where users can browse a range of bikes and cars, select rental durations, and place secure bookings. It offers a seamless UI, dynamic vehicle management, and checkout powered by Stripe.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

✔️ JWT-based user authentication & authorization  
✔️ Admin panel to manage rental orders and listings  
✔️ Add-to-cart functionality with hourly rental duration support  
✔️ Checkout with **Stripe Payment Integration**  
✔️ View order history & rental tracking  
✔️ Fully responsive across devices  
✔️ Cloudinary image uploads and MongoDB integration 

---

## Demo

🔗 **Live App**: [FineRides Live](https://finerides.onrender.com)  
🔗 **Admin Dashboard**: [Admin Panel](https://finerides-admin.onrender.com)

## Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- React Router  
- Axios  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- Stripe Payment Gateway  

---

## Installation

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Jyotiraditya077/finerides.git
cd finerides
```

### 2️⃣ Install Dependencies  
#### Frontend  
```bash
cd frontend
npm install
```

#### Backend  
```bash
cd ../backend
npm install
```

#### Admin
```bash
cd ../admin
npm install
```

---

## Usage

### 1️⃣ Start the Backend Server  
```bash
cd backend
npm run server
```
The backend runs at `http://localhost:4000`.

### 2️⃣ Start the Frontend Application  
```bash
cd ../frontend
npm run dev
```
The frontend runs at `http://localhost:5173`.

### 3️⃣ Start the Admin Application
```bash
cd ../admin
npm run dev
```
The admin runs at `http://localhost:5174`.

---

## Environment Variables

Create a `.env` file inside the `backend/` directory and add the following variables:

```env

JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
MONGO_URL=your_mongo_url
```
(Replace placeholders with actual values.)

---

Create a `.env` file inside the `frontend/` directory and add the following variables:

```env

VITE_ACCESS_KEY=your_web3form_secret_key
```
(Replace placeholders with actual values.)

---

## Contributing

We welcome contributions! Follow these steps:

1️⃣ Fork the repository  
   Click the Fork button on the top right of the repository page.

2️⃣ Create a new branch  
```bash
git checkout -b feature/your-feature-name
```

3️⃣ Commit your changes  
```bash
git commit -m "Added a new feature"
```

4️⃣ Push to the branch  
```bash
git push origin feature/your-feature-name
```

5️⃣ Create a Pull Request 🎉  

---

## License

This project is open-source and available under the MIT License.

---

## Contact

👤 **Jyotiraditya Swain**  
📍 **GitHub**: [Jyotiraditya077](https://github.com/Jyotiraditya077)  
📧 **Email**: jyotiradityaswain123@gmail.com  
🌐 **Portfolio**: [Know more](https://jyotiradityaportfolio.netlify.app/)