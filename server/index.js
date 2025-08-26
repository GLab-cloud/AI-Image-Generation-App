import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import chatGPTRoutes from "./routes/chatGPTRoutes.js";

dotenv.config();

const app = express(); //
app.use(cors({ origin: ["*", "https://8xdxky-5175.csb.app"] }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/chatGPT", chatGPTRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E!",
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(5000, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.log(error);
  }
};

startServer(); //
