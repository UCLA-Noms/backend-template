import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index";
import morgan from "morgan";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.use(cors());
app.use(morgan("dev")); // Log every request to the console for debugging purposes
app.use("/", routes); // Routes defined in routes/index.js
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
