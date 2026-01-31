import simpleGit from "simple-git";
import fs from "fs";

const IgnoreFiles = ["package-lock.json"];
const git = simpleGit();

type DiffFile = {
  file: string;
  diff: string;
};

const parseDiff = (diffText: string): DiffFile[] => {
  const blocks = diffText.split("diff --git ").slice(1);
  const diffFiles = blocks.map((block) => {
    const lines = block.split("\n");
    const firstLine = lines[0] ?? "";

    // diff ヘッダーからファイルパスを抽出しようとします: "a/path/to/file b/path/to/file"
    const match = firstLine.match(/^a\/(.+?)\s+b\/(.+)$/);
    let file = "";
    if (match) {
      file = match[2];
    } else {
      // フォールバック: ブロック内の "+++ b/..." 行を探します
      const plusPlus = lines.find((l) => l.startsWith("+++ b/"));
      if (plusPlus) file = plusPlus.replace("+++ b/", "");
    }

    return {
      file,
      diff: "diff --git " + block,
    } as DiffFile;
  });

  return diffFiles.filter(
    (diffFile) =>
      diffFile.file &&
      diffFile.file.length > 0 &&
      !IgnoreFiles.includes(diffFile.file),
  );
};

const main = async () => {
  // 実際のプロジェクトだとdevelopになると思うが、自分の練習ではdevelop⇒mainで作業しているのでmainとの差分を検出している
  const diff = await git.diff(["main"]);
  const files = parseDiff(diff);

  let md = "";

  for (const f of files) {
    if (f.file) {
      md += `### ${f.file}
\`\`\`diff
${f.diff}
\`\`\`
`;
    }
  }

  fs.writeFileSync("tasks/develop-diff/diff.md", md, "utf8");
};

main().catch((err) => {
  console.error("error:", err);
  process.exit(1);
});
