import { createUserInputToDTO } from "../mappers/userMapper";
import { CreateUserInput } from "../schemas/createUserSchema";

export const createUser = async (input: CreateUserInput) => {
  const dto = createUserInputToDTO(input);
  await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });
};
