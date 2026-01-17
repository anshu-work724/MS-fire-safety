import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }),
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
  console.log(`Server running at http://localhost:${PORT}`);
});
