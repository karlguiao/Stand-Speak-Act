import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import articleRoutes from "./routes/articles.js";
import users from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("public/uploads"));

mongoose
  .connect("mongodb://localhost:27017/StandSpeakActDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mount routes
app.use("/api/articles", articleRoutes);
app.use("/api/users", users);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
