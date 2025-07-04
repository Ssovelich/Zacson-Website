import { z } from "zod";

export const messageSchema = z.object({
  name: z
    .string()
    .min(3, "The name must contain at least 3 characters.")
    .max(20, "The name cannot exceed 20 characters.")
    .nonempty("Name is required."),

  email: z
    .string()
    .nonempty("Email is required.")
    .email("Incorrect email format."),

  phone: z
    .string()
    .nonempty("Phone number is required.")
    .regex(/^\+?\d{9,12}$/, "Invalid phone number format."),

  message: z.string().optional(),
});
