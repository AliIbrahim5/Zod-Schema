import express from "express";
import {
  LoginSchema,
  LogintypeSchema,
  RegisterSchema,
  RegistertypeSchema,
} from "../schema.zod/auth.schema";
import Vialdate from "../middleware/vialdate";

const router = express.Router();

const users: RegistertypeSchema[] = [
  {
    id: "123456",
    username: "admin",
    password: "password",
    email: "admin@",
  },
  {
    id: "123456",
    username: "ALi",
    password: "password",
    email: "admin@",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(users);
});
router.post("/register", Vialdate(RegisterSchema), (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({
    message: "added user successfully",
  });
});

router.post("/login", Vialdate(LoginSchema), (req, res) => {
  const ouldUser = req.body as LogintypeSchema;

  const isViald = users.find((user) => {
    return (
      ouldUser.username === user.username && ouldUser.password === user.password
    );
  });
  if (!isViald) {
    res.status(404).json({
      message: "woring usernam or password",
    });
  }
  res.status(200).json({
    message: `welcome back ${ouldUser.username} !`,
  });
});

export default router;
