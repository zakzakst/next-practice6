export type AuthorDTO = {
  id: number;
  name: string;
};

export type PostDTO = {
  id: number;
  title: string;
  author: AuthorDTO;
};

export type Author = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  title: string;
  author: Author;
};

export const authorMapper = (dto: AuthorDTO): Author => {
  return {
    id: dto.id,
    name: dto.name,
  };
};

export const postMapper = (dto: PostDTO): Post => {
  return {
    id: dto.id,
    title: dto.title,
    author: authorMapper(dto.author),
  };
};

const res = await fetch("/api/posts");
const data: PostDTO[] = await res.json();

const posts = data.map(postMapper);
