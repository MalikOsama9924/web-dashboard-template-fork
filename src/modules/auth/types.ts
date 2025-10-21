import type z from "zod";
import type { LoginSchema, SignupSchema } from "./validations";

export type LoginResponseType = {
  token: string;
};

export type SignupFormTypes = z.infer<typeof SignupSchema>;

export type LoginFormTypes = z.infer<typeof LoginSchema>;
