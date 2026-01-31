import simpleGit from "simple-git";

const git = simpleGit();

async function main() {
  // const status = await git.status();
  // console.log(status);

  // 現在ブランチ
  const branch = await git.branch();
  console.log("current branch:", branch.current);

  // developとの差分
  const diff = await git.diff(["develop"]);

  console.log("===== git diff develop =====");
  console.log(diff);
}

main();
