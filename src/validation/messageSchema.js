import { z } from "zod";

export const messageSchema = z.object({
  name: z
    .string()
    .min(3, "Імʼя має містити щонайменше 3 символи.")
    .max(20, "Імʼя не може перевищувати 20 символів.")
    .nonempty("Імʼя є обовʼязковим."),

  email: z
    .string()
    .nonempty("Email є обовʼязковим.")
    .email("Неправильний формат email."),

  phone: z
    .string()
    .nonempty("Номер телефону є обовʼязковим.")
    .regex(/^\+?\d{9,12}$/, "Невірний формат номера телефону."),

  message: z.string().optional(),
});
