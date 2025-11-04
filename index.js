import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Preprod Mock API V3! 🚀");
});

app.listen(8080, () => console.log("Server running on port 8080"));// trigger test Tue Nov  4 14:03:51 +07 2025
