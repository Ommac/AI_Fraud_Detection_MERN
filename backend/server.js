const express = require("express");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Fraud Detection API Running",
    status: "Server Active",
  });
});

// Health Check Route
app.get("/health", (req, res) => {
  res.json({
    success: true,
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// User Registration
app.post("/api/auth/register", (req, res) => {
  res.json({
    success: true,
    message: "User registered successfully",
  });
});

// User Login
app.post("/api/auth/login", (req, res) => {
  res.json({
    success: true,
    token: "dummy-jwt-token",
  });
});

// Get User Profile
app.get("/api/users/profile", (req, res) => {
  res.json({
    name: "Om",
    email: "om@example.com",
  });
});

// Get Transactions
app.get("/api/transactions", (req, res) => {
  res.json({
    transactions: [
      {
        id: 1,
        amount: 5000,
        status: "Safe",
      },
      {
        id: 2,
        amount: 25000,
        status: "Suspicious",
      },
    ],
  });
});

// Create Transaction
app.post("/api/transactions", (req, res) => {
  const { amount } = req.body;

  res.json({
    success: true,
    amount,
    message: "Transaction created",
  });
});

// Fraud Prediction
app.post("/predict", (req, res) => {
  const { amount } = req.body;

  const riskScore = amount > 10000 ? 85 : 15;

  res.json({
    fraud: riskScore > 50,
    riskScore,
    message:
      riskScore > 50
        ? "Suspicious Transaction Detected"
        : "Transaction Safe",
  });
});

// Dashboard Stats
app.get("/api/dashboard/stats", (req, res) => {
  res.json({
    totalTransactions: 120,
    fraudDetected: 12,
    safeTransactions: 108,
  });
});

// OTP Verification
app.post("/api/otp/verify", (req, res) => {
  res.json({
    success: true,
    message: "OTP verified successfully",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});