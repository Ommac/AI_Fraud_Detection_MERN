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

// Dummy Fraud Check Route
app.post("/predict", (req, res) => {
  const { amount } = req.body;

  let riskScore = amount > 10000 ? 85 : 15;

  res.json({
    fraud: riskScore > 50,
    riskScore,
    message:
      riskScore > 50
        ? "Suspicious Transaction Detected"
        : "Transaction Safe",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});