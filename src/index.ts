import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});


app.get("/question", (req: Request, res: Response) => {
  const questions = [
    "What is your favorite programming language?",
    "What is the capital of France?",
    "What is 2 + 2?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the speed of light?"
  ];
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  return res.json({ question: randomQuestion });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


