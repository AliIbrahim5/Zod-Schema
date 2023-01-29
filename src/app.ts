import express from "express";
import authRouter from "./router/auth.routers";
const app = express();
const PORT = 5003;
app.use(express.json());

app.use("/api/user", authRouter);
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
