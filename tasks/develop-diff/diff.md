
### .github/agents/review.agent.md

```diff
diff --git a/.github/agents/review.agent.md b/.github/agents/review.agent.md
new file mode 100644
index 0000000..77885e8
--- /dev/null
+++ b/.github/agents/review.agent.md
@@ -0,0 +1,26 @@
+---
+name: review
+---
+
+## 重要: 以下の3つのステップを必ず順番に実行してください
+
+### ステップ1: npm run develop-diff を実行
+
+- 必ず実行してください（スキップ厳禁）
+- 実行完了を確認するまで次に進まないでください
+
+### ステップ2: diff.md を読み込み
+
+- ステップ1完了後、必ず `tasks/develop-diff/diff.md` を read_file で読み込んでください
+- ファイル内容を完全に確認するまで次に進まないでください
+
+### ステップ3: レビューと改善点の出力
+
+- ステップ2完了後、読み込んだ内容をレビューしてください
+- 以下の項目について改善点を提示してください：
+  1. コード品質の問題
+  2. ファイル構造の改善点
+  3. ベストプラクティス違反
+  4. 重複コード
+  5. 命名規則の改善
+- 改善点をチャット上に明確に出力してください

```

### .github/prompts/review.prompt.md

```diff
diff --git a/.github/prompts/review.prompt.md b/.github/prompts/review.prompt.md
new file mode 100644
index 0000000..af3947e
--- /dev/null
+++ b/.github/prompts/review.prompt.md
@@ -0,0 +1,4 @@
+---
+name: review
+agent: review
+---

```

### app/pdf2/parts/Parts2.tsx

```diff
diff --git a/app/pdf2/parts/Parts2.tsx b/app/pdf2/parts/Parts2.tsx
index 151faf3..025ddd8 100644
--- a/app/pdf2/parts/Parts2.tsx
+++ b/app/pdf2/parts/Parts2.tsx
@@ -1,5 +1,12 @@
 "use client";
-import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
+import {
+  Document,
+  Page,
+  Text,
+  View,
+  Image,
+  StyleSheet,
+} from "@react-pdf/renderer";
 
 const styles = StyleSheet.create({
   page: {
@@ -25,6 +32,12 @@ const styles = StyleSheet.create({
     borderWidth: 1,
     padding: 12,
   },
+  image: {
+    width: 30,
+    height: 30,
+    display: "flex",
+    backgroundColor: "#f00",
+  },
 });
 
 export const Parts = () => {
@@ -53,7 +66,14 @@ export const Parts = () => {
             <Text style={styles.label}>名前:</Text>
             <Text style={styles.value}>山田太郎</Text>
           </View>
-
+          {/* <Image src="/next.svg" style={{ width: 120, marginBottom: 16 }} /> */}
+          <Image src="/bg.png" style={{ width: 120, marginBottom: 16 }} />
+          <View style={{ backgroundColor: "#000", height: 40 }}>
+            {/* <Image
+              src="https://placehold.jp/150x150.png"
+              // style={styles.image}
+            /> */}
+          </View>
           <View style={styles.row}>
             <Text style={styles.label}>日付:</Text>
             <Text style={styles.value}>2026/01/31</Text>

```

### copilot-prompt.md

