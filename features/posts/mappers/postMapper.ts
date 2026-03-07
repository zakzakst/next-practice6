import { PostDTO } from "../dto/postDto";
import { Post } from "../types/post";

export const postDtoToPost = (dto: PostDTO): Post => {
  return {
    id: dto.id,
    title: dto.title,
    body: dto.body,
  };
};
