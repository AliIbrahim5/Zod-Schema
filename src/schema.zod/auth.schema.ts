import { TypeOf, z } from "zod";

export const RegisterSchema = z.object({
  body: z.object({
    id: z.string({ required_error: "Id is required" }),
    username: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
      })
      .min(2, "username must be 2 chrat")
      .max(10, "username ,must be less 10 chart"),
    password: z.string({ required_error: "Password is required" }),
    email: z
      .string({
        required_error: "email is required",
        invalid_type_error: "plasee enter a email",
      })
      .email(),
  }),
});

export const LoginSchema = z.object({
  body: z.object({
    username: z.string(),

    password: z.string(),
  }),
});

export type RegistertypeSchema = TypeOf<typeof RegisterSchema>["body"];
export type LogintypeSchema = TypeOf<typeof LoginSchema>["body"];
