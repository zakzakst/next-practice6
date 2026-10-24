"use client";

import { useOptimistic, useState, useTransition } from "react";

const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const saveLike = async (value: boolean): Promise<boolean> => {
  await sleep(3000);
  return value;
};

export const Parts = () => {
  const [liked, setLiked] = useState(false);
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(128);

  const handleLike = () => {
    const nextLiked = !optimisticLiked;
    startTransition(async () => {
      setOptimisticLiked(nextLiked);
      const saved = await saveLike(nextLiked);
      setLiked(saved);
      setCount((currentCount) => currentCount + (saved ? 1 : -1));
    });
  };

  const optimisticCount =
    optimisticLiked === liked ? count : count + (optimisticLiked ? 1 : -1);

  return (
    <div>
      <div>
        liked: <span className={liked ? "is-liked" : ""}>{`${liked}`}</span>
      </div>
      <div>{optimisticCount} likes</div>
      <div>{isPending ? "保存中" : "保存完了"}</div>
      <div>
        <button
          aria-label={optimisticLiked ? "Unlike" : "Like"}
          aria-pressed={optimisticLiked}
          className="optimistic__like-button"
          disabled={isPending}
          onClick={handleLike}
          type="button"
        >
          {optimisticLiked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
};
