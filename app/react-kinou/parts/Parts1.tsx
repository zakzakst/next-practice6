"use client";

import { Suspense, use } from "react";

const Loading = () => {
  return <div>Loading...</div>;
};

const fetchName = () => {
  const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("山田太郎");
    }, 2000);
  });
  return promise;
};

const NameParts = () => {
  const name = use(fetchName());
  return <div>{name}</div>;
};

export const Parts = () => {
  return (
    <div className="bg-white">
      <Suspense fallback={<Loading />}>
        <NameParts />
      </Suspense>
    </div>
  );
};
