import express from "express";
import sectionRouter from "./routes/section.routes.js";
import connection from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use("/api/sections", sectionRouter);

app.get("/health-check", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Health Check: server is running fine.",
  });
});

app.listen(port, async () => {
  try {
    const data = await connection;
    console.log(`Server is running on port ${port}`);
    console.log(`Database connected with ${data.connection.host}`);
  } catch (error) {
    console.log(error);
  }
});