```diff
diff --git a/copilot-prompt.md b/copilot-prompt.md
new file mode 100644
index 0000000..23faf2d
--- /dev/null
+++ b/copilot-prompt.md
@@ -0,0 +1,3587 @@
+# PR Review Request
+
+## Target branch
+main
+
+## Changed files
+
+### .env
+
+```diff
+
```

### .env

```diff
diff --git a/.env b/.env
+new file mode 100644
+index 0000000..1df2fe5
+--- /dev/null
++++ b/.env
+@@ -0,0 +1,6 @@
++##########
++# log4jsの挙動確認の記録を残すために.gitignoreから外している。値を追加する場合は注意する
++##########
++
++LOGGER_ENV=production
++# LOGGER_ENV=develop
+\ No newline at end of file
+
+```
+
+### .gitignore
+
+```diff
+
```

### .gitignore

```diff
diff --git a/.gitignore b/.gitignore
+index 5ef6a52..4558657 100644
+--- a/.gitignore
++++ b/.gitignore
+@@ -31,7 +31,7 @@ yarn-error.log*
+ .pnpm-debug.log*
+ 
+ # env files (can opt-in for committing if needed)
+-.env*
++# .env*
+ 
+ # vercel
+ .vercel
+@@ -39,3 +39,5 @@ yarn-error.log*
+ # typescript
+ *.tsbuildinfo
+ next-env.d.ts
++
++logs/*.log
+\ No newline at end of file
+
+```
+
+### app/_sample/page.tsx
+
+```diff
+
```

### app/_sample/page.tsx

```diff
diff --git a/app/_sample/page.tsx b/app/_sample/page.tsx
+new file mode 100644
+index 0000000..b1a7106
+--- /dev/null
++++ b/app/_sample/page.tsx
+@@ -0,0 +1,11 @@
++import { Parts } from "./parts/Parts1";
++
++const Page = () => {
++  return (
++    <div className="p-4">
++      <Parts />
++    </div>
++  );
++};
++
++export default Page;
+
+```
+
+### app/_sample/parts/Parts1.tsx
+
+```diff
+
```

### app/_sample/parts/Parts1.tsx

```diff
diff --git a/app/_sample/parts/Parts1.tsx b/app/_sample/parts/Parts1.tsx
+new file mode 100644
+index 0000000..c730b9d
+--- /dev/null
++++ b/app/_sample/parts/Parts1.tsx
+@@ -0,0 +1,5 @@
++"use client";
++
++export const Parts = () => {
++  return <div>parts</div>;
++};
+
+```
+
+### app/_sample/parts/_Parts.tsx
+
+```diff
+
```

### app/_sample/parts/_Parts.tsx

```diff
diff --git a/app/_sample/parts/_Parts.tsx b/app/_sample/parts/_Parts.tsx
+new file mode 100644
+index 0000000..c730b9d
+--- /dev/null
++++ b/app/_sample/parts/_Parts.tsx
+@@ -0,0 +1,5 @@
++"use client";
++
++export const Parts = () => {
++  return <div>parts</div>;
++};
+
+```
+
+### app/api/log4js/route.ts
+
+```diff
+
```

### app/api/log4js/route.ts

```diff
diff --git a/app/api/log4js/route.ts b/app/api/log4js/route.ts
+new file mode 100644
+index 0000000..1b6b46e
+--- /dev/null
++++ b/app/api/log4js/route.ts
+@@ -0,0 +1,24 @@
++import { NextResponse } from "next/server";
++import { logger, appLogger } from "@/lib/logger";
++
++export const runtime = "nodejs";
++
++// export async function GET() {
++//   logger.debug("debug log");
++//   logger.info("info log");
++//   logger.warn("warn log");
++//   logger.error("error log");
++//   return NextResponse.json({ ok: true });
++// }
++
++export async function GET() {
++  const userId = "user-123";
++  appLogger.info("API called", { userId });
++  try {
++    throw new Error("something failed");
++  } catch (err) {
++    appLogger.debug("LOGGER_ENV=productionだと出力されない");
++    appLogger.error("Unexpected error", err);
++  }
++  return NextResponse.json({ ok: true });
++}
+
+```
+
+### app/cleave/page.tsx
+
+```diff
+
```

### app/cleave/page.tsx

```diff
diff --git a/app/cleave/page.tsx b/app/cleave/page.tsx
+new file mode 100644
+index 0000000..d3064c9
+--- /dev/null
++++ b/app/cleave/page.tsx
+@@ -0,0 +1,13 @@
++// import { Parts } from "./parts/Parts1";
++// import { Parts } from "./parts/Parts2";
++import { Parts } from "./parts/Parts3";
++
++const Page = () => {
++  return (
++    <div className="p-4">
++      <Parts />
++    </div>
++  );
++};
++
++export default Page;
+
+```
+
+### app/cleave/parts/Parts1.tsx
+
+```diff
+
```

### app/cleave/parts/Parts1.tsx

```diff
diff --git a/app/cleave/parts/Parts1.tsx b/app/cleave/parts/Parts1.tsx
+new file mode 100644
+index 0000000..05513d7
+--- /dev/null
++++ b/app/cleave/parts/Parts1.tsx
+@@ -0,0 +1,18 @@
++"use client";
++
++import Cleave from "cleave.js/react";
++
++export const Parts = () => {
++  return (
++    <div>
++      <h1>cleave.js 練習</h1>
++
++      <Cleave
++        placeholder="カード番号"
++        options={{
++          creditCard: true,
++        }}
++      />
++    </div>
++  );
++};
+
+```
+
+### app/cleave/parts/Parts2.tsx
+
+```diff
+
```

### app/cleave/parts/Parts2.tsx

```diff
diff --git a/app/cleave/parts/Parts2.tsx b/app/cleave/parts/Parts2.tsx
+new file mode 100644
+index 0000000..e0f9179
+--- /dev/null
++++ b/app/cleave/parts/Parts2.tsx
+@@ -0,0 +1,34 @@
++"use client";
++
++import { useState } from "react";
++import Cleave from "cleave.js/react";
++
++export const Parts = () => {
++  const [formatted, setFormatted] = useState("");
++  const [raw, setRaw] = useState("");
++
++  return (
++    <div>
++      <h1>cleave.js 練習</h1>
++
++      <Cleave
++        placeholder="カード番号"
++        options={{
++          creditCard: true,
++        }}
++        onChange={(e) => {
++          setFormatted(e.target.value);
++
++          // cleave 独自拡張
++          const rawValue = (e.target as any).rawValue;
++          setRaw(rawValue);
++        }}
++      />
++
++      <div className="mt-4">
++        <p>formatted: {formatted}</p>
++        <p>raw: {raw}</p>
++      </div>
++    </div>
++  );
++};
+
+```
+
+### app/cleave/parts/Parts3.tsx
+
+```diff
+
```

### app/cleave/parts/Parts3.tsx

```diff
diff --git a/app/cleave/parts/Parts3.tsx b/app/cleave/parts/Parts3.tsx
+new file mode 100644
+index 0000000..362b5b7
+--- /dev/null
++++ b/app/cleave/parts/Parts3.tsx
+@@ -0,0 +1,58 @@
++"use client";
++
++import { useState } from "react";
++import Cleave from "cleave.js/react";
++
++export const Parts = () => {
++  const [price, setPrice] = useState("");
++  const [date, setDate] = useState("");
++  const [memberId, setMemberId] = useState("");
++
++  return (
++    <div>
++      <h1>cleave.js Step3</h1>
++
++      {/* 金額 */}
++      <div>
++        <h3>金額</h3>
++        <Cleave
++          placeholder="金額"
++          options={{
++            numeral: true,
++            numeralThousandsGroupStyle: "thousand",
++          }}
++          onChange={(e) => setPrice((e.target as any).rawValue)}
++        />
++        <p>raw: {price}</p>
++      </div>
++
++      {/* 日付 */}
++      <div className="mt-4">
++        <h3>日付</h3>
++        <Cleave
++          placeholder="YYYY/MM/DD"
++          options={{
++            date: true,
++            datePattern: ["Y", "m", "d"],
++          }}
++          onChange={(e) => setDate((e.target as any).rawValue)}
++        />
++        <p>raw: {date}</p>
++      </div>
++
++      {/* カスタム */}
++      <div className="mt-4">
++        <h3>会員ID</h3>
++        <Cleave
++          placeholder="ABC-1234-56789"
++          options={{
++            blocks: [3, 4, 5],
++            uppercase: true,
++          }}
++          onChange={(e) => setMemberId((e.target as any).rawValue)}
++        />
++        <p>raw: {memberId}</p>
++      </div>
++    </div>
++  );
++};
+
+```
+
+### app/cleave/parts/_Parts.tsx
+
+```diff
+
```

### app/cleave/parts/_Parts.tsx

```diff
diff --git a/app/cleave/parts/_Parts.tsx b/app/cleave/parts/_Parts.tsx
+new file mode 100644
+index 0000000..c730b9d
+--- /dev/null
++++ b/app/cleave/parts/_Parts.tsx
+@@ -0,0 +1,5 @@
++"use client";
++
++export const Parts = () => {
++  return <div>parts</div>;
++};
+
+```
+
+### app/console/page.tsx
+
+```diff
+
```

### app/console/page.tsx

```diff
diff --git a/app/console/page.tsx b/app/console/page.tsx
+new file mode 100644
+index 0000000..b1a7106
+--- /dev/null
++++ b/app/console/page.tsx
+@@ -0,0 +1,11 @@
++import { Parts } from "./parts/Parts1";
++
++const Page = () => {
++  return (
++    <div className="p-4">
++      <Parts />
++    </div>
++  );
++};
++
++export default Page;
+
+```
+
+### app/console/parts/Parts1.tsx
+
+```diff
+
```

### app/console/parts/Parts1.tsx

```diff
diff --git a/app/console/parts/Parts1.tsx b/app/console/parts/Parts1.tsx
+new file mode 100644
+index 0000000..d7c8c95
+--- /dev/null
++++ b/app/console/parts/Parts1.tsx
+@@ -0,0 +1,75 @@
++"use client";
++
++import { useEffect } from "react";
++
++export const Parts = () => {
++  console.count("Function call count");
++
++  useEffect(() => {
++    console.log(
++      "%cスタイルを設定",
++      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
++    );
++
++    console.log(
++      "%c複数の箇所%cに%cスタイル%cを設定",
++      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
++      "",
++      "color:green;",
++      "",
++    );
++
++    console.table(["Qiita", "blog1", "blog2"]);
++
++    console.table({
++      Date: new Date().getFullYear(),
++      platform: "Qiita",
++      post1: "blog1",
++    });
++
++    // consoleをグルーピングする
++    console.group("ユーザー情報");
++    console.log("Name: John Doe");
++    console.warn("Warning: Incomplete user information");
++    // console.error("Error: Unable to fetch user data");
++    console.groupEnd();
++
++    // consoleをグルーピングする（閉じた状態で色付き）
++    console.groupCollapsed(
++      "%cユーザー情報",
++      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
++    );
++    console.log("Name: John Doe");
++    console.warn("Warning: Incomplete user information");
++    console.groupEnd();
++
++    const user = {
++      name: "Alice",
++      age: 25,
++      address: {
++        city: "Tokyo",
++        country: "Japan",
++      },
++    };
++    console.dir(user);
++
++    // 時間の計測
++    console.time("time");
++    const qiita = function () {
++      console.log("Qiita");
++    };
++    qiita();
++    console.timeEnd("time");
++
++    // 第一引数に渡された値がfalseの場合エラーメッセージを出力、trueの場合は何も表示しない
++    let value = 10;
++    console.assert(value > 0, "値は0より大きい必要があります");
++    console.assert(value < 0, "値は0より小さい必要があります");
++
++    // console.clear();
++
++    console.trace("スタックトレースを表示");
++  }, []);
++
++  return <div>parts</div>;
++};
+
+```
+
+### app/console/parts/_Parts.tsx
+
+```diff
+
```

### app/console/parts/_Parts.tsx

```diff
diff --git a/app/console/parts/_Parts.tsx b/app/console/parts/_Parts.tsx
+new file mode 100644
+index 0000000..c730b9d
+--- /dev/null
++++ b/app/console/parts/_Parts.tsx
+@@ -0,0 +1,5 @@
++"use client";
++
++export const Parts = () => {
++  return <div>parts</div>;
++};
+
+```
+
+### app/google-libphonenumber/page.tsx
+
+```diff
+
```

### app/google-libphonenumber/page.tsx

```diff
diff --git a/app/google-libphonenumber/page.tsx b/app/google-libphonenumber/page.tsx
+new file mode 100644
+index 0000000..fc65830
+--- /dev/null
++++ b/app/google-libphonenumber/page.tsx
+@@ -0,0 +1,12 @@
++// import { Parts } from "./parts/Parts1";
++import { Parts } from "./parts/Parts2";
++
++const Page = () => {
++  return (
++    <div className="p-4">
++      <Parts />
++    </div>
++  );
++};
++
++export default Page;
+
+```
+
+### app/google-libphonenumber/parts/Parts1.tsx
+
+```diff
+
```

### app/google-libphonenumber/parts/Parts1.tsx

```diff
diff --git a/app/google-libphonenumber/parts/Parts1.tsx b/app/google-libphonenumber/parts/Parts1.tsx
+new file mode 100644
+index 0000000..7fb615f
+--- /dev/null
++++ b/app/google-libphonenumber/parts/Parts1.tsx
+@@ -0,0 +1,40 @@
++"use client";
++
++import { useState } from "react";
++import { PhoneNumberUtil } from "google-libphonenumber";
++
++const phoneUtil = PhoneNumberUtil.getInstance();
++
++export const Parts = () => {
++  const [value, setValue] = useState("");
++  const [isValid, setIsValid] = useState<boolean | null>(null);
++
++  const handleCheck = () => {
++    try {
++      const number = phoneUtil.parse(value, "JP");
++      const result = phoneUtil.isValidNumber(number);
++      setIsValid(result);
++    } catch {
++      // parse に失敗した場合（文字列など）
++      setIsValid(false);
++    }
++  };
++
++  return (
++    <div>
++      <h1>電話番号チェック</h1>
++
++      <input
++        value={value}
++        onChange={(e) => setValue(e.target.value)}
++        placeholder="08012345678"
++      />
++
++      <button onClick={handleCheck}>チェック</button>
++
++      {isValid !== null && (
++        <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
++      )}
++    </div>
++  );
++};
+
+```
+
+### app/google-libphonenumber/parts/Parts2.tsx
+
+```diff
+
```

### app/google-libphonenumber/parts/Parts2.tsx

```diff
diff --git a/app/google-libphonenumber/parts/Parts2.tsx b/app/google-libphonenumber/parts/Parts2.tsx
+new file mode 100644
+index 0000000..d5c5943
+--- /dev/null
++++ b/app/google-libphonenumber/parts/Parts2.tsx
+@@ -0,0 +1,57 @@
++"use client";
++
++import { useState } from "react";
++import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";
++
++const phoneUtil = PhoneNumberUtil.getInstance();
++
++export const Parts = () => {
++  const [value, setValue] = useState("");
++  const [formatted, setFormatted] = useState("");
++  const [isValid, setIsValid] = useState<boolean | null>(null);
++
++  const handleCheck = () => {
++    try {
++      const number = phoneUtil.parse(value, "JP");
++      const result = phoneUtil.isValidNumber(number);
++      setIsValid(result);
++      if (result) {
++        const formattedNumber = phoneUtil.format(
++          number,
++          // PhoneNumberFormat.NATIONAL,
++          // PhoneNumberFormat.INTERNATIONAL,
++          PhoneNumberFormat.E164,
++        );
++
++        setFormatted(formattedNumber);
++      } else {
++        setFormatted("");
++      }
++    } catch {
++      // parse に失敗した場合（文字列など）
++      setIsValid(false);
++      setFormatted("");
++    }
++  };
++
++  return (
++    <div>
++      <h1>電話番号チェック + フォーマット</h1>
++
++      <input
++        value={value}
++        onChange={(e) => setValue(e.target.value)}
++        placeholder="08012345678"
++      />
++
++      <button onClick={handleCheck}>チェック</button>
++
++      {isValid !== null && (
++        <>
++          <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
++          {formatted && <p>フォーマット結果: {formatted}</p>}
++        </>
++      )}
++    </div>
++  );
++};
+
+```
+
+### app/google-libphonenumber/parts/_Parts0.tsx
+
+```diff
+
```

### app/google-libphonenumber/parts/_Parts0.tsx

```diff
diff --git a/app/google-libphonenumber/parts/_Parts0.tsx b/app/google-libphonenumber/parts/_Parts0.tsx
+new file mode 100644
+index 0000000..92a1591
+--- /dev/null
++++ b/app/google-libphonenumber/parts/_Parts0.tsx
+@@ -0,0 +1,3 @@
++export const Parts = () => {
++  return <div>parts</div>;
++};
+
+```
+
+### app/pdf/page.tsx
+
+```diff
+
```

### app/pdf/page.tsx

```diff
diff --git a/app/pdf/page.tsx b/app/pdf/page.tsx
+new file mode 100644
+index 0000000..a5af43d
+--- /dev/null
++++ b/app/pdf/page.tsx
+@@ -0,0 +1,35 @@
++'use client';
++import { useState } from 'react';
++import { Document, Page as PdfPage, pdfjs } from 'react-pdf';
++
++import 'react-pdf/dist/Page/AnnotationLayer.css';
++import 'react-pdf/dist/Page/TextLayer.css';
++
++pdfjs.GlobalWorkerOptions.workerSrc = new URL(
++  'pdfjs-dist/build/pdf.worker.min.mjs',
++  import.meta.url,
++).toString();
++
++const Page = () => {
++  const [numPages, setNumPages] = useState<number>();
++  const [pageNumber, setPageNumber] = useState<number>(1);
++
++  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
++    setNumPages(numPages);
++  }
++
++  return (
++    <div>
++      <Document file="/pdf/README.pdf" onLoadSuccess={onDocumentLoadSuccess}>
++        <PdfPage pageNumber={pageNumber} />
++      </Document>
++      <p>
++        Page {pageNumber} of {numPages}
++      </p>
++      <button type='button' onClick={() => setPageNumber(1)}>1</button>
++      <button type='button' onClick={() => setPageNumber(2)}>2</button>
++    </div>
++  );
++}
++
++export default Page;
+\ No newline at end of file
+
+```
+
+### app/pdf2/page.tsx
+
+```diff
+
```

### app/pdf2/page.tsx

```diff
diff --git a/app/pdf2/page.tsx b/app/pdf2/page.tsx
+new file mode 100644
+index 0000000..5a41fe3
+--- /dev/null
++++ b/app/pdf2/page.tsx
+@@ -0,0 +1,47 @@
++"use client";
++import { useEffect, useState } from "react";
++import { PDFViewer, Font, PDFDownloadLink } from "@react-pdf/renderer";
++// import { Parts } from "./parts/Parts1";
++import { Parts } from "./parts/Parts2";
++
++Font.register({
++  family: "NotoSansJP",
++  fonts: [
++    {
++      src: "/fonts/NotoSansJP-Regular.ttf",
++    },
++    {
++      src: "/fonts/NotoSansJP-Bold.ttf",
++      fontWeight: "bold",
++    },
++  ],
++});
++
++const Page = () => {
++  const [loaded, setLoaded] = useState(false);
++
++  useEffect(() => {
++    setLoaded(true);
++  }, []);
++
++  return (
++    <div className="p-4">
++      <div className="h-screen">
++        {loaded && (
++          <>
++            <PDFViewer width="100%" height="100%">
++              <Parts />
++            </PDFViewer>
++            <PDFDownloadLink document={<Parts />} fileName={"parts.pdf"}>
++              {({ loading }) =>
++                loading ? "PDF生成中..." : "PDFをダウンロード"
++              }
++            </PDFDownloadLink>
++          </>
++        )}
++      </div>
++    </div>
++  );
++};
++
++export default Page;
+
+```
+
+### app/pdf2/parts/Parts1.tsx
+
+```diff
+
```

### app/pdf2/parts/Parts1.tsx

```diff
diff --git a/app/pdf2/parts/Parts1.tsx b/app/pdf2/parts/Parts1.tsx
+new file mode 100644
+index 0000000..83a7353
+--- /dev/null
++++ b/app/pdf2/parts/Parts1.tsx
+@@ -0,0 +1,14 @@
++"use client";
++import { Document, Page, Text, View } from "@react-pdf/renderer";
++
++export const Parts = () => {
++  return (
++    <Document>
++      <Page size="A4">
++        <View>
++          <Text>Hello PDF 👋</Text>
++        </View>
++      </Page>
++    </Document>
++  );
++};
+
+```
+
+### app/pdf2/parts/Parts2.tsx
+
+```diff
+
```

### app/pdf2/parts/Parts2.tsx

```diff
diff --git a/app/pdf2/parts/Parts2.tsx b/app/pdf2/parts/Parts2.tsx
+new file mode 100644
+index 0000000..151faf3
+--- /dev/null
++++ b/app/pdf2/parts/Parts2.tsx
+@@ -0,0 +1,65 @@
++"use client";
++import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
++
++const styles = StyleSheet.create({
++  page: {
++    padding: 40,
++    fontFamily: "NotoSansJP",
++  },
++  title: {
++    fontSize: 24,
++    marginBottom: 20,
++  },
++  row: {
++    flexDirection: "row",
++    marginBottom: 8,
++  },
++  label: {
++    width: 80,
++    fontSize: 12,
++  },
++  value: {
++    fontSize: 12,
++  },
++  box: {
++    borderWidth: 1,
++    padding: 12,
++  },
++});
++
++export const Parts = () => {
++  return (
++    <Document>
++      <Page size="A4" style={styles.page}>
++        <Text style={styles.title}>請求書サンプル</Text>
++
++        <View style={styles.box}>
++          <View style={styles.row}>
++            <Text style={styles.label}>名前:</Text>
++            <Text style={styles.value}>山田太郎</Text>
++          </View>
++
++          <View style={styles.row}>
++            <Text style={styles.label}>日付:</Text>
++            <Text style={styles.value}>2026/01/31</Text>
++          </View>
++        </View>
++      </Page>
++      <Page size="A4" style={styles.page}>
++        <Text style={styles.title}>請求書サンプル2</Text>
++
++        <View style={styles.box}>
++          <View style={styles.row}>
++            <Text style={styles.label}>名前:</Text>
++            <Text style={styles.value}>山田太郎</Text>
++          </View>
++
++          <View style={styles.row}>
++            <Text style={styles.label}>日付:</Text>
++            <Text style={styles.value}>2026/01/31</Text>
++          </View>
++        </View>
++      </Page>
++    </Document>
++  );
++};
+
+```
+
+### app/pdf2/parts/_Parts.tsx
+
+```diff
+
```

### app/pdf2/parts/_Parts.tsx

```diff
diff --git a/app/pdf2/parts/_Parts.tsx b/app/pdf2/parts/_Parts.tsx
+new file mode 100644
+index 0000000..c730b9d
+--- /dev/null
++++ b/app/pdf2/parts/_Parts.tsx
+@@ -0,0 +1,5 @@
++"use client";
++
++export const Parts = () => {
++  return <div>parts</div>;
++};
+
+```
+
+### app/popover/page.tsx
+
+```diff
+
```

### app/popover/page.tsx

```diff
diff --git a/app/popover/page.tsx b/app/popover/page.tsx
+new file mode 100644
+index 0000000..b1a7106
+--- /dev/null
++++ b/app/popover/page.tsx
+@@ -0,0 +1,11 @@
++import { Parts } from "./parts/Parts1";
++
++const Page = () => {
++  return (
++    <div className="p-4">
++      <Parts />
++    </div>
++  );
++};
++
++export default Page;
+
+```
+
+### app/popover/parts/Parts1.tsx
+
+```diff
+
```

### app/popover/parts/Parts1.tsx

```diff
diff --git a/app/popover/parts/Parts1.tsx b/app/popover/parts/Parts1.tsx
+new file mode 100644
+index 0000000..ae90f5c
+--- /dev/null
++++ b/app/popover/parts/Parts1.tsx
+@@ -0,0 +1,29 @@
++"use client";
++
++import { useId } from "react";
++import styles from "./styles.module.css";
++
++export const Parts = () => {
++  const id = useId();
++
++  return (
++    <div>
++      <button
++        type="button"
++        popoverTarget={id}
++        className="bg-amber-800 text-white p-4 ml-75 inline-block"
++        style={{ anchorName: `--${id}` }}
++      >
++        開く
++      </button>
++      <div
++        id={id}
++        popover="auto"
++        className={styles.popover}
++        style={{ positionAnchor: `--${id}` }}
++      >
++        <p>ポップオーバーの内容</p>
++      </div>
++    </div>
++  );
++};
+
+```
+
+### app/popover/parts/_Parts.tsx
+
+```diff
+
```

### app/popover/parts/_Parts.tsx

```diff
diff --git a/app/popover/parts/_Parts.tsx b/app/popover/parts/_Parts.tsx
+new file mode 100644
+index 0000000..c730b9d
+--- /dev/null
++++ b/app/popover/parts/_Parts.tsx
+@@ -0,0 +1,5 @@
++"use client";
++
++export const Parts = () => {
++  return <div>parts</div>;
++};
+
+```
+
+### app/popover/parts/styles.module.css
+
+```diff
+
```

### app/popover/parts/styles.module.css

```diff
diff --git a/app/popover/parts/styles.module.css b/app/popover/parts/styles.module.css
+new file mode 100644
+index 0000000..6287216
+--- /dev/null
++++ b/app/popover/parts/styles.module.css
+@@ -0,0 +1,5 @@
++.popover {
++  top: anchor(bottom);
++  left: anchor(left);
++  position-try-fallbacks: flip-inline;
++}
+
+```
+
+### lib/logger.ts
+
+```diff
+
```

### lib/logger.ts

```diff
diff --git a/lib/logger.ts b/lib/logger.ts
+new file mode 100644
+index 0000000..7c02716
+--- /dev/null
++++ b/lib/logger.ts
+@@ -0,0 +1,31 @@
++import "server-only";
++
++import log4js from "log4js";
++import path from "path";
++
++const logPath = path.join(process.cwd(), "logs/app.log");
++// NOTE: 通常はNODE_ENVを利用する。Next.jsで制御されているため、挙動確認の目的でLOGGER_ENVを利用している
++const isProd = process.env.LOGGER_ENV === "production";
++const level = isProd ? "info" : "debug";
++
++console.log(level);
++
++log4js.configure({
++  appenders: {
++    console: { type: "stdout" },
++    file: {
++      type: "file",
++      filename: logPath,
++      maxLogSize: 10485760, // 10MB
++      backups: 3,
++      compress: true,
++    },
++  },
++  categories: {
++    default: { appenders: ["console"], level },
++    app: { appenders: ["console", "file"], level },
++  },
++});
++
++export const logger = log4js.getLogger();
++export const appLogger = log4js.getLogger("app");
+
+```
+
+### logs/.gitkeep
+
+```diff
+
```

### logs/.gitkeep

```diff
diff --git a/logs/.gitkeep b/logs/.gitkeep
+new file mode 100644
+index 0000000..e69de29
+
+```
+
+### memo.md
+
+```diff
+
```

### memo.md

```diff
diff --git a/memo.md b/memo.md
+new file mode 100644
+index 0000000..ffbf47d
+--- /dev/null
++++ b/memo.md
+@@ -0,0 +1,42 @@
++### react-pdf
++
++#### PDFファイル表示
++
++- https://github.com/wojtekmaj/react-pdf/blob/v9.x/packages/react-pdf/README.md
++- v9でないとエラー出る
++  - https://github.com/wojtekmaj/react-pdf/issues/2039
++
++#### PDFファイル生成
++
++- https://zenn.dev/ksk2/articles/c0cf38b8ba61ec
++- useEffectとuseStateで描画タイミングをコントロールする必要があった
++  - https://github.com/diegomura/react-pdf/issues/2599
++- propsなどでPDFコンポーネントに値を渡せば、フォーム入力内容を反映するなどの操作もできる
++
++### cleave.js
++
++- react-hook-formとの連携はControllerを介して行う
++
++### console
++
++- https://dev.classmethod.jp/articles/console-log-css/
++- https://qiita.com/S4nTo/items/453b5e6ee933765211ec
++
++### log4js
++
++- log levelの意味
++  - debug：開発中だけ使う
++  - info：正常系の流れ
++  - warn：想定内だけど怪しい
++  - error：例外・障害
++- https://zenn.dev/shouta0715/articles/6823ea33cd3778
++- bash: `LOGGER_ENV=production npm run dev`
++- powershell: `$env:LOGGER_ENV="production"; npm run dev`
++
++### GitHub Copilot SDK
++
++- 下記を参考に試したが、上手くいかなかった。copilotの認証・ライセンスが関わっている？
++  - https://rutla.jp/blog/8544/
++  - https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
++- 利用にはGitHub Copilotサブスクリプションまたは開発者自身のAPIキーが必要
++  - https://138io.com/archives/9081
+
+```
+
+### next-practice6.code-workspace
+
+```diff
+
```

### next-practice6.code-workspace

```diff
diff --git a/next-practice6.code-workspace b/next-practice6.code-workspace
+index c6fa37b..cf18140 100644
+--- a/next-practice6.code-workspace
++++ b/next-practice6.code-workspace
+@@ -20,6 +20,8 @@
+       "*": false,
+       "typescript": false,
+       "yaml": false
+-    }
++    },
++    "editor.formatOnSave": true,
++    "editor.defaultFormatter": "esbenp.prettier-vscode"
+   }
+ }
+
+```
+
+### package-lock.json
+
+```diff
+
```

### package.json

```diff
diff --git a/package.json b/package.json
+index ab97381..1005ff6 100644
+--- a/package.json
++++ b/package.json
+@@ -6,21 +6,31 @@
+     "dev": "next dev",
+     "build": "next build",
+     "start": "next start",
+-    "lint": "eslint"
++    "lint": "eslint",
++    "simple-git": "tsx tasks/simple-git.ts main"
+   },
+   "dependencies": {
++    "@react-pdf/renderer": "^4.3.2",
++    "cleave.js": "^1.6.0",
++    "google-libphonenumber": "^3.2.44",
++    "log4js": "^6.9.1",
+     "next": "16.1.6",
+     "react": "19.2.3",
+-    "react-dom": "19.2.3"
++    "react-dom": "19.2.3",
++    "react-pdf": "^9.2.1"
+   },
+   "devDependencies": {
+     "@tailwindcss/postcss": "^4",
++    "@types/cleave.js": "^1.4.12",
++    "@types/google-libphonenumber": "^7.4.30",
+     "@types/node": "^20",
+     "@types/react": "^19",
+     "@types/react-dom": "^19",
+     "eslint": "^9",
+     "eslint-config-next": "16.1.6",
++    "simple-git": "^3.30.0",
+     "tailwindcss": "^4",
++    "tsx": "^4.21.0",
+     "typescript": "^5"
+   }
+ }
+
+```
+
+### public/fonts/NotoSansJP-Bold.ttf
+
+```diff
+
```

### public/fonts/NotoSansJP-Bold.ttf

```diff
diff --git a/public/fonts/NotoSansJP-Bold.ttf b/public/fonts/NotoSansJP-Bold.ttf
+new file mode 100644
+index 0000000..26a47bb
+Binary files /dev/null and b/public/fonts/NotoSansJP-Bold.ttf differ
+
+```
+
+### public/fonts/NotoSansJP-Regular.ttf
+
+```diff
+
```

### public/fonts/NotoSansJP-Regular.ttf

```diff
diff --git a/public/fonts/NotoSansJP-Regular.ttf b/public/fonts/NotoSansJP-Regular.ttf
+new file mode 100644
+index 0000000..d13df30
+Binary files /dev/null and b/public/fonts/NotoSansJP-Regular.ttf differ
+
+```
+
+### public/pdf/README.pdf
+
+```diff
+
```

### public/pdf/README.pdf

```diff
diff --git a/public/pdf/README.pdf b/public/pdf/README.pdf
+new file mode 100644
+index 0000000..f765603
+--- /dev/null
++++ b/public/pdf/README.pdf
+@@ -0,0 +1,67 @@
++README.md  2026-01-27
++
++https://zakzakst.github.io/practice-ant-design/
++
++概要
++
++様々なUI/フォーム機能、アニメーション、データ可視化などの技術的な実装例を集約した学習・プラクティ
++ス⽤のデモアプリケーションです。
++
++使⽤技術
++
++フレームワーク・コア
++
++        Next.js 14
++        React 18
++        TypeScript
++        Tailwind CSS
++
++UI コンポーネント
++
++        Ant Design (antd)
++        shadcn/ui (Radix UI)
++        Lucide React
++
++フォーム・バリデーション
++
++        React Hook Form
++        Yup
++        Zod
++
++データ処理・API
++
++        SWR
++        Axios
++        Orval
++
++アニメーション・ビジュアル
++
++        Motion
++        anime.js
++        Lottie
++        React Flip Toolkit
++        Konva
++
++その他
++
++        TanStack React Table
++        dnd-kit
++        react-calendar
++        FullCalendar
++        @xyflow/react
++
++                                                                                  1/2
++README.md                               2026-01-27
++
++          react-markdown
++          date-fns
++
++ 起動⽅法
++
++ 必要な環境
++
++          Node.js
++          npm / yarn / pnpm / bun
++
++                                   2/2
++
+
+```
+
+### tasks/old/simple-git1.ts
+
+```diff
+
```

### tasks/old/simple-git1.ts

```diff
diff --git a/tasks/old/simple-git1.ts b/tasks/old/simple-git1.ts
+new file mode 100644
+index 0000000..96b6fb7
+--- /dev/null
++++ b/tasks/old/simple-git1.ts
+@@ -0,0 +1,20 @@
++import simpleGit from "simple-git";
++
++const git = simpleGit();
++
++async function main() {
++  // const status = await git.status();
++  // console.log(status);
++
++  // 現在ブランチ
++  const branch = await git.branch();
++  console.log("current branch:", branch.current);
++
++  // developとの差分
++  const diff = await git.diff(["develop"]);
++
++  console.log("===== git diff develop =====");
++  console.log(diff);
++}
++
++main();
+
+```
+
+### tasks/simple-git.ts
+
+```diff
+
```

### tasks/simple-git.ts

```diff
diff --git a/tasks/simple-git.ts b/tasks/simple-git.ts
+new file mode 100644
+index 0000000..4cb61a3
+--- /dev/null
++++ b/tasks/simple-git.ts
+@@ -0,0 +1,78 @@
++import simpleGit from "simple-git";
++import fs from "fs";
++
++const git = simpleGit();
++
++type DiffFile = {
++  file: string;
++  diff: string;
++};
++
++const parseDiff = (diffText: string): DiffFile[] => {
++  const blocks = diffText.split("
+```
+
+### tsconfig.json
+
+```diff
+
```

### tsconfig.json

```diff
diff --git a/tsconfig.json b/tsconfig.json
+index 3a13f90..4e424f9 100644
+--- a/tsconfig.json
++++ b/tsconfig.json
+@@ -1,7 +1,11 @@
+ {
+   "compilerOptions": {
+     "target": "ES2017",
+-    "lib": ["dom", "dom.iterable", "esnext"],
++    "lib": [
++      "dom",
++      "dom.iterable",
++      "esnext"
++    ],
+     "allowJs": true,
+     "skipLibCheck": true,
+     "strict": true,
+@@ -19,7 +23,9 @@
+       }
+     ],
+     "paths": {
+-      "@/*": ["./*"]
++      "@/*": [
++        "./*"
++      ]
+     }
+   },
+   "include": [
+@@ -28,7 +34,10 @@
+     "**/*.tsx",
+     ".next/types/**/*.ts",
+     ".next/dev/types/**/*.ts",
+-    "**/*.mts"
++    "**/*.mts",
++    ".next/dev/dev/types/**/*.ts"
+   ],
+-  "exclude": ["node_modules"]
++  "exclude": [
++    "node_modules"
++  ]
+ }
+
+```
+
+## Please review
+
+- バグの可能性
+- 設計の違和感
+- 可読性改善
+- TypeScript観点の指摘

```

