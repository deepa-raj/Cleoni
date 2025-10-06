const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const checkoutRoutes = require("./routes/checkoutRoutes")
const orderRoutes = require("./routes/orderRoutes")
const uploadRoutes = require("./routes/uploadRoutes")
const subscribeRoute = require("./routes/subscribeRoute")
const adminRoutes = require("./routes/adminRoutes")
const productAdminRoutes = require("./routes/productAdminRoutes")
const adminOrder = require("./routes/adminOrderRoutes")

const app = express();
app.use(express.json());
// app.use(cors());

// ✅ Configure CORS properly
app.use(cors({
  origin: ["http://localhost:5173", "https://cleoni-56l6.vercel.app"],   // frontend (vite) URL
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], // allow json + jwt
  credentials: true,
}));

dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("WELCOME TO CLEONI API!");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoute);

// Admin
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrder);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// password: IwNXvyClclc98Vc1
