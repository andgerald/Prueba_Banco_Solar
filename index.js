import express from "express";
import "dotenv/config";

const { SERVER_PORT } = process.env;
const app = express();

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port http://localhost:${SERVER_PORT}`);
});
