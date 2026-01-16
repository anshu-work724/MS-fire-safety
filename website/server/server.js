import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000; // as requested

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());

// Import after dotenv.config() to ensure env vars are loaded
import("./src/routes/contact.route.js").then((module) => {
  const contactRouter = module.default;
  app.use("/api/contact", contactRouter);
});

app.get("/", (req, res) => {
  res.send("MS Fire Safety Backend Running...");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
