export type TagDTO = {
  id: number;
  name: string;
};

export type PostDTO = {
  id: number;
  title: string;
  tags: TagDTO[];
};

export type Tag = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  title: string;
  tags: Tag[];
};

export const tagMapper = (dto: TagDTO): Tag => {
  return {
    id: dto.id,
    name: dto.name,
  };
};

export const postMapper = (dto: PostDTO): Post => {
  return {
    id: dto.id,
    title: dto.title,
    tags: dto.tags.map(tagMapper),
  };
};
