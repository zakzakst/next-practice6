import simpleGit from "simple-git";
import fs from "fs";

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

    // try to extract file path from the diff header like: "a/path/to/file b/path/to/file"
    const match = firstLine.match(/^a\/(.+?)\s+b\/(.+)$/);
    let file = "";
    if (match) {
      file = match[2];
    } else {
      // fallback: look for a \"+++ b/..\" line inside the block
      const plusPlus = lines.find((l) => l.startsWith("+++ b/"));
      if (plusPlus) file = plusPlus.replace("+++ b/", "");
    }

    return {
      file,
      diff: "diff --git " + block,
    } as DiffFile;
  });

  return diffFiles.filter(
    (diffFile) => diffFile.file && diffFile.file.length > 0,
  );
};

async function main() {
  const target = process.argv[2] ?? "develop";

  const diff = await git.diff([target]);
  const files = parseDiff(diff);

  let md = `# PR Review Request

## Target branch
${target}

## Changed files
`;

  for (const f of files) {
    md += `
### ${f.file}

\`\`\`diff
${f.diff}
\`\`\`
`;
  }

  md += `
## Please review

- バグの可能性
- 設計の違和感
- 可読性改善
- TypeScript観点の指摘
`;

  fs.writeFileSync("copilot-prompt.md", md, "utf8");
}

main().catch((err) => {
  console.error("error:", err);
  process.exit(1);
});