### memo.md

```diff
diff --git a/memo.md b/memo.md
index 832d1e8..37f49ec 100644
--- a/memo.md
+++ b/memo.md
@@ -12,6 +12,7 @@
 - useEffectとuseStateで描画タイミングをコントロールする必要があった
   - https://github.com/diegomura/react-pdf/issues/2599
 - propsなどでPDFコンポーネントに値を渡せば、フォーム入力内容を反映するなどの操作もできる
+- ImageはSVGと外部画像が上手く表示できなかった
 
 ### cleave.js
 
@@ -32,3 +33,23 @@
 - https://zenn.dev/shouta0715/articles/6823ea33cd3778
 - bash: `LOGGER_ENV=production npm run dev`
 - powershell: `$env:LOGGER_ENV="production"; npm run dev`
+
+### GitHub Copilot SDK
+
+- 下記を参考に試したが、上手くいかなかった。copilotの認証・ライセンスが関わっている？
+  - https://rutla.jp/blog/8544/
+  - https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
+- 利用にはGitHub Copilotサブスクリプションまたは開発者自身のAPIキーが必要
+  - https://138io.com/archives/9081
+
+### simple-git
+
+- https://www.npmjs.com/package/simple-git
+- 残作業
+  - テンプレートファイルを読み込んで所定の箇所にdiffの情報を流し込む
+    - ⇒ プロンプトを出力するのでなく、diffを出力し、それをcopilot側で読み込んでもらう方針に変更
+  - テンプレートファイルをコマンドラインのオプションで指定できるようにする
+    - ⇒ copilot側でファイル読み込み後の処理を変えたpromptを用意する方針に変更
+  - 出力対象外のファイル（package-lock.json など）を指定できるようにする
+  - 出力ファイルの先をvscodeのcopilot連携できるディレクトリに変更する
+    - ⇒ プロンプトを出力するのでなく、diffを出力し、それをcopilot側で読み込んでもらう方針に変更

```

