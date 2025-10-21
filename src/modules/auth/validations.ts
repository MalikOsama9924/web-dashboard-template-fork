import z from "zod";

export const LoginSchema = z.object({
  email: z.email("Invalid Email"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().default(false),
});

export const SignupSchema = z.object({
  email: z.email("Invalid Email"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});
