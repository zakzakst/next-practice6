export type CreatePostRequestDTO = {
  title: string;
  body: string;
};

export type Post = {
  title: string;
  body: string;
};

export const postToCreatePostRequestDTO = (
  post: Post,
): CreatePostRequestDTO => {
  return {
    title: post.title,
    body: post.body,
  };
};

// Model（取得用）
// export type Post = {
//   id: number;
//   title: string;
//   body: string;
// };
// CreateInput（UI用）
// export type CreatePostInput = {
//   title: string;
//   body: string;
// };
// RequestDTO
// export type CreatePostRequestDTO = {
//   title: string;
//   body: string;
// };
// Mapper
// export const createPostInputToDTO = (
//   input: CreatePostInput
// ): CreatePostRequestDTO => {
//   return {
//     title: input.title,
//     body: input.body,
//   };
// };
