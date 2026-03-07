import { PostDTO } from "../dto/postDto";
import { Post } from "../types/post";
import { postDtoToPost } from "../mappers/postMapper";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("/api/posts");
  const data: PostDTO[] = await res.json();
  return data.map(postDtoToPost);
};
