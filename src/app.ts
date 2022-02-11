import express from "express";
import cors from "cors";
import { shared } from "./shared";

const app = express();

const whitelist = ["https://x-and-o-game.vercel.app", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin: any, next: any) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      next(null, true);
    } else {
      next(new Error("CROSS ORIGIN ERROR"));
    }
  }
};


app.use(
  cors({
    origin: "https://x-and-o-game.vercel.app",
  })
);
app.use(express.json());

app.get("/waiting", (req, res) => {
  res.send({
    X: shared.waitingList["X"].map((u) => ({
      ...u,
      socket: undefined,
      socketId: u.socket.id,
    })),
    O: shared.waitingList["O"].map((u) => ({
      ...u,
      socket: undefined,
      socketId: u.socket.id,
    })),
  });
});

export { app };
