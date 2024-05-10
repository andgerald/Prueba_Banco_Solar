import express from "express";
import "dotenv/config";
import path from "path";

const { SERVER_PORT } = process.env;
const __dirname = path.resolve();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port http://localhost:${SERVER_PORT}`);
});
