export type UserDTO = {
  id: number;
  user_name: string;
  created_at: string;
};

export type User = {
  id: number;
  userName: string;
  createdAt: Date;
};

export const userMapper = (dto: UserDTO): User => {
  return {
    id: dto.id,
    userName: dto.user_name,
    createdAt: new Date(dto.created_at),
  };
};
