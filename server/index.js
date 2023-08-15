import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./db/db.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js  ";

dotenv.config();
const app = express();
const port = 8080;

app.use(cors());
// app.use(
//   cors({ credentials: true, origin: "*", allowMethods: "*", allowHeaders: "*" })
// );

app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
