import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./src/routes/contact.route.js";

dotenv.config();

const app = express();
const PORT = 5000; // as requested

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("MS Fire Safety Backend Running...");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
