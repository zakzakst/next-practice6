import useSWR from "swr";
import { fetchPosts } from "../repository/postRepository";

export const usePosts = () => {
  const { data, error, isLoading } = useSWR("posts", fetchPosts);
  return {
    posts: data,
    isLoading,
    isError: error,
  };
};
