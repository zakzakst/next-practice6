export type UserDTO = {
  id: number;
  user_name: string;
};

export type User = {
  id: number;
  userName: string;
};

export const userMapper = (dto: UserDTO): User => {
  return {
    id: dto.id,
    userName: dto.user_name,
  };
};

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("/api/users");
  const data: UserDTO[] = await res.json();
  return data.map(userMapper);
};
