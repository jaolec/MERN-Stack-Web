const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const usersRoutes = require("./routes/users");
const propertiesRoutes = require("./routes/properties");
const leasesRoutes = require("./routes/leases");
const paymentsRoutes = require("./routes/payments");
const battlesRoutes = require("./routes/battles");
const announcementsRoutes = require("./routes/announcements");

// Use routes
app.use("/api/users", usersRoutes);
app.use("/api/properties", propertiesRoutes);
app.use("/api/leases", leasesRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/battles", battlesRoutes);
app.use("/api/announcements", announcementsRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
