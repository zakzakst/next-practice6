import { z } from "zod";

export const createUserSchema = z.object({
  userName: z
    .string()
    .min(1, "ユーザー名は必須です")
    .max(20, "20文字以内で入力してください"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
