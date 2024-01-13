import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/posts", (req: Request, res: Response) => {
  res.send({
    title: 'posts',
    posts: [],
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