### package.json

```diff
diff --git a/package.json b/package.json
index e1da3f8..bf20587 100644
--- a/package.json
+++ b/package.json
@@ -6,7 +6,8 @@
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
-    "lint": "eslint"
+    "lint": "eslint",
+    "develop-diff": "tsx tasks/develop-diff/index.ts"
   },
   "dependencies": {
     "@react-pdf/renderer": "^4.3.2",
@@ -27,7 +28,9 @@
     "@types/react-dom": "^19",
     "eslint": "^9",
     "eslint-config-next": "16.1.6",
+    "simple-git": "^3.30.0",
     "tailwindcss": "^4",
+    "tsx": "^4.21.0",
     "typescript": "^5"
   }
 }

```

### public/bg.png

```diff
diff --git a/public/bg.png b/public/bg.png
new file mode 100644
index 0000000..fd64654
Binary files /dev/null and b/public/bg.png differ

```

### tasks/develop-diff/diff.md

```diff
diff --git a/tasks/develop-diff/diff.md b/tasks/develop-diff/diff.md
new file mode 100644
index 0000000..5b537d9
--- /dev/null
+++ b/tasks/develop-diff/diff.md
@@ -0,0 +1,4799 @@
+
+### .github/agents/review.agent.md
+
+```diff
+
```

### .github/agents/review.agent.md

```diff
diff --git a/.github/agents/review.agent.md b/.github/agents/review.agent.md
+new file mode 100644
+index 0000000..0e83935
+--- /dev/null
++++ b/.github/agents/review.agent.md
+@@ -0,0 +1,26 @@
++---
++name: review
++---
++
++## 重要: 以下の3つのステップを必ず順番に実行してください
++
++### ステップ1: npm run review-diff を実行
++
++- 必ず実行してください（スキップ厳禁）
++- 実行完了を確認するまで次に進まないでください
++
++### ステップ2: diff.md を読み込み
++
++- ステップ1完了後、必ず `tasks/develop-diff/diff.md` を read_file で読み込んでください
++- ファイル内容を完全に確認するまで次に進まないでください
++
++### ステップ3: レビューと改善点の出力
++
++- ステップ2完了後、読み込んだ内容をレビューしてください
++- 以下の項目について改善点を提示してください：
++  1. コード品質の問題
++  2. ファイル構造の改善点
++  3. ベストプラクティス違反
++  4. 重複コード
++  5. 命名規則の改善
++- 改善点をチャット上に明確に出力してください
+
+```
+
+### .github/prompts/review.prompt.md
+
+```diff
+
```

### .github/prompts/review.prompt.md

```diff
diff --git a/.github/prompts/review.prompt.md b/.github/prompts/review.prompt.md
+new file mode 100644
+index 0000000..af3947e
+--- /dev/null
++++ b/.github/prompts/review.prompt.md
+@@ -0,0 +1,4 @@
++---
++name: review
++agent: review
++---
+
+```
+
+### app/pdf2/parts/Parts2.tsx
+
+```diff
+
```

### app/pdf2/parts/Parts2.tsx

```diff
diff --git a/app/pdf2/parts/Parts2.tsx b/app/pdf2/parts/Parts2.tsx
+index 151faf3..025ddd8 100644
+--- a/app/pdf2/parts/Parts2.tsx
++++ b/app/pdf2/parts/Parts2.tsx
+@@ -1,5 +1,12 @@
+ "use client";
+-import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
++import {
++  Document,
++  Page,
++  Text,
++  View,
++  Image,
++  StyleSheet,
++} from "@react-pdf/renderer";
+ 
+ const styles = StyleSheet.create({
+   page: {
+@@ -25,6 +32,12 @@ const styles = StyleSheet.create({
+     borderWidth: 1,
+     padding: 12,
+   },
++  image: {
++    width: 30,
++    height: 30,
++    display: "flex",
++    backgroundColor: "#f00",
++  },
+ });
+ 
+ export const Parts = () => {
+@@ -53,7 +66,14 @@ export const Parts = () => {
+             <Text style={styles.label}>名前:</Text>
+             <Text style={styles.value}>山田太郎</Text>
+           </View>
+-
++          {/* <Image src="/next.svg" style={{ width: 120, marginBottom: 16 }} /> */}
++          <Image src="/bg.png" style={{ width: 120, marginBottom: 16 }} />
++          <View style={{ backgroundColor: "#000", height: 40 }}>
++            {/* <Image
++              src="https://placehold.jp/150x150.png"
++              // style={styles.image}
++            /> */}
++          </View>
+           <View style={styles.row}>
+             <Text style={styles.label}>日付:</Text>
+             <Text style={styles.value}>2026/01/31</Text>
+
+```
+
+### copilot-prompt.md
+
+```diff
+
```

### copilot-prompt.md

```diff
diff --git a/copilot-prompt.md b/copilot-prompt.md
+new file mode 100644
+index 0000000..23faf2d
+--- /dev/null
++++ b/copilot-prompt.md
+@@ -0,0 +1,3587 @@
++# PR Review Request
++
++## Target branch
++main
++
++## Changed files
++
++### .env
++
++```diff
++
+```
+
+### .env
+
+```diff
+
```

### .env

```diff
diff --git a/.env b/.env
++new file mode 100644
++index 0000000..1df2fe5
++--- /dev/null
+++++ b/.env
++@@ -0,0 +1,6 @@
+++##########
+++# log4jsの挙動確認の記録を残すために.gitignoreから外している。値を追加する場合は注意する
+++##########
+++
+++LOGGER_ENV=production
+++# LOGGER_ENV=develop
++\ No newline at end of file
++
++```
++
++### .gitignore
++
++```diff
++
+```
+
+### .gitignore
+
+```diff
+
```

### .gitignore

```diff
diff --git a/.gitignore b/.gitignore
++index 5ef6a52..4558657 100644
++--- a/.gitignore
+++++ b/.gitignore
++@@ -31,7 +31,7 @@ yarn-error.log*
++ .pnpm-debug.log*
++ 
++ # env files (can opt-in for committing if needed)
++-.env*
+++# .env*
++ 
++ # vercel
++ .vercel
++@@ -39,3 +39,5 @@ yarn-error.log*
++ # typescript
++ *.tsbuildinfo
++ next-env.d.ts
+++
+++logs/*.log
++\ No newline at end of file
++
++```
++
++### app/_sample/page.tsx
++
++```diff
++
+```
+
+### app/_sample/page.tsx
+
+```diff
+
```

### app/_sample/page.tsx

```diff
diff --git a/app/_sample/page.tsx b/app/_sample/page.tsx
++new file mode 100644
++index 0000000..b1a7106
++--- /dev/null
+++++ b/app/_sample/page.tsx
++@@ -0,0 +1,11 @@
+++import { Parts } from "./parts/Parts1";
+++
+++const Page = () => {
+++  return (
+++    <div className="p-4">
+++      <Parts />
+++    </div>
+++  );
+++};
+++
+++export default Page;
++
++```
++
++### app/_sample/parts/Parts1.tsx
++
++```diff
++
+```
+
+### app/_sample/parts/Parts1.tsx
+
+```diff
+
```

### app/_sample/parts/Parts1.tsx

```diff
diff --git a/app/_sample/parts/Parts1.tsx b/app/_sample/parts/Parts1.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/_sample/parts/Parts1.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/_sample/parts/_Parts.tsx
++
++```diff
++
+```
+
+### app/_sample/parts/_Parts.tsx
+
+```diff
+
```

### app/_sample/parts/_Parts.tsx

```diff
diff --git a/app/_sample/parts/_Parts.tsx b/app/_sample/parts/_Parts.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/_sample/parts/_Parts.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/api/log4js/route.ts
++
++```diff
++
+```
+
+### app/api/log4js/route.ts
+
+```diff
+
```

### app/api/log4js/route.ts

```diff
diff --git a/app/api/log4js/route.ts b/app/api/log4js/route.ts
++new file mode 100644
++index 0000000..1b6b46e
++--- /dev/null
+++++ b/app/api/log4js/route.ts
++@@ -0,0 +1,24 @@
+++import { NextResponse } from "next/server";
+++import { logger, appLogger } from "@/lib/logger";
+++
+++export const runtime = "nodejs";
+++
+++// export async function GET() {
+++//   logger.debug("debug log");
+++//   logger.info("info log");
+++//   logger.warn("warn log");
+++//   logger.error("error log");
+++//   return NextResponse.json({ ok: true });
+++// }
+++
+++export async function GET() {
+++  const userId = "user-123";
+++  appLogger.info("API called", { userId });
+++  try {
+++    throw new Error("something failed");
+++  } catch (err) {
+++    appLogger.debug("LOGGER_ENV=productionだと出力されない");
+++    appLogger.error("Unexpected error", err);
+++  }
+++  return NextResponse.json({ ok: true });
+++}
++
++```
++
++### app/cleave/page.tsx
++
++```diff
++
+```
+
+### app/cleave/page.tsx
+
+```diff
+
```

### app/cleave/page.tsx

```diff
diff --git a/app/cleave/page.tsx b/app/cleave/page.tsx
++new file mode 100644
++index 0000000..d3064c9
++--- /dev/null
+++++ b/app/cleave/page.tsx
++@@ -0,0 +1,13 @@
+++// import { Parts } from "./parts/Parts1";
+++// import { Parts } from "./parts/Parts2";
+++import { Parts } from "./parts/Parts3";
+++
+++const Page = () => {
+++  return (
+++    <div className="p-4">
+++      <Parts />
+++    </div>
+++  );
+++};
+++
+++export default Page;
++
++```
++
++### app/cleave/parts/Parts1.tsx
++
++```diff
++
+```
+
+### app/cleave/parts/Parts1.tsx
+
+```diff
+
```

### app/cleave/parts/Parts1.tsx

```diff
diff --git a/app/cleave/parts/Parts1.tsx b/app/cleave/parts/Parts1.tsx
++new file mode 100644
++index 0000000..05513d7
++--- /dev/null
+++++ b/app/cleave/parts/Parts1.tsx
++@@ -0,0 +1,18 @@
+++"use client";
+++
+++import Cleave from "cleave.js/react";
+++
+++export const Parts = () => {
+++  return (
+++    <div>
+++      <h1>cleave.js 練習</h1>
+++
+++      <Cleave
+++        placeholder="カード番号"
+++        options={{
+++          creditCard: true,
+++        }}
+++      />
+++    </div>
+++  );
+++};
++
++```
++
++### app/cleave/parts/Parts2.tsx
++
++```diff
++
+```
+
+### app/cleave/parts/Parts2.tsx
+
+```diff
+
```

### app/cleave/parts/Parts2.tsx

```diff
diff --git a/app/cleave/parts/Parts2.tsx b/app/cleave/parts/Parts2.tsx
++new file mode 100644
++index 0000000..e0f9179
++--- /dev/null
+++++ b/app/cleave/parts/Parts2.tsx
++@@ -0,0 +1,34 @@
+++"use client";
+++
+++import { useState } from "react";
+++import Cleave from "cleave.js/react";
+++
+++export const Parts = () => {
+++  const [formatted, setFormatted] = useState("");
+++  const [raw, setRaw] = useState("");
+++
+++  return (
+++    <div>
+++      <h1>cleave.js 練習</h1>
+++
+++      <Cleave
+++        placeholder="カード番号"
+++        options={{
+++          creditCard: true,
+++        }}
+++        onChange={(e) => {
+++          setFormatted(e.target.value);
+++
+++          // cleave 独自拡張
+++          const rawValue = (e.target as any).rawValue;
+++          setRaw(rawValue);
+++        }}
+++      />
+++
+++      <div className="mt-4">
+++        <p>formatted: {formatted}</p>
+++        <p>raw: {raw}</p>
+++      </div>
+++    </div>
+++  );
+++};
++
++```
++
++### app/cleave/parts/Parts3.tsx
++
++```diff
++
+```
+
+### app/cleave/parts/Parts3.tsx
+
+```diff
+
```

### app/cleave/parts/Parts3.tsx

```diff
diff --git a/app/cleave/parts/Parts3.tsx b/app/cleave/parts/Parts3.tsx
++new file mode 100644
++index 0000000..362b5b7
++--- /dev/null
+++++ b/app/cleave/parts/Parts3.tsx
++@@ -0,0 +1,58 @@
+++"use client";
+++
+++import { useState } from "react";
+++import Cleave from "cleave.js/react";
+++
+++export const Parts = () => {
+++  const [price, setPrice] = useState("");
+++  const [date, setDate] = useState("");
+++  const [memberId, setMemberId] = useState("");
+++
+++  return (
+++    <div>
+++      <h1>cleave.js Step3</h1>
+++
+++      {/* 金額 */}
+++      <div>
+++        <h3>金額</h3>
+++        <Cleave
+++          placeholder="金額"
+++          options={{
+++            numeral: true,
+++            numeralThousandsGroupStyle: "thousand",
+++          }}
+++          onChange={(e) => setPrice((e.target as any).rawValue)}
+++        />
+++        <p>raw: {price}</p>
+++      </div>
+++
+++      {/* 日付 */}
+++      <div className="mt-4">
+++        <h3>日付</h3>
+++        <Cleave
+++          placeholder="YYYY/MM/DD"
+++          options={{
+++            date: true,
+++            datePattern: ["Y", "m", "d"],
+++          }}
+++          onChange={(e) => setDate((e.target as any).rawValue)}
+++        />
+++        <p>raw: {date}</p>
+++      </div>
+++
+++      {/* カスタム */}
+++      <div className="mt-4">
+++        <h3>会員ID</h3>
+++        <Cleave
+++          placeholder="ABC-1234-56789"
+++          options={{
+++            blocks: [3, 4, 5],
+++            uppercase: true,
+++          }}
+++          onChange={(e) => setMemberId((e.target as any).rawValue)}
+++        />
+++        <p>raw: {memberId}</p>
+++      </div>
+++    </div>
+++  );
+++};
++
++```
++
++### app/cleave/parts/_Parts.tsx
++
++```diff
++
+```
+
+### app/cleave/parts/_Parts.tsx
+
+```diff
+
```

### app/cleave/parts/_Parts.tsx

```diff
diff --git a/app/cleave/parts/_Parts.tsx b/app/cleave/parts/_Parts.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/cleave/parts/_Parts.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/console/page.tsx
++
++```diff
++
+```
+
+### app/console/page.tsx
+
+```diff
+
```

### app/console/page.tsx

```diff
diff --git a/app/console/page.tsx b/app/console/page.tsx
++new file mode 100644
++index 0000000..b1a7106
++--- /dev/null
+++++ b/app/console/page.tsx
++@@ -0,0 +1,11 @@
+++import { Parts } from "./parts/Parts1";
+++
+++const Page = () => {
+++  return (
+++    <div className="p-4">
+++      <Parts />
+++    </div>
+++  );
+++};
+++
+++export default Page;
++
++```
++
++### app/console/parts/Parts1.tsx
++
++```diff
++
+```
+
+### app/console/parts/Parts1.tsx
+
+```diff
+
```

### app/console/parts/Parts1.tsx

```diff
diff --git a/app/console/parts/Parts1.tsx b/app/console/parts/Parts1.tsx
++new file mode 100644
++index 0000000..d7c8c95
++--- /dev/null
+++++ b/app/console/parts/Parts1.tsx
++@@ -0,0 +1,75 @@
+++"use client";
+++
+++import { useEffect } from "react";
+++
+++export const Parts = () => {
+++  console.count("Function call count");
+++
+++  useEffect(() => {
+++    console.log(
+++      "%cスタイルを設定",
+++      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
+++    );
+++
+++    console.log(
+++      "%c複数の箇所%cに%cスタイル%cを設定",
+++      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
+++      "",
+++      "color:green;",
+++      "",
+++    );
+++
+++    console.table(["Qiita", "blog1", "blog2"]);
+++
+++    console.table({
+++      Date: new Date().getFullYear(),
+++      platform: "Qiita",
+++      post1: "blog1",
+++    });
+++
+++    // consoleをグルーピングする
+++    console.group("ユーザー情報");
+++    console.log("Name: John Doe");
+++    console.warn("Warning: Incomplete user information");
+++    // console.error("Error: Unable to fetch user data");
+++    console.groupEnd();
+++
+++    // consoleをグルーピングする（閉じた状態で色付き）
+++    console.groupCollapsed(
+++      "%cユーザー情報",
+++      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
+++    );
+++    console.log("Name: John Doe");
+++    console.warn("Warning: Incomplete user information");
+++    console.groupEnd();
+++
+++    const user = {
+++      name: "Alice",
+++      age: 25,
+++      address: {
+++        city: "Tokyo",
+++        country: "Japan",
+++      },
+++    };
+++    console.dir(user);
+++
+++    // 時間の計測
+++    console.time("time");
+++    const qiita = function () {
+++      console.log("Qiita");
+++    };
+++    qiita();
+++    console.timeEnd("time");
+++
+++    // 第一引数に渡された値がfalseの場合エラーメッセージを出力、trueの場合は何も表示しない
+++    let value = 10;
+++    console.assert(value > 0, "値は0より大きい必要があります");
+++    console.assert(value < 0, "値は0より小さい必要があります");
+++
+++    // console.clear();
+++
+++    console.trace("スタックトレースを表示");
+++  }, []);
+++
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/console/parts/_Parts.tsx
++
++```diff
++
+```
+
+### app/console/parts/_Parts.tsx
+
+```diff
+
```

### app/console/parts/_Parts.tsx

```diff
diff --git a/app/console/parts/_Parts.tsx b/app/console/parts/_Parts.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/console/parts/_Parts.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/google-libphonenumber/page.tsx
++
++```diff
++
+```
+
+### app/google-libphonenumber/page.tsx
+
+```diff
+
```

### app/google-libphonenumber/page.tsx

```diff
diff --git a/app/google-libphonenumber/page.tsx b/app/google-libphonenumber/page.tsx
++new file mode 100644
++index 0000000..fc65830
++--- /dev/null
+++++ b/app/google-libphonenumber/page.tsx
++@@ -0,0 +1,12 @@
+++// import { Parts } from "./parts/Parts1";
+++import { Parts } from "./parts/Parts2";
+++
+++const Page = () => {
+++  return (
+++    <div className="p-4">
+++      <Parts />
+++    </div>
+++  );
+++};
+++
+++export default Page;
++
++```
++
++### app/google-libphonenumber/parts/Parts1.tsx
++
++```diff
++
+```
+
+### app/google-libphonenumber/parts/Parts1.tsx
+
+```diff
+
```

### app/google-libphonenumber/parts/Parts1.tsx

```diff
diff --git a/app/google-libphonenumber/parts/Parts1.tsx b/app/google-libphonenumber/parts/Parts1.tsx
++new file mode 100644
++index 0000000..7fb615f
++--- /dev/null
+++++ b/app/google-libphonenumber/parts/Parts1.tsx
++@@ -0,0 +1,40 @@
+++"use client";
+++
+++import { useState } from "react";
+++import { PhoneNumberUtil } from "google-libphonenumber";
+++
+++const phoneUtil = PhoneNumberUtil.getInstance();
+++
+++export const Parts = () => {
+++  const [value, setValue] = useState("");
+++  const [isValid, setIsValid] = useState<boolean | null>(null);
+++
+++  const handleCheck = () => {
+++    try {
+++      const number = phoneUtil.parse(value, "JP");
+++      const result = phoneUtil.isValidNumber(number);
+++      setIsValid(result);
+++    } catch {
+++      // parse に失敗した場合（文字列など）
+++      setIsValid(false);
+++    }
+++  };
+++
+++  return (
+++    <div>
+++      <h1>電話番号チェック</h1>
+++
+++      <input
+++        value={value}
+++        onChange={(e) => setValue(e.target.value)}
+++        placeholder="08012345678"
+++      />
+++
+++      <button onClick={handleCheck}>チェック</button>
+++
+++      {isValid !== null && (
+++        <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
+++      )}
+++    </div>
+++  );
+++};
++
++```
++
++### app/google-libphonenumber/parts/Parts2.tsx
++
++```diff
++
+```
+
+### app/google-libphonenumber/parts/Parts2.tsx
+
+```diff
+
```

### app/google-libphonenumber/parts/Parts2.tsx

```diff
diff --git a/app/google-libphonenumber/parts/Parts2.tsx b/app/google-libphonenumber/parts/Parts2.tsx
++new file mode 100644
++index 0000000..d5c5943
++--- /dev/null
+++++ b/app/google-libphonenumber/parts/Parts2.tsx
++@@ -0,0 +1,57 @@
+++"use client";
+++
+++import { useState } from "react";
+++import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";
+++
+++const phoneUtil = PhoneNumberUtil.getInstance();
+++
+++export const Parts = () => {
+++  const [value, setValue] = useState("");
+++  const [formatted, setFormatted] = useState("");
+++  const [isValid, setIsValid] = useState<boolean | null>(null);
+++
+++  const handleCheck = () => {
+++    try {
+++      const number = phoneUtil.parse(value, "JP");
+++      const result = phoneUtil.isValidNumber(number);
+++      setIsValid(result);
+++      if (result) {
+++        const formattedNumber = phoneUtil.format(
+++          number,
+++          // PhoneNumberFormat.NATIONAL,
+++          // PhoneNumberFormat.INTERNATIONAL,
+++          PhoneNumberFormat.E164,
+++        );
+++
+++        setFormatted(formattedNumber);
+++      } else {
+++        setFormatted("");
+++      }
+++    } catch {
+++      // parse に失敗した場合（文字列など）
+++      setIsValid(false);
+++      setFormatted("");
+++    }
+++  };
+++
+++  return (
+++    <div>
+++      <h1>電話番号チェック + フォーマット</h1>
+++
+++      <input
+++        value={value}
+++        onChange={(e) => setValue(e.target.value)}
+++        placeholder="08012345678"
+++      />
+++
+++      <button onClick={handleCheck}>チェック</button>
+++
+++      {isValid !== null && (
+++        <>
+++          <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
+++          {formatted && <p>フォーマット結果: {formatted}</p>}
+++        </>
+++      )}
+++    </div>
+++  );
+++};
++
++```
++
++### app/google-libphonenumber/parts/_Parts0.tsx
++
++```diff
++
+```
+
+### app/google-libphonenumber/parts/_Parts0.tsx
+
+```diff
+
```

### app/google-libphonenumber/parts/_Parts0.tsx

```diff
diff --git a/app/google-libphonenumber/parts/_Parts0.tsx b/app/google-libphonenumber/parts/_Parts0.tsx
++new file mode 100644
++index 0000000..92a1591
++--- /dev/null
+++++ b/app/google-libphonenumber/parts/_Parts0.tsx
++@@ -0,0 +1,3 @@
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/pdf/page.tsx
++
++```diff
++
+```
+
+### app/pdf/page.tsx
+
+```diff
+
```

### app/pdf/page.tsx

```diff
diff --git a/app/pdf/page.tsx b/app/pdf/page.tsx
++new file mode 100644
++index 0000000..a5af43d
++--- /dev/null
+++++ b/app/pdf/page.tsx
++@@ -0,0 +1,35 @@
+++'use client';
+++import { useState } from 'react';
+++import { Document, Page as PdfPage, pdfjs } from 'react-pdf';
+++
+++import 'react-pdf/dist/Page/AnnotationLayer.css';
+++import 'react-pdf/dist/Page/TextLayer.css';
+++
+++pdfjs.GlobalWorkerOptions.workerSrc = new URL(
+++  'pdfjs-dist/build/pdf.worker.min.mjs',
+++  import.meta.url,
+++).toString();
+++
+++const Page = () => {
+++  const [numPages, setNumPages] = useState<number>();
+++  const [pageNumber, setPageNumber] = useState<number>(1);
+++
+++  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
+++    setNumPages(numPages);
+++  }
+++
+++  return (
+++    <div>
+++      <Document file="/pdf/README.pdf" onLoadSuccess={onDocumentLoadSuccess}>
+++        <PdfPage pageNumber={pageNumber} />
+++      </Document>
+++      <p>
+++        Page {pageNumber} of {numPages}
+++      </p>
+++      <button type='button' onClick={() => setPageNumber(1)}>1</button>
+++      <button type='button' onClick={() => setPageNumber(2)}>2</button>
+++    </div>
+++  );
+++}
+++
+++export default Page;
++\ No newline at end of file
++
++```
++
++### app/pdf2/page.tsx
++
++```diff
++
+```
+
+### app/pdf2/page.tsx
+
+```diff
+
```

### app/pdf2/page.tsx

```diff
diff --git a/app/pdf2/page.tsx b/app/pdf2/page.tsx
++new file mode 100644
++index 0000000..5a41fe3
++--- /dev/null
+++++ b/app/pdf2/page.tsx
++@@ -0,0 +1,47 @@
+++"use client";
+++import { useEffect, useState } from "react";
+++import { PDFViewer, Font, PDFDownloadLink } from "@react-pdf/renderer";
+++// import { Parts } from "./parts/Parts1";
+++import { Parts } from "./parts/Parts2";
+++
+++Font.register({
+++  family: "NotoSansJP",
+++  fonts: [
+++    {
+++      src: "/fonts/NotoSansJP-Regular.ttf",
+++    },
+++    {
+++      src: "/fonts/NotoSansJP-Bold.ttf",
+++      fontWeight: "bold",
+++    },
+++  ],
+++});
+++
+++const Page = () => {
+++  const [loaded, setLoaded] = useState(false);
+++
+++  useEffect(() => {
+++    setLoaded(true);
+++  }, []);
+++
+++  return (
+++    <div className="p-4">
+++      <div className="h-screen">
+++        {loaded && (
+++          <>
+++            <PDFViewer width="100%" height="100%">
+++              <Parts />
+++            </PDFViewer>
+++            <PDFDownloadLink document={<Parts />} fileName={"parts.pdf"}>
+++              {({ loading }) =>
+++                loading ? "PDF生成中..." : "PDFをダウンロード"
+++              }
+++            </PDFDownloadLink>
+++          </>
+++        )}
+++      </div>
+++    </div>
+++  );
+++};
+++
+++export default Page;
++
++```
++
++### app/pdf2/parts/Parts1.tsx
++
++```diff
++
+```
+
+### app/pdf2/parts/Parts1.tsx
+
+```diff
+
```

### app/pdf2/parts/Parts1.tsx

```diff
diff --git a/app/pdf2/parts/Parts1.tsx b/app/pdf2/parts/Parts1.tsx
++new file mode 100644
++index 0000000..83a7353
++--- /dev/null
+++++ b/app/pdf2/parts/Parts1.tsx
++@@ -0,0 +1,14 @@
+++"use client";
+++import { Document, Page, Text, View } from "@react-pdf/renderer";
+++
+++export const Parts = () => {
+++  return (
+++    <Document>
+++      <Page size="A4">
+++        <View>
+++          <Text>Hello PDF 👋</Text>
+++        </View>
+++      </Page>
+++    </Document>
+++  );
+++};
++
++```
++
++### app/pdf2/parts/Parts2.tsx
++
++```diff
++
+```
+
+### app/pdf2/parts/Parts2.tsx
+
+```diff
+
```

### app/pdf2/parts/Parts2.tsx

```diff
diff --git a/app/pdf2/parts/Parts2.tsx b/app/pdf2/parts/Parts2.tsx
++new file mode 100644
++index 0000000..151faf3
++--- /dev/null
+++++ b/app/pdf2/parts/Parts2.tsx
++@@ -0,0 +1,65 @@
+++"use client";
+++import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
+++
+++const styles = StyleSheet.create({
+++  page: {
+++    padding: 40,
+++    fontFamily: "NotoSansJP",
+++  },
+++  title: {
+++    fontSize: 24,
+++    marginBottom: 20,
+++  },
+++  row: {
+++    flexDirection: "row",
+++    marginBottom: 8,
+++  },
+++  label: {
+++    width: 80,
+++    fontSize: 12,
+++  },
+++  value: {
+++    fontSize: 12,
+++  },
+++  box: {
+++    borderWidth: 1,
+++    padding: 12,
+++  },
+++});
+++
+++export const Parts = () => {
+++  return (
+++    <Document>
+++      <Page size="A4" style={styles.page}>
+++        <Text style={styles.title}>請求書サンプル</Text>
+++
+++        <View style={styles.box}>
+++          <View style={styles.row}>
+++            <Text style={styles.label}>名前:</Text>
+++            <Text style={styles.value}>山田太郎</Text>
+++          </View>
+++
+++          <View style={styles.row}>
+++            <Text style={styles.label}>日付:</Text>
+++            <Text style={styles.value}>2026/01/31</Text>
+++          </View>
+++        </View>
+++      </Page>
+++      <Page size="A4" style={styles.page}>
+++        <Text style={styles.title}>請求書サンプル2</Text>
+++
+++        <View style={styles.box}>
+++          <View style={styles.row}>
+++            <Text style={styles.label}>名前:</Text>
+++            <Text style={styles.value}>山田太郎</Text>
+++          </View>
+++
+++          <View style={styles.row}>
+++            <Text style={styles.label}>日付:</Text>
+++            <Text style={styles.value}>2026/01/31</Text>
+++          </View>
+++        </View>
+++      </Page>
+++    </Document>
+++  );
+++};
++
++```
++
++### app/pdf2/parts/_Parts.tsx
++
++```diff
++
+```
+
+### app/pdf2/parts/_Parts.tsx
+
+```diff
+
```

### app/pdf2/parts/_Parts.tsx

```diff
diff --git a/app/pdf2/parts/_Parts.tsx b/app/pdf2/parts/_Parts.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/pdf2/parts/_Parts.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/popover/page.tsx
++
++```diff
++
+```
+
+### app/popover/page.tsx
+
+```diff
+
```

### app/popover/page.tsx

```diff
diff --git a/app/popover/page.tsx b/app/popover/page.tsx
++new file mode 100644
++index 0000000..b1a7106
++--- /dev/null
+++++ b/app/popover/page.tsx
++@@ -0,0 +1,11 @@
+++import { Parts } from "./parts/Parts1";
+++
+++const Page = () => {
+++  return (
+++    <div className="p-4">
+++      <Parts />
+++    </div>
+++  );
+++};
+++
+++export default Page;
++
++```
++
++### app/popover/parts/Parts1.tsx
++
++```diff
++
+```
+
+### app/popover/parts/Parts1.tsx
+
+```diff
+
```

### app/popover/parts/Parts1.tsx

```diff
diff --git a/app/popover/parts/Parts1.tsx b/app/popover/parts/Parts1.tsx
++new file mode 100644
++index 0000000..ae90f5c
++--- /dev/null
+++++ b/app/popover/parts/Parts1.tsx
++@@ -0,0 +1,29 @@
+++"use client";
+++
+++import { useId } from "react";
+++import styles from "./styles.module.css";
+++
+++export const Parts = () => {
+++  const id = useId();
+++
+++  return (
+++    <div>
+++      <button
+++        type="button"
+++        popoverTarget={id}
+++        className="bg-amber-800 text-white p-4 ml-75 inline-block"
+++        style={{ anchorName: `--${id}` }}
+++      >
+++        開く
+++      </button>
+++      <div
+++        id={id}
+++        popover="auto"
+++        className={styles.popover}
+++        style={{ positionAnchor: `--${id}` }}
+++      >
+++        <p>ポップオーバーの内容</p>
+++      </div>
+++    </div>
+++  );
+++};
++
++```
++
++### app/popover/parts/_Parts.tsx
++
++```diff
++
+```
+
+### app/popover/parts/_Parts.tsx
+
+```diff
+
```

### app/popover/parts/_Parts.tsx

```diff
diff --git a/app/popover/parts/_Parts.tsx b/app/popover/parts/_Parts.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/popover/parts/_Parts.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/popover/parts/styles.module.css
++
++```diff
++
+```
+
+### app/popover/parts/styles.module.css
+
+```diff
+
```

### app/popover/parts/styles.module.css

```diff
diff --git a/app/popover/parts/styles.module.css b/app/popover/parts/styles.module.css
++new file mode 100644
++index 0000000..6287216
++--- /dev/null
+++++ b/app/popover/parts/styles.module.css
++@@ -0,0 +1,5 @@
+++.popover {
+++  top: anchor(bottom);
+++  left: anchor(left);
+++  position-try-fallbacks: flip-inline;
+++}
++
++```
++
++### lib/logger.ts
++
++```diff
++
+```
+
+### lib/logger.ts
+
+```diff
+
```

### lib/logger.ts

```diff
diff --git a/lib/logger.ts b/lib/logger.ts
++new file mode 100644
++index 0000000..7c02716
++--- /dev/null
+++++ b/lib/logger.ts
++@@ -0,0 +1,31 @@
+++import "server-only";
+++
+++import log4js from "log4js";
+++import path from "path";
+++
+++const logPath = path.join(process.cwd(), "logs/app.log");
+++// NOTE: 通常はNODE_ENVを利用する。Next.jsで制御されているため、挙動確認の目的でLOGGER_ENVを利用している
+++const isProd = process.env.LOGGER_ENV === "production";
+++const level = isProd ? "info" : "debug";
+++
+++console.log(level);
+++
+++log4js.configure({
+++  appenders: {
+++    console: { type: "stdout" },
+++    file: {
+++      type: "file",
+++      filename: logPath,
+++      maxLogSize: 10485760, // 10MB
+++      backups: 3,
+++      compress: true,
+++    },
+++  },
+++  categories: {
+++    default: { appenders: ["console"], level },
+++    app: { appenders: ["console", "file"], level },
+++  },
+++});
+++
+++export const logger = log4js.getLogger();
+++export const appLogger = log4js.getLogger("app");
++
++```
++
++### logs/.gitkeep
++
++```diff
++
+```
+
+### logs/.gitkeep
+
+```diff
+
```

### logs/.gitkeep

```diff
diff --git a/logs/.gitkeep b/logs/.gitkeep
++new file mode 100644
++index 0000000..e69de29
++
++```
++
++### memo.md
++
++```diff
++
+```
+
+### memo.md
+
+```diff
+
```

### memo.md

```diff
diff --git a/memo.md b/memo.md
++new file mode 100644
++index 0000000..ffbf47d
++--- /dev/null
+++++ b/memo.md
++@@ -0,0 +1,42 @@
+++### react-pdf
+++
+++#### PDFファイル表示
+++
+++- https://github.com/wojtekmaj/react-pdf/blob/v9.x/packages/react-pdf/README.md
+++- v9でないとエラー出る
+++  - https://github.com/wojtekmaj/react-pdf/issues/2039
+++
+++#### PDFファイル生成
+++
+++- https://zenn.dev/ksk2/articles/c0cf38b8ba61ec
+++- useEffectとuseStateで描画タイミングをコントロールする必要があった
+++  - https://github.com/diegomura/react-pdf/issues/2599
+++- propsなどでPDFコンポーネントに値を渡せば、フォーム入力内容を反映するなどの操作もできる
+++
+++### cleave.js
+++
+++- react-hook-formとの連携はControllerを介して行う
+++
+++### console
+++
+++- https://dev.classmethod.jp/articles/console-log-css/
+++- https://qiita.com/S4nTo/items/453b5e6ee933765211ec
+++
+++### log4js
+++
+++- log levelの意味
+++  - debug：開発中だけ使う
+++  - info：正常系の流れ
+++  - warn：想定内だけど怪しい
+++  - error：例外・障害
+++- https://zenn.dev/shouta0715/articles/6823ea33cd3778
+++- bash: `LOGGER_ENV=production npm run dev`
+++- powershell: `$env:LOGGER_ENV="production"; npm run dev`
+++
+++### GitHub Copilot SDK
+++
+++- 下記を参考に試したが、上手くいかなかった。copilotの認証・ライセンスが関わっている？
+++  - https://rutla.jp/blog/8544/
+++  - https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
+++- 利用にはGitHub Copilotサブスクリプションまたは開発者自身のAPIキーが必要
+++  - https://138io.com/archives/9081
++
++```
++
++### next-practice6.code-workspace
++
++```diff
++
+```
+
+### next-practice6.code-workspace
+
+```diff
+
```

### next-practice6.code-workspace

```diff
diff --git a/next-practice6.code-workspace b/next-practice6.code-workspace
++index c6fa37b..cf18140 100644
++--- a/next-practice6.code-workspace
+++++ b/next-practice6.code-workspace
++@@ -20,6 +20,8 @@
++       "*": false,
++       "typescript": false,
++       "yaml": false
++-    }
+++    },
+++    "editor.formatOnSave": true,
+++    "editor.defaultFormatter": "esbenp.prettier-vscode"
++   }
++ }
++
++```
++
++### package-lock.json
++
++```diff
++
+```
+
+### package-lock.json
+
+```diff
+
```

### package.json

```diff
diff --git a/package.json b/package.json
++index ab97381..1005ff6 100644
++--- a/package.json
+++++ b/package.json
++@@ -6,21 +6,31 @@
++     "dev": "next dev",
++     "build": "next build",
++     "start": "next start",
++-    "lint": "eslint"
+++    "lint": "eslint",
+++    "simple-git": "tsx tasks/simple-git.ts main"
++   },
++   "dependencies": {
+++    "@react-pdf/renderer": "^4.3.2",
+++    "cleave.js": "^1.6.0",
+++    "google-libphonenumber": "^3.2.44",
+++    "log4js": "^6.9.1",
++     "next": "16.1.6",
++     "react": "19.2.3",
++-    "react-dom": "19.2.3"
+++    "react-dom": "19.2.3",
+++    "react-pdf": "^9.2.1"
++   },
++   "devDependencies": {
++     "@tailwindcss/postcss": "^4",
+++    "@types/cleave.js": "^1.4.12",
+++    "@types/google-libphonenumber": "^7.4.30",
++     "@types/node": "^20",
++     "@types/react": "^19",
++     "@types/react-dom": "^19",
++     "eslint": "^9",
++     "eslint-config-next": "16.1.6",
+++    "simple-git": "^3.30.0",
++     "tailwindcss": "^4",
+++    "tsx": "^4.21.0",
++     "typescript": "^5"
++   }
++ }
++
++```
++
++### public/fonts/NotoSansJP-Bold.ttf
++
++```diff
++
+```
+
+### public/fonts/NotoSansJP-Bold.ttf
+
+```diff
+
```

### public/fonts/NotoSansJP-Bold.ttf

```diff
diff --git a/public/fonts/NotoSansJP-Bold.ttf b/public/fonts/NotoSansJP-Bold.ttf
++new file mode 100644
++index 0000000..26a47bb
++Binary files /dev/null and b/public/fonts/NotoSansJP-Bold.ttf differ
++
++```
++
++### public/fonts/NotoSansJP-Regular.ttf
++
++```diff
++
+```
+
+### public/fonts/NotoSansJP-Regular.ttf
+
+```diff
+
```

### public/fonts/NotoSansJP-Regular.ttf

```diff
diff --git a/public/fonts/NotoSansJP-Regular.ttf b/public/fonts/NotoSansJP-Regular.ttf
++new file mode 100644
++index 0000000..d13df30
++Binary files /dev/null and b/public/fonts/NotoSansJP-Regular.ttf differ
++
++```
++
++### public/pdf/README.pdf
++
++```diff
++
+```
+
+### public/pdf/README.pdf
+
+```diff
+
```

### public/pdf/README.pdf

```diff
diff --git a/public/pdf/README.pdf b/public/pdf/README.pdf
++new file mode 100644
++index 0000000..f765603
++--- /dev/null
+++++ b/public/pdf/README.pdf
++@@ -0,0 +1,67 @@
+++README.md  2026-01-27
+++
+++https://zakzakst.github.io/practice-ant-design/
+++
+++概要
+++
+++様々なUI/フォーム機能、アニメーション、データ可視化などの技術的な実装例を集約した学習・プラクティ
+++ス⽤のデモアプリケーションです。
+++
+++使⽤技術
+++
+++フレームワーク・コア
+++
+++        Next.js 14
+++        React 18
+++        TypeScript
+++        Tailwind CSS
+++
+++UI コンポーネント
+++
+++        Ant Design (antd)
+++        shadcn/ui (Radix UI)
+++        Lucide React
+++
+++フォーム・バリデーション
+++
+++        React Hook Form
+++        Yup
+++        Zod
+++
+++データ処理・API
+++
+++        SWR
+++        Axios
+++        Orval
+++
+++アニメーション・ビジュアル
+++
+++        Motion
+++        anime.js
+++        Lottie
+++        React Flip Toolkit
+++        Konva
+++
+++その他
+++
+++        TanStack React Table
+++        dnd-kit
+++        react-calendar
+++        FullCalendar
+++        @xyflow/react
+++
+++                                                                                  1/2
+++README.md                               2026-01-27
+++
+++          react-markdown
+++          date-fns
+++
+++ 起動⽅法
+++
+++ 必要な環境
+++
+++          Node.js
+++          npm / yarn / pnpm / bun
+++
+++                                   2/2
+++
++
++```
++
++### tasks/old/simple-git1.ts
++
++```diff
++
+```
+
+### tasks/old/simple-git1.ts
+
+```diff
+
```

### tasks/old/simple-git1.ts

```diff
diff --git a/tasks/old/simple-git1.ts b/tasks/old/simple-git1.ts
++new file mode 100644
++index 0000000..96b6fb7
++--- /dev/null
+++++ b/tasks/old/simple-git1.ts
++@@ -0,0 +1,20 @@
+++import simpleGit from "simple-git";
+++
+++const git = simpleGit();
+++
+++async function main() {
+++  // const status = await git.status();
+++  // console.log(status);
+++
+++  // 現在ブランチ
+++  const branch = await git.branch();
+++  console.log("current branch:", branch.current);
+++
+++  // developとの差分
+++  const diff = await git.diff(["develop"]);
+++
+++  console.log("===== git diff develop =====");
+++  console.log(diff);
+++}
+++
+++main();
++
++```
++
++### tasks/simple-git.ts
++
++```diff
++
+```
+
+### tasks/simple-git.ts
+
+```diff
+
```

### tasks/simple-git.ts

```diff
diff --git a/tasks/simple-git.ts b/tasks/simple-git.ts
++new file mode 100644
++index 0000000..4cb61a3
++--- /dev/null
+++++ b/tasks/simple-git.ts
++@@ -0,0 +1,78 @@
+++import simpleGit from "simple-git";
+++import fs from "fs";
+++
+++const git = simpleGit();
+++
+++type DiffFile = {
+++  file: string;
+++  diff: string;
+++};
+++
+++const parseDiff = (diffText: string): DiffFile[] => {
+++  const blocks = diffText.split("
++```
++
++### tsconfig.json
++
++```diff
++
+```
+
+### tsconfig.json
+
+```diff
+
```

### tsconfig.json

```diff
diff --git a/tsconfig.json b/tsconfig.json
++index 3a13f90..4e424f9 100644
++--- a/tsconfig.json
+++++ b/tsconfig.json
++@@ -1,7 +1,11 @@
++ {
++   "compilerOptions": {
++     "target": "ES2017",
++-    "lib": ["dom", "dom.iterable", "esnext"],
+++    "lib": [
+++      "dom",
+++      "dom.iterable",
+++      "esnext"
+++    ],
++     "allowJs": true,
++     "skipLibCheck": true,
++     "strict": true,
++@@ -19,7 +23,9 @@
++       }
++     ],
++     "paths": {
++-      "@/*": ["./*"]
+++      "@/*": [
+++        "./*"
+++      ]
++     }
++   },
++   "include": [
++@@ -28,7 +34,10 @@
++     "**/*.tsx",
++     ".next/types/**/*.ts",
++     ".next/dev/types/**/*.ts",
++-    "**/*.mts"
+++    "**/*.mts",
+++    ".next/dev/dev/types/**/*.ts"
++   ],
++-  "exclude": ["node_modules"]
+++  "exclude": [
+++    "node_modules"
+++  ]
++ }
++
++```
++
++## Please review
++
++- バグの可能性
++- 設計の違和感
++- 可読性改善
++- TypeScript観点の指摘
+
+```
+
+### memo.md
+
+```diff
+
```

### memo.md

```diff
diff --git a/memo.md b/memo.md
+index 832d1e8..4bca354 100644
+--- a/memo.md
++++ b/memo.md
+@@ -12,6 +12,7 @@
+ - useEffectとuseStateで描画タイミングをコントロールする必要があった
+   - https://github.com/diegomura/react-pdf/issues/2599
+ - propsなどでPDFコンポーネントに値を渡せば、フォーム入力内容を反映するなどの操作もできる
++- ImageはSVGと外部画像が上手く表示できなかった
+ 
+ ### cleave.js
+ 
+@@ -32,3 +33,20 @@
+ - https://zenn.dev/shouta0715/articles/6823ea33cd3778
+ - bash: `LOGGER_ENV=production npm run dev`
+ - powershell: `$env:LOGGER_ENV="production"; npm run dev`
++
++### GitHub Copilot SDK
++
++- 下記を参考に試したが、上手くいかなかった。copilotの認証・ライセンスが関わっている？
++  - https://rutla.jp/blog/8544/
++  - https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
++- 利用にはGitHub Copilotサブスクリプションまたは開発者自身のAPIキーが必要
++  - https://138io.com/archives/9081
++
++### simple-git
++
++- https://www.npmjs.com/package/simple-git
++- 残作業
++  - テンプレートファイルを読み込んで所定の箇所にdiffの情報を流し込む
++  - テンプレートファイルをコマンドラインのオプションで指定できるようにする
++  - 出力対象外のファイル（package-lock.json など）を指定できるようにする
++  - 出力ファイルの先をvscodeのcopilot連携できるディレクトリに変更する
+
+```
+
+### package-lock.json
+
+```diff
+
```

### package.json

```diff
diff --git a/package.json b/package.json
+index e1da3f8..bcf25e5 100644
+--- a/package.json
++++ b/package.json
+@@ -6,7 +6,10 @@
+     "dev": "next dev",
+     "build": "next build",
+     "start": "next start",
+-    "lint": "eslint"
++    "lint": "eslint",
++    "simple-git": "tsx tasks/simple-git.ts develop",
++    "simple-git-review": "tsx tasks/run-and-review.ts",
++    "review-diff": "tsx tasks/develop-diff/index.ts"
+   },
+   "dependencies": {
+     "@react-pdf/renderer": "^4.3.2",
+@@ -27,7 +30,9 @@
+     "@types/react-dom": "^19",
+     "eslint": "^9",
+     "eslint-config-next": "16.1.6",
++    "simple-git": "^3.30.0",
+     "tailwindcss": "^4",
++    "tsx": "^4.21.0",
+     "typescript": "^5"
+   }
+ }
+
+```
+
+### public/bg.png
+
+```diff
+
```

### public/bg.png

```diff
diff --git a/public/bg.png b/public/bg.png
+new file mode 100644
+index 0000000..fd64654
+Binary files /dev/null and b/public/bg.png differ
+
+```
+
+### tasks/develop-diff/diff.md
+
+```diff
+
```

### tasks/develop-diff/diff.md

```diff
diff --git a/tasks/develop-diff/diff.md b/tasks/develop-diff/diff.md
+new file mode 100644
+index 0000000..33511b1
+--- /dev/null
++++ b/tasks/develop-diff/diff.md
+@@ -0,0 +1,56 @@
++### app/\_sample/page.tsx
++
++```diff
++
+```
+
+### app/_sample/page.tsx
+
+```diff
+
```

### app/_sample/page.tsx

```diff
diff --git a/app/_sample/page.tsx b/app/_sample/page.tsx
++new file mode 100644
++index 0000000..b1a7106
++--- /dev/null
+++++ b/app/_sample/page.tsx
++@@ -0,0 +1,11 @@
+++import { Parts } from "./parts/Parts1";
+++
+++const Page = () => {
+++  return (
+++    <div className="p-4">
+++      <Parts />
+++    </div>
+++  );
+++};
+++
+++export default Page;
++
++```
++
++### app/\_sample/parts/Parts1.tsx
++
++```diff
++
+```
+
+### app/_sample/parts/Parts1.tsx
+
+```diff
+
```

### app/_sample/parts/Parts1.tsx

```diff
diff --git a/app/_sample/parts/Parts1.tsx b/app/_sample/parts/Parts1.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/_sample/parts/Parts1.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
++
++### app/\_sample/parts/\_Parts.tsx
++
++```diff
++
+```
+
+### app/_sample/parts/_Parts.tsx
+
+```diff
+
```

### app/_sample/parts/_Parts.tsx

```diff
diff --git a/app/_sample/parts/_Parts.tsx b/app/_sample/parts/_Parts.tsx
++new file mode 100644
++index 0000000..c730b9d
++--- /dev/null
+++++ b/app/_sample/parts/_Parts.tsx
++@@ -0,0 +1,5 @@
+++"use client";
+++
+++export const Parts = () => {
+++  return <div>parts</div>;
+++};
++
++```
+
+```
+
+### tasks/develop-diff/index.ts
+
+```diff
+
```

### tasks/develop-diff/index.ts

```diff
diff --git a/tasks/develop-diff/index.ts b/tasks/develop-diff/index.ts
+new file mode 100644
+index 0000000..f28e821
+--- /dev/null
++++ b/tasks/develop-diff/index.ts
+@@ -0,0 +1,63 @@
++import simpleGit from "simple-git";
++import fs from "fs";
++
++const git = simpleGit();
++
++type DiffFile = {
++  file: string;
++  diff: string;
++};
++
++const parseDiff = (diffText: string): DiffFile[] => {
++  const blocks = diffText.split("
+```
+
+### tasks/old/simple-git1.ts
+
+```diff
+
```

### tasks/old/simple-git1.ts

```diff
diff --git a/tasks/old/simple-git1.ts b/tasks/old/simple-git1.ts
+new file mode 100644
+index 0000000..96b6fb7
+--- /dev/null
++++ b/tasks/old/simple-git1.ts
+@@ -0,0 +1,20 @@
++import simpleGit from "simple-git";
++
++const git = simpleGit();
++
++async function main() {
++  // const status = await git.status();
++  // console.log(status);
++
++  // 現在ブランチ
++  const branch = await git.branch();
++  console.log("current branch:", branch.current);
++
++  // developとの差分
++  const diff = await git.diff(["develop"]);
++
++  console.log("===== git diff develop =====");
++  console.log(diff);
++}
++
++main();
+
+```
+
+### tasks/simple-git.ts
+
+```diff
+
```

### tasks/simple-git.ts

```diff
diff --git a/tasks/simple-git.ts b/tasks/simple-git.ts
+new file mode 100644
+index 0000000..4cb61a3
+--- /dev/null
++++ b/tasks/simple-git.ts
+@@ -0,0 +1,78 @@
++import simpleGit from "simple-git";
++import fs from "fs";
++
++const git = simpleGit();
++
++type DiffFile = {
++  file: string;
++  diff: string;
++};
++
++const parseDiff = (diffText: string): DiffFile[] => {
++  const blocks = diffText.split("
+```

```

### tasks/develop-diff/index.ts

```diff
diff --git a/tasks/develop-diff/index.ts b/tasks/develop-diff/index.ts
new file mode 100644
index 0000000..0654b17
--- /dev/null
+++ b/tasks/develop-diff/index.ts
@@ -0,0 +1,65 @@
+import simpleGit from "simple-git";
+import fs from "fs";
+
+const IgnoreFiles = ["package-lock.json"];
+const git = simpleGit();
+
+type DiffFile = {
+  file: string;
+  diff: string;
+};
+
+const parseDiff = (diffText: string): DiffFile[] => {
+  const blocks = diffText.split("
```
