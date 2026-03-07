import { CreateUserInput } from "../schemas/createUserSchema";
import { CreateUserRequestDTO } from "../dto/createUserRequestDto";

export const createUserInputToDTO = (
  input: CreateUserInput,
): CreateUserRequestDTO => {
  return {
    user_name: input.userName,
  };
};
