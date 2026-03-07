export type PostDTO = {
  id: number;
  title: string;
  body: string;
  published_at: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  publishedAt: Date;
};

export const postMapper = (dto: PostDTO): Post => {
  return {
    id: dto.id,
    title: dto.title,
    body: dto.body,
    publishedAt: new Date(dto.published_at),
  };
};

const res = await fetch("/api/posts");
const data: PostDTO[] = await res.json();

const posts = data.map(postMapper);
