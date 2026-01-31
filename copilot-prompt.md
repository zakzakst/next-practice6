# PR Review Request

## Target branch
main

## Changed files

### .env

```diff
diff --git a/.env b/.env
new file mode 100644
index 0000000..1df2fe5
--- /dev/null
+++ b/.env
@@ -0,0 +1,6 @@
+##########
+# log4jsの挙動確認の記録を残すために.gitignoreから外している。値を追加する場合は注意する
+##########
+
+LOGGER_ENV=production
+# LOGGER_ENV=develop
\ No newline at end of file

```

### .gitignore

```diff
diff --git a/.gitignore b/.gitignore
index 5ef6a52..4558657 100644
--- a/.gitignore
+++ b/.gitignore
@@ -31,7 +31,7 @@ yarn-error.log*
 .pnpm-debug.log*
 
 # env files (can opt-in for committing if needed)
-.env*
+# .env*
 
 # vercel
 .vercel
@@ -39,3 +39,5 @@ yarn-error.log*
 # typescript
 *.tsbuildinfo
 next-env.d.ts
+
+logs/*.log
\ No newline at end of file

```

### app/_sample/page.tsx

```diff
diff --git a/app/_sample/page.tsx b/app/_sample/page.tsx
new file mode 100644
index 0000000..b1a7106
--- /dev/null
+++ b/app/_sample/page.tsx
@@ -0,0 +1,11 @@
+import { Parts } from "./parts/Parts1";
+
+const Page = () => {
+  return (
+    <div className="p-4">
+      <Parts />
+    </div>
+  );
+};
+
+export default Page;

```

### app/_sample/parts/Parts1.tsx

```diff
diff --git a/app/_sample/parts/Parts1.tsx b/app/_sample/parts/Parts1.tsx
new file mode 100644
index 0000000..c730b9d
--- /dev/null
+++ b/app/_sample/parts/Parts1.tsx
@@ -0,0 +1,5 @@
+"use client";
+
+export const Parts = () => {
+  return <div>parts</div>;
+};

```

### app/_sample/parts/_Parts.tsx

```diff
diff --git a/app/_sample/parts/_Parts.tsx b/app/_sample/parts/_Parts.tsx
new file mode 100644
index 0000000..c730b9d
--- /dev/null
+++ b/app/_sample/parts/_Parts.tsx
@@ -0,0 +1,5 @@
+"use client";
+
+export const Parts = () => {
+  return <div>parts</div>;
+};

```

### app/api/log4js/route.ts

```diff
diff --git a/app/api/log4js/route.ts b/app/api/log4js/route.ts
new file mode 100644
index 0000000..1b6b46e
--- /dev/null
+++ b/app/api/log4js/route.ts
@@ -0,0 +1,24 @@
+import { NextResponse } from "next/server";
+import { logger, appLogger } from "@/lib/logger";
+
+export const runtime = "nodejs";
+
+// export async function GET() {
+//   logger.debug("debug log");
+//   logger.info("info log");
+//   logger.warn("warn log");
+//   logger.error("error log");
+//   return NextResponse.json({ ok: true });
+// }
+
+export async function GET() {
+  const userId = "user-123";
+  appLogger.info("API called", { userId });
+  try {
+    throw new Error("something failed");
+  } catch (err) {
+    appLogger.debug("LOGGER_ENV=productionだと出力されない");
+    appLogger.error("Unexpected error", err);
+  }
+  return NextResponse.json({ ok: true });
+}

```

### app/cleave/page.tsx

```diff
diff --git a/app/cleave/page.tsx b/app/cleave/page.tsx
new file mode 100644
index 0000000..d3064c9
--- /dev/null
+++ b/app/cleave/page.tsx
@@ -0,0 +1,13 @@
+// import { Parts } from "./parts/Parts1";
+// import { Parts } from "./parts/Parts2";
+import { Parts } from "./parts/Parts3";
+
+const Page = () => {
+  return (
+    <div className="p-4">
+      <Parts />
+    </div>
+  );
+};
+
+export default Page;

```

### app/cleave/parts/Parts1.tsx

```diff
diff --git a/app/cleave/parts/Parts1.tsx b/app/cleave/parts/Parts1.tsx
new file mode 100644
index 0000000..05513d7
--- /dev/null
+++ b/app/cleave/parts/Parts1.tsx
@@ -0,0 +1,18 @@
+"use client";
+
+import Cleave from "cleave.js/react";
+
+export const Parts = () => {
+  return (
+    <div>
+      <h1>cleave.js 練習</h1>
+
+      <Cleave
+        placeholder="カード番号"
+        options={{
+          creditCard: true,
+        }}
+      />
+    </div>
+  );
+};

```

### app/cleave/parts/Parts2.tsx

```diff
diff --git a/app/cleave/parts/Parts2.tsx b/app/cleave/parts/Parts2.tsx
new file mode 100644
index 0000000..e0f9179
--- /dev/null
+++ b/app/cleave/parts/Parts2.tsx
@@ -0,0 +1,34 @@
+"use client";
+
+import { useState } from "react";
+import Cleave from "cleave.js/react";
+
+export const Parts = () => {
+  const [formatted, setFormatted] = useState("");
+  const [raw, setRaw] = useState("");
+
+  return (
+    <div>
+      <h1>cleave.js 練習</h1>
+
+      <Cleave
+        placeholder="カード番号"
+        options={{
+          creditCard: true,
+        }}
+        onChange={(e) => {
+          setFormatted(e.target.value);
+
+          // cleave 独自拡張
+          const rawValue = (e.target as any).rawValue;
+          setRaw(rawValue);
+        }}
+      />
+
+      <div className="mt-4">
+        <p>formatted: {formatted}</p>
+        <p>raw: {raw}</p>
+      </div>
+    </div>
+  );
+};

```

### app/cleave/parts/Parts3.tsx

```diff
diff --git a/app/cleave/parts/Parts3.tsx b/app/cleave/parts/Parts3.tsx
new file mode 100644
index 0000000..362b5b7
--- /dev/null
+++ b/app/cleave/parts/Parts3.tsx
@@ -0,0 +1,58 @@
+"use client";
+
+import { useState } from "react";
+import Cleave from "cleave.js/react";
+
+export const Parts = () => {
+  const [price, setPrice] = useState("");
+  const [date, setDate] = useState("");
+  const [memberId, setMemberId] = useState("");
+
+  return (
+    <div>
+      <h1>cleave.js Step3</h1>
+
+      {/* 金額 */}
+      <div>
+        <h3>金額</h3>
+        <Cleave
+          placeholder="金額"
+          options={{
+            numeral: true,
+            numeralThousandsGroupStyle: "thousand",
+          }}
+          onChange={(e) => setPrice((e.target as any).rawValue)}
+        />
+        <p>raw: {price}</p>
+      </div>
+
+      {/* 日付 */}
+      <div className="mt-4">
+        <h3>日付</h3>
+        <Cleave
+          placeholder="YYYY/MM/DD"
+          options={{
+            date: true,
+            datePattern: ["Y", "m", "d"],
+          }}
+          onChange={(e) => setDate((e.target as any).rawValue)}
+        />
+        <p>raw: {date}</p>
+      </div>
+
+      {/* カスタム */}
+      <div className="mt-4">
+        <h3>会員ID</h3>
+        <Cleave
+          placeholder="ABC-1234-56789"
+          options={{
+            blocks: [3, 4, 5],
+            uppercase: true,
+          }}
+          onChange={(e) => setMemberId((e.target as any).rawValue)}
+        />
+        <p>raw: {memberId}</p>
+      </div>
+    </div>
+  );
+};

```

### app/cleave/parts/_Parts.tsx

```diff
diff --git a/app/cleave/parts/_Parts.tsx b/app/cleave/parts/_Parts.tsx
new file mode 100644
index 0000000..c730b9d
--- /dev/null
+++ b/app/cleave/parts/_Parts.tsx
@@ -0,0 +1,5 @@
+"use client";
+
+export const Parts = () => {
+  return <div>parts</div>;
+};

```

### app/console/page.tsx

```diff
diff --git a/app/console/page.tsx b/app/console/page.tsx
new file mode 100644
index 0000000..b1a7106
--- /dev/null
+++ b/app/console/page.tsx
@@ -0,0 +1,11 @@
+import { Parts } from "./parts/Parts1";
+
+const Page = () => {
+  return (
+    <div className="p-4">
+      <Parts />
+    </div>
+  );
+};
+
+export default Page;

```

### app/console/parts/Parts1.tsx

```diff
diff --git a/app/console/parts/Parts1.tsx b/app/console/parts/Parts1.tsx
new file mode 100644
index 0000000..d7c8c95
--- /dev/null
+++ b/app/console/parts/Parts1.tsx
@@ -0,0 +1,75 @@
+"use client";
+
+import { useEffect } from "react";
+
+export const Parts = () => {
+  console.count("Function call count");
+
+  useEffect(() => {
+    console.log(
+      "%cスタイルを設定",
+      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
+    );
+
+    console.log(
+      "%c複数の箇所%cに%cスタイル%cを設定",
+      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
+      "",
+      "color:green;",
+      "",
+    );
+
+    console.table(["Qiita", "blog1", "blog2"]);
+
+    console.table({
+      Date: new Date().getFullYear(),
+      platform: "Qiita",
+      post1: "blog1",
+    });
+
+    // consoleをグルーピングする
+    console.group("ユーザー情報");
+    console.log("Name: John Doe");
+    console.warn("Warning: Incomplete user information");
+    // console.error("Error: Unable to fetch user data");
+    console.groupEnd();
+
+    // consoleをグルーピングする（閉じた状態で色付き）
+    console.groupCollapsed(
+      "%cユーザー情報",
+      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
+    );
+    console.log("Name: John Doe");
+    console.warn("Warning: Incomplete user information");
+    console.groupEnd();
+
+    const user = {
+      name: "Alice",
+      age: 25,
+      address: {
+        city: "Tokyo",
+        country: "Japan",
+      },
+    };
+    console.dir(user);
+
+    // 時間の計測
+    console.time("time");
+    const qiita = function () {
+      console.log("Qiita");
+    };
+    qiita();
+    console.timeEnd("time");
+
+    // 第一引数に渡された値がfalseの場合エラーメッセージを出力、trueの場合は何も表示しない
+    let value = 10;
+    console.assert(value > 0, "値は0より大きい必要があります");
+    console.assert(value < 0, "値は0より小さい必要があります");
+
+    // console.clear();
+
+    console.trace("スタックトレースを表示");
+  }, []);
+
+  return <div>parts</div>;
+};

```

### app/console/parts/_Parts.tsx

```diff
diff --git a/app/console/parts/_Parts.tsx b/app/console/parts/_Parts.tsx
new file mode 100644
index 0000000..c730b9d
--- /dev/null
+++ b/app/console/parts/_Parts.tsx
@@ -0,0 +1,5 @@
+"use client";
+
+export const Parts = () => {
+  return <div>parts</div>;
+};

```

### app/google-libphonenumber/page.tsx

```diff
diff --git a/app/google-libphonenumber/page.tsx b/app/google-libphonenumber/page.tsx
new file mode 100644
index 0000000..fc65830
--- /dev/null
+++ b/app/google-libphonenumber/page.tsx
@@ -0,0 +1,12 @@
+// import { Parts } from "./parts/Parts1";
+import { Parts } from "./parts/Parts2";
+
+const Page = () => {
+  return (
+    <div className="p-4">
+      <Parts />
+    </div>
+  );
+};
+
+export default Page;

```

### app/google-libphonenumber/parts/Parts1.tsx

```diff
diff --git a/app/google-libphonenumber/parts/Parts1.tsx b/app/google-libphonenumber/parts/Parts1.tsx
new file mode 100644
index 0000000..7fb615f
--- /dev/null
+++ b/app/google-libphonenumber/parts/Parts1.tsx
@@ -0,0 +1,40 @@
+"use client";
+
+import { useState } from "react";
+import { PhoneNumberUtil } from "google-libphonenumber";
+
+const phoneUtil = PhoneNumberUtil.getInstance();
+
+export const Parts = () => {
+  const [value, setValue] = useState("");
+  const [isValid, setIsValid] = useState<boolean | null>(null);
+
+  const handleCheck = () => {
+    try {
+      const number = phoneUtil.parse(value, "JP");
+      const result = phoneUtil.isValidNumber(number);
+      setIsValid(result);
+    } catch {
+      // parse に失敗した場合（文字列など）
+      setIsValid(false);
+    }
+  };
+
+  return (
+    <div>
+      <h1>電話番号チェック</h1>
+
+      <input
+        value={value}
+        onChange={(e) => setValue(e.target.value)}
+        placeholder="08012345678"
+      />
+
+      <button onClick={handleCheck}>チェック</button>
+
+      {isValid !== null && (
+        <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
+      )}
+    </div>
+  );
+};

```

### app/google-libphonenumber/parts/Parts2.tsx

```diff
diff --git a/app/google-libphonenumber/parts/Parts2.tsx b/app/google-libphonenumber/parts/Parts2.tsx
new file mode 100644
index 0000000..d5c5943
--- /dev/null
+++ b/app/google-libphonenumber/parts/Parts2.tsx
@@ -0,0 +1,57 @@
+"use client";
+
+import { useState } from "react";
+import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";
+
+const phoneUtil = PhoneNumberUtil.getInstance();
+
+export const Parts = () => {
+  const [value, setValue] = useState("");
+  const [formatted, setFormatted] = useState("");
+  const [isValid, setIsValid] = useState<boolean | null>(null);
+
+  const handleCheck = () => {
+    try {
+      const number = phoneUtil.parse(value, "JP");
+      const result = phoneUtil.isValidNumber(number);
+      setIsValid(result);
+      if (result) {
+        const formattedNumber = phoneUtil.format(
+          number,
+          // PhoneNumberFormat.NATIONAL,
+          // PhoneNumberFormat.INTERNATIONAL,
+          PhoneNumberFormat.E164,
+        );
+
+        setFormatted(formattedNumber);
+      } else {
+        setFormatted("");
+      }
+    } catch {
+      // parse に失敗した場合（文字列など）
+      setIsValid(false);
+      setFormatted("");
+    }
+  };
+
+  return (
+    <div>
+      <h1>電話番号チェック + フォーマット</h1>
+
+      <input
+        value={value}
+        onChange={(e) => setValue(e.target.value)}
+        placeholder="08012345678"
+      />
+
+      <button onClick={handleCheck}>チェック</button>
+
+      {isValid !== null && (
+        <>
+          <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
+          {formatted && <p>フォーマット結果: {formatted}</p>}
+        </>
+      )}
+    </div>
+  );
+};

```

### app/google-libphonenumber/parts/_Parts0.tsx

```diff
diff --git a/app/google-libphonenumber/parts/_Parts0.tsx b/app/google-libphonenumber/parts/_Parts0.tsx
new file mode 100644
index 0000000..92a1591
--- /dev/null
+++ b/app/google-libphonenumber/parts/_Parts0.tsx
@@ -0,0 +1,3 @@
+export const Parts = () => {
+  return <div>parts</div>;
+};

```

### app/pdf/page.tsx

```diff
diff --git a/app/pdf/page.tsx b/app/pdf/page.tsx
new file mode 100644
index 0000000..a5af43d
--- /dev/null
+++ b/app/pdf/page.tsx
@@ -0,0 +1,35 @@
+'use client';
+import { useState } from 'react';
+import { Document, Page as PdfPage, pdfjs } from 'react-pdf';
+
+import 'react-pdf/dist/Page/AnnotationLayer.css';
+import 'react-pdf/dist/Page/TextLayer.css';
+
+pdfjs.GlobalWorkerOptions.workerSrc = new URL(
+  'pdfjs-dist/build/pdf.worker.min.mjs',
+  import.meta.url,
+).toString();
+
+const Page = () => {
+  const [numPages, setNumPages] = useState<number>();
+  const [pageNumber, setPageNumber] = useState<number>(1);
+
+  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
+    setNumPages(numPages);
+  }
+
+  return (
+    <div>
+      <Document file="/pdf/README.pdf" onLoadSuccess={onDocumentLoadSuccess}>
+        <PdfPage pageNumber={pageNumber} />
+      </Document>
+      <p>
+        Page {pageNumber} of {numPages}
+      </p>
+      <button type='button' onClick={() => setPageNumber(1)}>1</button>
+      <button type='button' onClick={() => setPageNumber(2)}>2</button>
+    </div>
+  );
+}
+
+export default Page;
\ No newline at end of file

```

### app/pdf2/page.tsx

```diff
diff --git a/app/pdf2/page.tsx b/app/pdf2/page.tsx
new file mode 100644
index 0000000..5a41fe3
--- /dev/null
+++ b/app/pdf2/page.tsx
@@ -0,0 +1,47 @@
+"use client";
+import { useEffect, useState } from "react";
+import { PDFViewer, Font, PDFDownloadLink } from "@react-pdf/renderer";
+// import { Parts } from "./parts/Parts1";
+import { Parts } from "./parts/Parts2";
+
+Font.register({
+  family: "NotoSansJP",
+  fonts: [
+    {
+      src: "/fonts/NotoSansJP-Regular.ttf",
+    },
+    {
+      src: "/fonts/NotoSansJP-Bold.ttf",
+      fontWeight: "bold",
+    },
+  ],
+});
+
+const Page = () => {
+  const [loaded, setLoaded] = useState(false);
+
+  useEffect(() => {
+    setLoaded(true);
+  }, []);
+
+  return (
+    <div className="p-4">
+      <div className="h-screen">
+        {loaded && (
+          <>
+            <PDFViewer width="100%" height="100%">
+              <Parts />
+            </PDFViewer>
+            <PDFDownloadLink document={<Parts />} fileName={"parts.pdf"}>
+              {({ loading }) =>
+                loading ? "PDF生成中..." : "PDFをダウンロード"
+              }
+            </PDFDownloadLink>
+          </>
+        )}
+      </div>
+    </div>
+  );
+};
+
+export default Page;

```

### app/pdf2/parts/Parts1.tsx

```diff
diff --git a/app/pdf2/parts/Parts1.tsx b/app/pdf2/parts/Parts1.tsx
new file mode 100644
index 0000000..83a7353
--- /dev/null
+++ b/app/pdf2/parts/Parts1.tsx
@@ -0,0 +1,14 @@
+"use client";
+import { Document, Page, Text, View } from "@react-pdf/renderer";
+
+export const Parts = () => {
+  return (
+    <Document>
+      <Page size="A4">
+        <View>
+          <Text>Hello PDF 👋</Text>
+        </View>
+      </Page>
+    </Document>
+  );
+};

```

### app/pdf2/parts/Parts2.tsx

```diff
diff --git a/app/pdf2/parts/Parts2.tsx b/app/pdf2/parts/Parts2.tsx
new file mode 100644
index 0000000..151faf3
--- /dev/null
+++ b/app/pdf2/parts/Parts2.tsx
@@ -0,0 +1,65 @@
+"use client";
+import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
+
+const styles = StyleSheet.create({
+  page: {
+    padding: 40,
+    fontFamily: "NotoSansJP",
+  },
+  title: {
+    fontSize: 24,
+    marginBottom: 20,
+  },
+  row: {
+    flexDirection: "row",
+    marginBottom: 8,
+  },
+  label: {
+    width: 80,
+    fontSize: 12,
+  },
+  value: {
+    fontSize: 12,
+  },
+  box: {
+    borderWidth: 1,
+    padding: 12,
+  },
+});
+
+export const Parts = () => {
+  return (
+    <Document>
+      <Page size="A4" style={styles.page}>
+        <Text style={styles.title}>請求書サンプル</Text>
+
+        <View style={styles.box}>
+          <View style={styles.row}>
+            <Text style={styles.label}>名前:</Text>
+            <Text style={styles.value}>山田太郎</Text>
+          </View>
+
+          <View style={styles.row}>
+            <Text style={styles.label}>日付:</Text>
+            <Text style={styles.value}>2026/01/31</Text>
+          </View>
+        </View>
+      </Page>
+      <Page size="A4" style={styles.page}>
+        <Text style={styles.title}>請求書サンプル2</Text>
+
+        <View style={styles.box}>
+          <View style={styles.row}>
+            <Text style={styles.label}>名前:</Text>
+            <Text style={styles.value}>山田太郎</Text>
+          </View>
+
+          <View style={styles.row}>
+            <Text style={styles.label}>日付:</Text>
+            <Text style={styles.value}>2026/01/31</Text>
+          </View>
+        </View>
+      </Page>
+    </Document>
+  );
+};

```

### app/pdf2/parts/_Parts.tsx

```diff
diff --git a/app/pdf2/parts/_Parts.tsx b/app/pdf2/parts/_Parts.tsx
new file mode 100644
index 0000000..c730b9d
--- /dev/null
+++ b/app/pdf2/parts/_Parts.tsx
@@ -0,0 +1,5 @@
+"use client";
+
+export const Parts = () => {
+  return <div>parts</div>;
+};

```

### app/popover/page.tsx

```diff
diff --git a/app/popover/page.tsx b/app/popover/page.tsx
new file mode 100644
index 0000000..b1a7106
--- /dev/null
+++ b/app/popover/page.tsx
@@ -0,0 +1,11 @@
+import { Parts } from "./parts/Parts1";
+
+const Page = () => {
+  return (
+    <div className="p-4">
+      <Parts />
+    </div>
+  );
+};
+
+export default Page;

```

### app/popover/parts/Parts1.tsx

```diff
diff --git a/app/popover/parts/Parts1.tsx b/app/popover/parts/Parts1.tsx
new file mode 100644
index 0000000..ae90f5c
--- /dev/null
+++ b/app/popover/parts/Parts1.tsx
@@ -0,0 +1,29 @@
+"use client";
+
+import { useId } from "react";
+import styles from "./styles.module.css";
+
+export const Parts = () => {
+  const id = useId();
+
+  return (
+    <div>
+      <button
+        type="button"
+        popoverTarget={id}
+        className="bg-amber-800 text-white p-4 ml-75 inline-block"
+        style={{ anchorName: `--${id}` }}
+      >
+        開く
+      </button>
+      <div
+        id={id}
+        popover="auto"
+        className={styles.popover}
+        style={{ positionAnchor: `--${id}` }}
+      >
+        <p>ポップオーバーの内容</p>
+      </div>
+    </div>
+  );
+};

```

### app/popover/parts/_Parts.tsx

```diff
diff --git a/app/popover/parts/_Parts.tsx b/app/popover/parts/_Parts.tsx
new file mode 100644
index 0000000..c730b9d
--- /dev/null
+++ b/app/popover/parts/_Parts.tsx
@@ -0,0 +1,5 @@
+"use client";
+
+export const Parts = () => {
+  return <div>parts</div>;
+};

```

### app/popover/parts/styles.module.css

```diff
diff --git a/app/popover/parts/styles.module.css b/app/popover/parts/styles.module.css
new file mode 100644
index 0000000..6287216
--- /dev/null
+++ b/app/popover/parts/styles.module.css
@@ -0,0 +1,5 @@
+.popover {
+  top: anchor(bottom);
+  left: anchor(left);
+  position-try-fallbacks: flip-inline;
+}

```

### lib/logger.ts

```diff
diff --git a/lib/logger.ts b/lib/logger.ts
new file mode 100644
index 0000000..7c02716
--- /dev/null
+++ b/lib/logger.ts
@@ -0,0 +1,31 @@
+import "server-only";
+
+import log4js from "log4js";
+import path from "path";
+
+const logPath = path.join(process.cwd(), "logs/app.log");
+// NOTE: 通常はNODE_ENVを利用する。Next.jsで制御されているため、挙動確認の目的でLOGGER_ENVを利用している
+const isProd = process.env.LOGGER_ENV === "production";
+const level = isProd ? "info" : "debug";
+
+console.log(level);
+
+log4js.configure({
+  appenders: {
+    console: { type: "stdout" },
+    file: {
+      type: "file",
+      filename: logPath,
+      maxLogSize: 10485760, // 10MB
+      backups: 3,
+      compress: true,
+    },
+  },
+  categories: {
+    default: { appenders: ["console"], level },
+    app: { appenders: ["console", "file"], level },
+  },
+});
+
+export const logger = log4js.getLogger();
+export const appLogger = log4js.getLogger("app");

```

### logs/.gitkeep

```diff
diff --git a/logs/.gitkeep b/logs/.gitkeep
new file mode 100644
index 0000000..e69de29

```

### memo.md

```diff
diff --git a/memo.md b/memo.md
new file mode 100644
index 0000000..ffbf47d
--- /dev/null
+++ b/memo.md
@@ -0,0 +1,42 @@
+### react-pdf
+
+#### PDFファイル表示
+
+- https://github.com/wojtekmaj/react-pdf/blob/v9.x/packages/react-pdf/README.md
+- v9でないとエラー出る
+  - https://github.com/wojtekmaj/react-pdf/issues/2039
+
+#### PDFファイル生成
+
+- https://zenn.dev/ksk2/articles/c0cf38b8ba61ec
+- useEffectとuseStateで描画タイミングをコントロールする必要があった
+  - https://github.com/diegomura/react-pdf/issues/2599
+- propsなどでPDFコンポーネントに値を渡せば、フォーム入力内容を反映するなどの操作もできる
+
+### cleave.js
+
+- react-hook-formとの連携はControllerを介して行う
+
+### console
+
+- https://dev.classmethod.jp/articles/console-log-css/
+- https://qiita.com/S4nTo/items/453b5e6ee933765211ec
+
+### log4js
+
+- log levelの意味
+  - debug：開発中だけ使う
+  - info：正常系の流れ
+  - warn：想定内だけど怪しい
+  - error：例外・障害
+- https://zenn.dev/shouta0715/articles/6823ea33cd3778
+- bash: `LOGGER_ENV=production npm run dev`
+- powershell: `$env:LOGGER_ENV="production"; npm run dev`
+
+### GitHub Copilot SDK
+
+- 下記を参考に試したが、上手くいかなかった。copilotの認証・ライセンスが関わっている？
+  - https://rutla.jp/blog/8544/
+  - https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
+- 利用にはGitHub Copilotサブスクリプションまたは開発者自身のAPIキーが必要
+  - https://138io.com/archives/9081

```

### next-practice6.code-workspace

```diff
diff --git a/next-practice6.code-workspace b/next-practice6.code-workspace
index c6fa37b..cf18140 100644
--- a/next-practice6.code-workspace
+++ b/next-practice6.code-workspace
@@ -20,6 +20,8 @@
       "*": false,
       "typescript": false,
       "yaml": false
-    }
+    },
+    "editor.formatOnSave": true,
+    "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
 }

```

### package-lock.json

```diff
diff --git a/package-lock.json b/package-lock.json
index 336958a..72ebeb8 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -8,18 +8,27 @@
       "name": "next-practice6",
       "version": "0.1.0",
       "dependencies": {
+        "@react-pdf/renderer": "^4.3.2",
+        "cleave.js": "^1.6.0",
+        "google-libphonenumber": "^3.2.44",
+        "log4js": "^6.9.1",
         "next": "16.1.6",
         "react": "19.2.3",
-        "react-dom": "19.2.3"
+        "react-dom": "19.2.3",
+        "react-pdf": "^9.2.1"
       },
       "devDependencies": {
         "@tailwindcss/postcss": "^4",
+        "@types/cleave.js": "^1.4.12",
+        "@types/google-libphonenumber": "^7.4.30",
         "@types/node": "^20",
         "@types/react": "^19",
         "@types/react-dom": "^19",
         "eslint": "^9",
         "eslint-config-next": "16.1.6",
+        "simple-git": "^3.30.0",
         "tailwindcss": "^4",
+        "tsx": "^4.21.0",
         "typescript": "^5"
       }
     },
@@ -228,6 +237,15 @@
         "node": ">=6.0.0"
       }
     },
+    "node_modules/@babel/runtime": {
+      "version": "7.28.6",
+      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.6.tgz",
+      "integrity": "sha512-05WQkdpL9COIMz4LjTxGpPNCdlpyimKppYNoJ5Di5EUObifl8t4tuLuUBBZEpoLYOmfvIWrsp9fCl0HoPRVTdA==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
     "node_modules/@babel/template": {
       "version": "7.28.6",
       "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.28.6.tgz",
@@ -309,6 +327,448 @@
         "tslib": "^2.4.0"
       }
     },
+    "node_modules/@esbuild/aix-ppc64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.2.tgz",
+      "integrity": "sha512-GZMB+a0mOMZs4MpDbj8RJp4cw+w1WV5NYD6xzgvzUJ5Ek2jerwfO2eADyI6ExDSUED+1X8aMbegahsJi+8mgpw==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "aix"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/android-arm": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.2.tgz",
+      "integrity": "sha512-DVNI8jlPa7Ujbr1yjU2PfUSRtAUZPG9I1RwW4F4xFB1Imiu2on0ADiI/c3td+KmDtVKNbi+nffGDQMfcIMkwIA==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/android-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.2.tgz",
+      "integrity": "sha512-pvz8ZZ7ot/RBphf8fv60ljmaoydPU12VuXHImtAs0XhLLw+EXBi2BLe3OYSBslR4rryHvweW5gmkKFwTiFy6KA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/android-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.2.tgz",
+      "integrity": "sha512-z8Ank4Byh4TJJOh4wpz8g2vDy75zFL0TlZlkUkEwYXuPSgX8yzep596n6mT7905kA9uHZsf/o2OJZubl2l3M7A==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/darwin-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.2.tgz",
+      "integrity": "sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/darwin-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.2.tgz",
+      "integrity": "sha512-ZxtijOmlQCBWGwbVmwOF/UCzuGIbUkqB1faQRf5akQmxRJ1ujusWsb3CVfk/9iZKr2L5SMU5wPBi1UWbvL+VQA==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/freebsd-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.2.tgz",
+      "integrity": "sha512-lS/9CN+rgqQ9czogxlMcBMGd+l8Q3Nj1MFQwBZJyoEKI50XGxwuzznYdwcav6lpOGv5BqaZXqvBSiB/kJ5op+g==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/freebsd-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.2.tgz",
+      "integrity": "sha512-tAfqtNYb4YgPnJlEFu4c212HYjQWSO/w/h/lQaBK7RbwGIkBOuNKQI9tqWzx7Wtp7bTPaGC6MJvWI608P3wXYA==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-arm": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.2.tgz",
+      "integrity": "sha512-vWfq4GaIMP9AIe4yj1ZUW18RDhx6EPQKjwe7n8BbIecFtCQG4CfHGaHuh7fdfq+y3LIA2vGS/o9ZBGVxIDi9hw==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.2.tgz",
+      "integrity": "sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-ia32": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.2.tgz",
+      "integrity": "sha512-MJt5BRRSScPDwG2hLelYhAAKh9imjHK5+NE/tvnRLbIqUWa+0E9N4WNMjmp/kXXPHZGqPLxggwVhz7QP8CTR8w==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-loong64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.2.tgz",
+      "integrity": "sha512-lugyF1atnAT463aO6KPshVCJK5NgRnU4yb3FUumyVz+cGvZbontBgzeGFO1nF+dPueHD367a2ZXe1NtUkAjOtg==",
+      "cpu": [
+        "loong64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-mips64el": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.2.tgz",
+      "integrity": "sha512-nlP2I6ArEBewvJ2gjrrkESEZkB5mIoaTswuqNFRv/WYd+ATtUpe9Y09RnJvgvdag7he0OWgEZWhviS1OTOKixw==",
+      "cpu": [
+        "mips64el"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-ppc64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.2.tgz",
+      "integrity": "sha512-C92gnpey7tUQONqg1n6dKVbx3vphKtTHJaNG2Ok9lGwbZil6DrfyecMsp9CrmXGQJmZ7iiVXvvZH6Ml5hL6XdQ==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-riscv64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.2.tgz",
+      "integrity": "sha512-B5BOmojNtUyN8AXlK0QJyvjEZkWwy/FKvakkTDCziX95AowLZKR6aCDhG7LeF7uMCXEJqwa8Bejz5LTPYm8AvA==",
+      "cpu": [
+        "riscv64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-s390x": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.2.tgz",
+      "integrity": "sha512-p4bm9+wsPwup5Z8f4EpfN63qNagQ47Ua2znaqGH6bqLlmJ4bx97Y9JdqxgGZ6Y8xVTixUnEkoKSHcpRlDnNr5w==",
+      "cpu": [
+        "s390x"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.2.tgz",
+      "integrity": "sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/netbsd-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.2.tgz",
+      "integrity": "sha512-Kj6DiBlwXrPsCRDeRvGAUb/LNrBASrfqAIok+xB0LxK8CHqxZ037viF13ugfsIpePH93mX7xfJp97cyDuTZ3cw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "netbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/netbsd-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.2.tgz",
+      "integrity": "sha512-HwGDZ0VLVBY3Y+Nw0JexZy9o/nUAWq9MlV7cahpaXKW6TOzfVno3y3/M8Ga8u8Yr7GldLOov27xiCnqRZf0tCA==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "netbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/openbsd-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.2.tgz",
+      "integrity": "sha512-DNIHH2BPQ5551A7oSHD0CKbwIA/Ox7+78/AWkbS5QoRzaqlev2uFayfSxq68EkonB+IKjiuxBFoV8ESJy8bOHA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/openbsd-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.2.tgz",
+      "integrity": "sha512-/it7w9Nb7+0KFIzjalNJVR5bOzA9Vay+yIPLVHfIQYG/j+j9VTH84aNB8ExGKPU4AzfaEvN9/V4HV+F+vo8OEg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/openharmony-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.2.tgz",
+      "integrity": "sha512-LRBbCmiU51IXfeXk59csuX/aSaToeG7w48nMwA6049Y4J4+VbWALAuXcs+qcD04rHDuSCSRKdmY63sruDS5qag==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openharmony"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/sunos-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.2.tgz",
+      "integrity": "sha512-kMtx1yqJHTmqaqHPAzKCAkDaKsffmXkPHThSfRwZGyuqyIeBvf08KSsYXl+abf5HDAPMJIPnbBfXvP2ZC2TfHg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "sunos"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/win32-arm64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.2.tgz",
+      "integrity": "sha512-Yaf78O/B3Kkh+nKABUF++bvJv5Ijoy9AN1ww904rOXZFLWVc5OLOfL56W+C8F9xn5JQZa3UX6m+IktJnIb1Jjg==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/win32-ia32": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.2.tgz",
+      "integrity": "sha512-Iuws0kxo4yusk7sw70Xa2E2imZU5HoixzxfGCdxwBdhiDgt9vX9VUCBhqcwY7/uh//78A1hMkkROMJq9l27oLQ==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/win32-x64": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.2.tgz",
+      "integrity": "sha512-sRdU18mcKf7F+YgheI/zGf5alZatMUTKj/jNS6l744f9u3WFu4v7twcUI9vu4mknF4Y9aDlblIie0IM+5xxaqQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
     "node_modules/@eslint-community/eslint-utils": {
       "version": "4.9.1",
       "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
@@ -1021,6 +1481,23 @@
         "@jridgewell/sourcemap-codec": "^1.4.14"
       }
     },
+    "node_modules/@kwsites/file-exists": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/@kwsites/file-exists/-/file-exists-1.1.1.tgz",
+      "integrity": "sha512-m9/5YGR18lIwxSFDwfE3oA7bWuq9kdau6ugN4H2rJeyhFQZcG9AgSHkQtSD15a8WvTgfz9aikZMrKPHvbpqFiw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "debug": "^4.1.1"
+      }
+    },
+    "node_modules/@kwsites/promise-deferred": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/@kwsites/promise-deferred/-/promise-deferred-1.1.1.tgz",
+      "integrity": "sha512-GaHYm+c0O9MjZRu0ongGBRbinu8gVAMd2UZjji6jVmqKtZluZnptXGWhz1E8j8D2HJ3f/yMxKAUC0b+57wncIw==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/@napi-rs/wasm-runtime": {
       "version": "0.2.12",
       "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
@@ -1226,6 +1703,180 @@
         "node": ">=12.4.0"
       }
     },
+    "node_modules/@react-pdf/fns": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/@react-pdf/fns/-/fns-3.1.2.tgz",
+      "integrity": "sha512-qTKGUf0iAMGg2+OsUcp9ffKnKi41RukM/zYIWMDJ4hRVYSr89Q7e3wSDW/Koqx3ea3Uy/z3h2y3wPX6Bdfxk6g==",
+      "license": "MIT"
+    },
+    "node_modules/@react-pdf/font": {
+      "version": "4.0.4",
+      "resolved": "https://registry.npmjs.org/@react-pdf/font/-/font-4.0.4.tgz",
+      "integrity": "sha512-8YtgGtL511txIEc9AjiilpZ7yjid8uCd8OGUl6jaL3LIHnrToUupSN4IzsMQpVTCMYiDLFnDNQzpZsOYtRS/Pg==",
+      "license": "MIT",
+      "dependencies": {
+        "@react-pdf/pdfkit": "^4.1.0",
+        "@react-pdf/types": "^2.9.2",
+        "fontkit": "^2.0.2",
+        "is-url": "^1.2.4"
+      }
+    },
+    "node_modules/@react-pdf/image": {
+      "version": "3.0.4",
+      "resolved": "https://registry.npmjs.org/@react-pdf/image/-/image-3.0.4.tgz",
+      "integrity": "sha512-z0ogVQE0bKqgXQ5smgzIU857rLV7bMgVdrYsu3UfXDDLSzI7QPvzf6MFTFllX6Dx2rcsF13E01dqKPtJEM799g==",
+      "license": "MIT",
+      "dependencies": {
+        "@react-pdf/png-js": "^3.0.0",
+        "jay-peg": "^1.1.1"
+      }
+    },
+    "node_modules/@react-pdf/layout": {
+      "version": "4.4.2",
+      "resolved": "https://registry.npmjs.org/@react-pdf/layout/-/layout-4.4.2.tgz",
+      "integrity": "sha512-gNu2oh8MiGR+NJZYTJ4c4q0nWCESBI6rKFiodVhE7OeVAjtzZzd6l65wsN7HXdWJqOZD3ttD97iE+tf5SOd/Yg==",
+      "license": "MIT",
+      "dependencies": {
+        "@react-pdf/fns": "3.1.2",
+        "@react-pdf/image": "^3.0.4",
+        "@react-pdf/primitives": "^4.1.1",
+        "@react-pdf/stylesheet": "^6.1.2",
+        "@react-pdf/textkit": "^6.1.0",
+        "@react-pdf/types": "^2.9.2",
+        "emoji-regex-xs": "^1.0.0",
+        "queue": "^6.0.1",
+        "yoga-layout": "^3.2.1"
+      }
+    },
+    "node_modules/@react-pdf/pdfkit": {
+      "version": "4.1.0",
+      "resolved": "https://registry.npmjs.org/@react-pdf/pdfkit/-/pdfkit-4.1.0.tgz",
+      "integrity": "sha512-Wm/IOAv0h/U5Ra94c/PltFJGcpTUd/fwVMVeFD6X9tTTPCttIwg0teRG1Lqq617J8K4W7jpL/B0HTH0mjp3QpQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@babel/runtime": "^7.20.13",
+        "@react-pdf/png-js": "^3.0.0",
+        "browserify-zlib": "^0.2.0",
+        "crypto-js": "^4.2.0",
+        "fontkit": "^2.0.2",
+        "jay-peg": "^1.1.1",
+        "linebreak": "^1.1.0",
+        "vite-compatible-readable-stream": "^3.6.1"
+      }
+    },
+    "node_modules/@react-pdf/png-js": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/@react-pdf/png-js/-/png-js-3.0.0.tgz",
+      "integrity": "sha512-eSJnEItZ37WPt6Qv5pncQDxLJRK15eaRwPT+gZoujP548CodenOVp49GST8XJvKMFt9YqIBzGBV/j9AgrOQzVA==",
+      "license": "MIT",
+      "dependencies": {
+        "browserify-zlib": "^0.2.0"
+      }
+    },
+    "node_modules/@react-pdf/primitives": {
+      "version": "4.1.1",
+      "resolved": "https://registry.npmjs.org/@react-pdf/primitives/-/primitives-4.1.1.tgz",
+      "integrity": "sha512-IuhxYls1luJb7NUWy6q5avb1XrNaVj9bTNI40U9qGRuS6n7Hje/8H8Qi99Z9UKFV74bBP3DOf3L1wV2qZVgVrQ==",
+      "license": "MIT"
+    },
+    "node_modules/@react-pdf/reconciler": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/@react-pdf/reconciler/-/reconciler-2.0.0.tgz",
+      "integrity": "sha512-7zaPRujpbHSmCpIrZ+b9HSTJHthcVZzX0Wx7RzvQGsGBUbHP4p6s5itXrAIOuQuPvDepoHGNOvf6xUuMVvdoyw==",
+      "license": "MIT",
+      "dependencies": {
+        "object-assign": "^4.1.1",
+        "scheduler": "0.25.0-rc-603e6108-20241029"
+      },
+      "peerDependencies": {
+        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
+      }
+    },
+    "node_modules/@react-pdf/reconciler/node_modules/scheduler": {
+      "version": "0.25.0-rc-603e6108-20241029",
+      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.25.0-rc-603e6108-20241029.tgz",
+      "integrity": "sha512-pFwF6H1XrSdYYNLfOcGlM28/j8CGLu8IvdrxqhjWULe2bPcKiKW4CV+OWqR/9fT52mywx65l7ysNkjLKBda7eA==",
+      "license": "MIT"
+    },
+    "node_modules/@react-pdf/render": {
+      "version": "4.3.2",
+      "resolved": "https://registry.npmjs.org/@react-pdf/render/-/render-4.3.2.tgz",
+      "integrity": "sha512-el5KYM1sH/PKcO4tRCIm8/AIEmhtraaONbwCrBhFdehoGv6JtgnXiMxHGAvZbI5kEg051GbyP+XIU6f6YbOu6Q==",
+      "license": "MIT",
+      "dependencies": {
+        "@babel/runtime": "^7.20.13",
+        "@react-pdf/fns": "3.1.2",
+        "@react-pdf/primitives": "^4.1.1",
+        "@react-pdf/textkit": "^6.1.0",
+        "@react-pdf/types": "^2.9.2",
+        "abs-svg-path": "^0.1.1",
+        "color-string": "^1.9.1",
+        "normalize-svg-path": "^1.1.0",
+        "parse-svg-path": "^0.1.2",
+        "svg-arc-to-cubic-bezier": "^3.2.0"
+      }
+    },
+    "node_modules/@react-pdf/renderer": {
+      "version": "4.3.2",
+      "resolved": "https://registry.npmjs.org/@react-pdf/renderer/-/renderer-4.3.2.tgz",
+      "integrity": "sha512-EhPkj35gO9rXIyyx29W3j3axemvVY5RigMmlK4/6Ku0pXB8z9PEE/sz4ZBOShu2uot6V4xiCR3aG+t9IjJJlBQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@babel/runtime": "^7.20.13",
+        "@react-pdf/fns": "3.1.2",
+        "@react-pdf/font": "^4.0.4",
+        "@react-pdf/layout": "^4.4.2",
+        "@react-pdf/pdfkit": "^4.1.0",
+        "@react-pdf/primitives": "^4.1.1",
+        "@react-pdf/reconciler": "^2.0.0",
+        "@react-pdf/render": "^4.3.2",
+        "@react-pdf/types": "^2.9.2",
+        "events": "^3.3.0",
+        "object-assign": "^4.1.1",
+        "prop-types": "^15.6.2",
+        "queue": "^6.0.1"
+      },
+      "peerDependencies": {
+        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
+      }
+    },
+    "node_modules/@react-pdf/stylesheet": {
+      "version": "6.1.2",
+      "resolved": "https://registry.npmjs.org/@react-pdf/stylesheet/-/stylesheet-6.1.2.tgz",
+      "integrity": "sha512-E3ftGRYUQGKiN3JOgtGsLDo0hGekA6dmkmi/MYACytmPTKxQRBSO3126MebmCq+t1rgU9uRlREIEawJ+8nzSbw==",
+      "license": "MIT",
+      "dependencies": {
+        "@react-pdf/fns": "3.1.2",
+        "@react-pdf/types": "^2.9.2",
+        "color-string": "^1.9.1",
+        "hsl-to-hex": "^1.0.0",
+        "media-engine": "^1.0.3",
+        "postcss-value-parser": "^4.1.0"
+      }
+    },
+    "node_modules/@react-pdf/textkit": {
+      "version": "6.1.0",
+      "resolved": "https://registry.npmjs.org/@react-pdf/textkit/-/textkit-6.1.0.tgz",
+      "integrity": "sha512-sFlzDC9CDFrJsnL3B/+NHrk9+Advqk7iJZIStiYQDdskbow8GF/AGYrpIk+vWSnh35YxaGbHkqXq53XOxnyrjQ==",
+      "license": "MIT",
+      "dependencies": {
+        "@react-pdf/fns": "3.1.2",
+        "bidi-js": "^1.0.2",
+        "hyphen": "^1.6.4",
+        "unicode-properties": "^1.4.1"
+      }
+    },
+    "node_modules/@react-pdf/types": {
+      "version": "2.9.2",
+      "resolved": "https://registry.npmjs.org/@react-pdf/types/-/types-2.9.2.tgz",
+      "integrity": "sha512-dufvpKId9OajLLbgn9q7VLUmyo1Jf+iyGk2ZHmCL8nIDtL8N1Ejh9TH7+pXXrR0tdie1nmnEb5Bz9U7g4hI4/g==",
+      "license": "MIT",
+      "dependencies": {
+        "@react-pdf/font": "^4.0.4",
+        "@react-pdf/primitives": "^4.1.1",
+        "@react-pdf/stylesheet": "^6.1.2"
+      }
+    },
     "node_modules/@rtsao/scc": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
@@ -1524,6 +2175,16 @@
         "tslib": "^2.4.0"
       }
     },
+    "node_modules/@types/cleave.js": {
+      "version": "1.4.12",
+      "resolved": "https://registry.npmjs.org/@types/cleave.js/-/cleave.js-1.4.12.tgz",
+      "integrity": "sha512-d+TDoy5wsWfG/lTLNV4CCziGzJovbX5RCrYzrfG2iB5F6yvrzeTtGEgoXW3/7oRj0H6gAzLxuvwmgNEx4Og4QA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/react": "*"
+      }
+    },
     "node_modules/@types/estree": {
       "version": "1.0.8",
       "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
@@ -1531,6 +2192,13 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/@types/google-libphonenumber": {
+      "version": "7.4.30",
+      "resolved": "https://registry.npmjs.org/@types/google-libphonenumber/-/google-libphonenumber-7.4.30.tgz",
+      "integrity": "sha512-Td1X1ayRxePEm6/jPHUBs2tT6TzW1lrVB6ZX7ViPGellyzO/0xMNi+wx5nH6jEitjznq276VGIqjK5qAju0XVw==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/@types/json-schema": {
       "version": "7.0.15",
       "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
@@ -1559,7 +2227,7 @@
       "version": "19.2.10",
       "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.10.tgz",
       "integrity": "sha512-WPigyYuGhgZ/cTPRXB2EwUw+XvsRA3GqHlsP4qteqrnnjDrApbS7MxcGr/hke5iUoeB7E/gQtrs9I37zAJ0Vjw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "csstype": "^3.2.2"
@@ -2113,6 +2781,12 @@
         "win32"
       ]
     },
+    "node_modules/abs-svg-path": {
+      "version": "0.1.1",
+      "resolved": "https://registry.npmjs.org/abs-svg-path/-/abs-svg-path-0.1.1.tgz",
+      "integrity": "sha512-d8XPSGjfyzlXC3Xx891DJRyZfqk5JU0BJrDQcsWomFIV1/BIzPW5HDH5iDdWpqWaav0YVIEzT1RHTwWr0FFshA==",
+      "license": "MIT"
+    },
     "node_modules/acorn": {
       "version": "8.15.0",
       "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
@@ -2406,6 +3080,26 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/base64-js": {
+      "version": "1.5.1",
+      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
+      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "license": "MIT"
+    },
     "node_modules/baseline-browser-mapping": {
       "version": "2.9.18",
       "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.18.tgz",
@@ -2415,6 +3109,27 @@
         "baseline-browser-mapping": "dist/cli.js"
       }
     },
+    "node_modules/bidi-js": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/bidi-js/-/bidi-js-1.0.3.tgz",
+      "integrity": "sha512-RKshQI1R3YQ+n9YJz2QQ147P66ELpa1FQEg20Dk8oW9t2KgLbpDLLp9aGZ7y8WHSshDknG0bknqGw5/tyCs5tw==",
+      "license": "MIT",
+      "dependencies": {
+        "require-from-string": "^2.0.2"
+      }
+    },
+    "node_modules/bl": {
+      "version": "4.1.0",
+      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
+      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "buffer": "^5.5.0",
+        "inherits": "^2.0.4",
+        "readable-stream": "^3.4.0"
+      }
+    },
     "node_modules/brace-expansion": {
       "version": "1.1.12",
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
@@ -2439,6 +3154,24 @@
         "node": ">=8"
       }
     },
+    "node_modules/brotli": {
+      "version": "1.3.3",
+      "resolved": "https://registry.npmjs.org/brotli/-/brotli-1.3.3.tgz",
+      "integrity": "sha512-oTKjJdShmDuGW94SyyaoQvAjf30dZaHnjJ8uAF+u2/vGJkJbJPJAT1gDiOJP5v1Zb6f9KEyW/1HpuaWIXtGHPg==",
+      "license": "MIT",
+      "dependencies": {
+        "base64-js": "^1.1.2"
+      }
+    },
+    "node_modules/browserify-zlib": {
+      "version": "0.2.0",
+      "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
+      "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
+      "license": "MIT",
+      "dependencies": {
+        "pako": "~1.0.5"
+      }
+    },
     "node_modules/browserslist": {
       "version": "4.28.1",
       "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
@@ -2473,6 +3206,31 @@
         "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
       }
     },
+    "node_modules/buffer": {
+      "version": "5.7.1",
+      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
+      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "base64-js": "^1.3.1",
+        "ieee754": "^1.1.13"
+      }
+    },
     "node_modules/call-bind": {
       "version": "1.0.8",
       "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.8.tgz",
@@ -2553,6 +3311,21 @@
       ],
       "license": "CC-BY-4.0"
     },
+    "node_modules/canvas": {
+      "version": "3.2.1",
+      "resolved": "https://registry.npmjs.org/canvas/-/canvas-3.2.1.tgz",
+      "integrity": "sha512-ej1sPFR5+0YWtaVp6S1N1FVz69TQCqmrkGeRvQxZeAB1nAIcjNTHVwrZtYtWFFBmQsF40/uDLehsW5KuYC99mg==",
+      "hasInstallScript": true,
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "node-addon-api": "^7.0.0",
+        "prebuild-install": "^7.1.3"
+      },
+      "engines": {
+        "node": "^18.12.0 || >= 20.9.0"
+      }
+    },
     "node_modules/chalk": {
       "version": "4.1.2",
       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
@@ -2570,12 +3343,43 @@
         "url": "https://github.com/chalk/chalk?sponsor=1"
       }
     },
+    "node_modules/chownr": {
+      "version": "1.1.4",
+      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
+      "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
+      "license": "ISC",
+      "optional": true
+    },
+    "node_modules/cleave.js": {
+      "version": "1.6.0",
+      "resolved": "https://registry.npmjs.org/cleave.js/-/cleave.js-1.6.0.tgz",
+      "integrity": "sha512-ivqesy3j5hQVG3gywPfwKPbi/7ZSftY/UNp5uphnqjr25yI2CP8FS2ODQPzuLXXnNLi29e2+PgPkkiKUXLs/Nw==",
+      "license": "Apache-2.0"
+    },
     "node_modules/client-only": {
       "version": "0.0.1",
       "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
       "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
       "license": "MIT"
     },
+    "node_modules/clone": {
+      "version": "2.1.2",
+      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
+      "integrity": "sha512-3Pe/CF1Nn94hyhIYpjtiLhdCoEoz0DqQ+988E9gmeEdQZlojxnOb74wctFyuwWQHzqyf9X7C7MG8juUpqBJT8w==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.8"
+      }
+    },
+    "node_modules/clsx": {
+      "version": "2.1.1",
+      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
+      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=6"
+      }
+    },
     "node_modules/color-convert": {
       "version": "2.0.1",
       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
@@ -2593,9 +3397,18 @@
       "version": "1.1.4",
       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
-      "dev": true,
       "license": "MIT"
     },
+    "node_modules/color-string": {
+      "version": "1.9.1",
+      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
+      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
+      "license": "MIT",
+      "dependencies": {
+        "color-name": "^1.0.0",
+        "simple-swizzle": "^0.2.2"
+      }
+    },
     "node_modules/concat-map": {
       "version": "0.0.1",
       "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
@@ -2625,11 +3438,17 @@
         "node": ">= 8"
       }
     },
+    "node_modules/crypto-js": {
+      "version": "4.2.0",
+      "resolved": "https://registry.npmjs.org/crypto-js/-/crypto-js-4.2.0.tgz",
+      "integrity": "sha512-KALDyEYgpY+Rlob/iriUtjV6d5Eq+Y191A5g4UqLAi8CyGP9N1+FdVbkc1SxKc2r4YAYqG8JzO2KGL+AizD70Q==",
+      "license": "MIT"
+    },
     "node_modules/csstype": {
       "version": "3.2.3",
       "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
       "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/damerau-levenshtein": {
@@ -2693,11 +3512,19 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/date-format": {
+      "version": "4.0.14",
+      "resolved": "https://registry.npmjs.org/date-format/-/date-format-4.0.14.tgz",
+      "integrity": "sha512-39BOQLs9ZjKh0/patS9nrT8wc3ioX3/eA/zgbKNopnF2wCqJEoxywwwElATYvRsXdnOxA/OQeQoFZ3rFjVajhg==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=4.0"
+      }
+    },
     "node_modules/debug": {
       "version": "4.4.3",
       "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
       "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
-      "dev": true,
       "license": "MIT",
       "dependencies": {
         "ms": "^2.1.3"
@@ -2711,6 +3538,32 @@
         }
       }
     },
+    "node_modules/decompress-response": {
+      "version": "6.0.0",
+      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz",
+      "integrity": "sha512-aW35yZM6Bb/4oJlZncMH2LCoZtJXTRxES17vE3hoRiowU2kWHaJKFkSBDnDR+cm9J+9QhXmREyIfv0pji9ejCQ==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "mimic-response": "^3.1.0"
+      },
+      "engines": {
+        "node": ">=10"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
+    "node_modules/deep-extend": {
+      "version": "0.6.0",
+      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
+      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
+      "license": "MIT",
+      "optional": true,
+      "engines": {
+        "node": ">=4.0.0"
+      }
+    },
     "node_modules/deep-is": {
       "version": "0.1.4",
       "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
@@ -2754,6 +3607,15 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/dequal": {
+      "version": "2.0.3",
+      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
+      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=6"
+      }
+    },
     "node_modules/detect-libc": {
       "version": "2.1.2",
       "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
@@ -2764,6 +3626,12 @@
         "node": ">=8"
       }
     },
+    "node_modules/dfa": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/dfa/-/dfa-1.2.0.tgz",
+      "integrity": "sha512-ED3jP8saaweFTjeGX8HQPjeC1YYyZs98jGNZx6IiBvxW7JG5v492kamAQB3m2wop07CvU/RQmzcKr6bgcC5D/Q==",
+      "license": "MIT"
+    },
     "node_modules/doctrine": {
       "version": "2.1.0",
       "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
@@ -2806,6 +3674,22 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/emoji-regex-xs": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/emoji-regex-xs/-/emoji-regex-xs-1.0.0.tgz",
+      "integrity": "sha512-LRlerrMYoIDrT6jgpeZ2YYl/L8EulRTt5hQcYjy5AInh7HWXKimpqx68aknBFpGL2+/IcogTcaydJEgaTmOpDg==",
+      "license": "MIT"
+    },
+    "node_modules/end-of-stream": {
+      "version": "1.4.5",
+      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
+      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "once": "^1.4.0"
+      }
+    },
     "node_modules/enhanced-resolve": {
       "version": "5.18.4",
       "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
@@ -2997,6 +3881,48 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/esbuild": {
+      "version": "0.27.2",
+      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.2.tgz",
+      "integrity": "sha512-HyNQImnsOC7X9PMNaCIeAm4ISCQXs5a5YasTXVliKv4uuBo1dKrG0A+uQS8M5eXjVMnLg3WgXaKvprHlFJQffw==",
+      "dev": true,
+      "hasInstallScript": true,
+      "license": "MIT",
+      "bin": {
+        "esbuild": "bin/esbuild"
+      },
+      "engines": {
+        "node": ">=18"
+      },
+      "optionalDependencies": {
+        "@esbuild/aix-ppc64": "0.27.2",
+        "@esbuild/android-arm": "0.27.2",
+        "@esbuild/android-arm64": "0.27.2",
+        "@esbuild/android-x64": "0.27.2",
+        "@esbuild/darwin-arm64": "0.27.2",
+        "@esbuild/darwin-x64": "0.27.2",
+        "@esbuild/freebsd-arm64": "0.27.2",
+        "@esbuild/freebsd-x64": "0.27.2",
+        "@esbuild/linux-arm": "0.27.2",
+        "@esbuild/linux-arm64": "0.27.2",
+        "@esbuild/linux-ia32": "0.27.2",
+        "@esbuild/linux-loong64": "0.27.2",
+        "@esbuild/linux-mips64el": "0.27.2",
+        "@esbuild/linux-ppc64": "0.27.2",
+        "@esbuild/linux-riscv64": "0.27.2",
+        "@esbuild/linux-s390x": "0.27.2",
+        "@esbuild/linux-x64": "0.27.2",
+        "@esbuild/netbsd-arm64": "0.27.2",
+        "@esbuild/netbsd-x64": "0.27.2",
+        "@esbuild/openbsd-arm64": "0.27.2",
+        "@esbuild/openbsd-x64": "0.27.2",
+        "@esbuild/openharmony-arm64": "0.27.2",
+        "@esbuild/sunos-x64": "0.27.2",
+        "@esbuild/win32-arm64": "0.27.2",
+        "@esbuild/win32-ia32": "0.27.2",
+        "@esbuild/win32-x64": "0.27.2"
+      }
+    },
     "node_modules/escalade": {
       "version": "3.2.0",
       "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
@@ -3444,11 +4370,29 @@
         "node": ">=0.10.0"
       }
     },
+    "node_modules/events": {
+      "version": "3.3.0",
+      "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
+      "integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.8.x"
+      }
+    },
+    "node_modules/expand-template": {
+      "version": "2.0.3",
+      "resolved": "https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz",
+      "integrity": "sha512-XYfuKMvj4O35f/pOXLObndIRvyQ+/+6AhODh+OKWj9S9498pHHn/IMszH+gt0fBCRWMNfk1ZSp5x3AifmnI2vg==",
+      "license": "(MIT OR WTFPL)",
+      "optional": true,
+      "engines": {
+        "node": ">=6"
+      }
+    },
     "node_modules/fast-deep-equal": {
       "version": "3.1.3",
       "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
       "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
-      "dev": true,
       "license": "MIT"
     },
     "node_modules/fast-glob": {
@@ -3566,9 +4510,25 @@
       "version": "3.3.3",
       "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
       "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
-      "dev": true,
       "license": "ISC"
     },
+    "node_modules/fontkit": {
+      "version": "2.0.4",
+      "resolved": "https://registry.npmjs.org/fontkit/-/fontkit-2.0.4.tgz",
+      "integrity": "sha512-syetQadaUEDNdxdugga9CpEYVaQIxOwk7GlwZWWZ19//qW4zE5bknOKeMBDYAASwnpaSHKJITRLMF9m1fp3s6g==",
+      "license": "MIT",
+      "dependencies": {
+        "@swc/helpers": "^0.5.12",
+        "brotli": "^1.3.2",
+        "clone": "^2.1.2",
+        "dfa": "^1.2.0",
+        "fast-deep-equal": "^3.1.3",
+        "restructure": "^3.0.0",
+        "tiny-inflate": "^1.0.3",
+        "unicode-properties": "^1.4.0",
+        "unicode-trie": "^2.0.0"
+      }
+    },
     "node_modules/for-each": {
       "version": "0.3.5",
       "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
@@ -3585,6 +4545,42 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/fs-constants": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
+      "integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==",
+      "license": "MIT",
+      "optional": true
+    },
+    "node_modules/fs-extra": {
+      "version": "8.1.0",
+      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
+      "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
+      "license": "MIT",
+      "dependencies": {
+        "graceful-fs": "^4.2.0",
+        "jsonfile": "^4.0.0",
+        "universalify": "^0.1.0"
+      },
+      "engines": {
+        "node": ">=6 <7 || >=8"
+      }
+    },
+    "node_modules/fsevents": {
+      "version": "2.3.3",
+      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
+      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
+      "dev": true,
+      "hasInstallScript": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
+      }
+    },
     "node_modules/function-bind": {
       "version": "1.1.2",
       "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
@@ -3716,6 +4712,13 @@
         "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
       }
     },
+    "node_modules/github-from-package": {
+      "version": "0.0.0",
+      "resolved": "https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz",
+      "integrity": "sha512-SyHy3T1v2NUXn29OsWdxmK6RwHD+vkj3v8en8AOBZ1wBQ/hCAQ5bAQTD02kW4W9tUp/3Qh6J8r9EvntiyCmOOw==",
+      "license": "MIT",
+      "optional": true
+    },
     "node_modules/glob-parent": {
       "version": "6.0.2",
       "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
@@ -3759,6 +4762,15 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/google-libphonenumber": {
+      "version": "3.2.44",
+      "resolved": "https://registry.npmjs.org/google-libphonenumber/-/google-libphonenumber-3.2.44.tgz",
+      "integrity": "sha512-9p2TghluF2LTChFMLWsDRD5N78SZDsILdUk4gyqYxBXluCyxoPiOq+Fqt7DKM+LUd33+OgRkdrc+cPR93AypCQ==",
+      "license": "(MIT AND Apache-2.0)",
+      "engines": {
+        "node": ">=0.10"
+      }
+    },
     "node_modules/gopd": {
       "version": "1.2.0",
       "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
@@ -3776,7 +4788,6 @@
       "version": "4.2.11",
       "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
       "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
-      "dev": true,
       "license": "ISC"
     },
     "node_modules/has-bigints": {
@@ -3890,6 +4901,48 @@
         "hermes-estree": "0.25.1"
       }
     },
+    "node_modules/hsl-to-hex": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/hsl-to-hex/-/hsl-to-hex-1.0.0.tgz",
+      "integrity": "sha512-K6GVpucS5wFf44X0h2bLVRDsycgJmf9FF2elg+CrqD8GcFU8c6vYhgXn8NjUkFCwj+xDFb70qgLbTUm6sxwPmA==",
+      "license": "MIT",
+      "dependencies": {
+        "hsl-to-rgb-for-reals": "^1.1.0"
+      }
+    },
+    "node_modules/hsl-to-rgb-for-reals": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/hsl-to-rgb-for-reals/-/hsl-to-rgb-for-reals-1.1.1.tgz",
+      "integrity": "sha512-LgOWAkrN0rFaQpfdWBQlv/VhkOxb5AsBjk6NQVx4yEzWS923T07X0M1Y0VNko2H52HeSpZrZNNMJ0aFqsdVzQg==",
+      "license": "ISC"
+    },
+    "node_modules/hyphen": {
+      "version": "1.14.1",
+      "resolved": "https://registry.npmjs.org/hyphen/-/hyphen-1.14.1.tgz",
+      "integrity": "sha512-kvL8xYl5QMTh+LwohVN72ciOxC0OEV79IPdJSTwEXok9y9QHebXGdFgrED4sWfiax/ODx++CAMk3hMy4XPJPOw==",
+      "license": "ISC"
+    },
+    "node_modules/ieee754": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
+      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "license": "BSD-3-Clause",
+      "optional": true
+    },
     "node_modules/ignore": {
       "version": "5.3.2",
       "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
@@ -3927,6 +4980,19 @@
         "node": ">=0.8.19"
       }
     },
+    "node_modules/inherits": {
+      "version": "2.0.4",
+      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
+      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
+      "license": "ISC"
+    },
+    "node_modules/ini": {
+      "version": "1.3.8",
+      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
+      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
+      "license": "ISC",
+      "optional": true
+    },
     "node_modules/internal-slot": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
@@ -3960,6 +5026,12 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/is-arrayish": {
+      "version": "0.3.4",
+      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.4.tgz",
+      "integrity": "sha512-m6UrgzFVUYawGBh1dUsWR5M2Clqic9RVXC/9f8ceNlv2IcO9j9J/z8UoCLPqtsPBFNzEpfR3xftohbfqDx8EQA==",
+      "license": "MIT"
+    },
     "node_modules/is-async-function": {
       "version": "2.1.1",
       "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
@@ -4311,6 +5383,12 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/is-url": {
+      "version": "1.2.4",
+      "resolved": "https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz",
+      "integrity": "sha512-ITvGim8FhRiYe4IQ5uHSkj7pVaPDrCTkNd3yq3cV7iZAcJdHTUMPMEHcqSOy9xZ9qFenQCvi+2wjH9a1nXqHww==",
+      "license": "MIT"
+    },
     "node_modules/is-weakmap": {
       "version": "2.0.2",
       "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
@@ -4389,6 +5467,15 @@
         "node": ">= 0.4"
       }
     },
+    "node_modules/jay-peg": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/jay-peg/-/jay-peg-1.1.1.tgz",
+      "integrity": "sha512-D62KEuBxz/ip2gQKOEhk/mx14o7eiFRaU+VNNSP4MOiIkwb/D6B3G1Mfas7C/Fit8EsSV2/IWjZElx/Gs6A4ww==",
+      "license": "MIT",
+      "dependencies": {
+        "restructure": "^3.0.0"
+      }
+    },
     "node_modules/jiti": {
       "version": "2.6.1",
       "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
@@ -4403,7 +5490,6 @@
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
       "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
-      "dev": true,
       "license": "MIT"
     },
     "node_modules/js-yaml": {
@@ -4466,6 +5552,15 @@
         "node": ">=6"
       }
     },
+    "node_modules/jsonfile": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
+      "integrity": "sha512-m6F1R3z8jjlf2imQHS2Qez5sjKWQzbuuhuJ/FKYFRZvPE3PuHcSMVZzfsLhGVOkfd20obL5SWEBew5ShlquNxg==",
+      "license": "MIT",
+      "optionalDependencies": {
+        "graceful-fs": "^4.1.6"
+      }
+    },
     "node_modules/jsx-ast-utils": {
       "version": "3.3.5",
       "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
@@ -4787,6 +5882,25 @@
         "url": "https://opencollective.com/parcel"
       }
     },
+    "node_modules/linebreak": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/linebreak/-/linebreak-1.1.0.tgz",
+      "integrity": "sha512-MHp03UImeVhB7XZtjd0E4n6+3xr5Dq/9xI/5FptGk5FrbDR3zagPa2DS6U8ks/3HjbKWG9Q1M2ufOzxV2qLYSQ==",
+      "license": "MIT",
+      "dependencies": {
+        "base64-js": "0.0.8",
+        "unicode-trie": "^2.0.0"
+      }
+    },
+    "node_modules/linebreak/node_modules/base64-js": {
+      "version": "0.0.8",
+      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-0.0.8.tgz",
+      "integrity": "sha512-3XSA2cR/h/73EzlXXdU6YNycmYI7+kicTxks4eJg2g39biHR84slg2+des+p7iHYhbRg/udIS4TD53WabcOUkw==",
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
     "node_modules/locate-path": {
       "version": "6.0.0",
       "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
@@ -4810,11 +5924,26 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/log4js": {
+      "version": "6.9.1",
+      "resolved": "https://registry.npmjs.org/log4js/-/log4js-6.9.1.tgz",
+      "integrity": "sha512-1somDdy9sChrr9/f4UlzhdaGfDR2c/SaD2a4T7qEkG4jTS57/B3qmnjLYePwQ8cqWnUHZI0iAKxMBpCZICiZ2g==",
+      "license": "Apache-2.0",
+      "dependencies": {
+        "date-format": "^4.0.14",
+        "debug": "^4.3.4",
+        "flatted": "^3.2.7",
+        "rfdc": "^1.3.0",
+        "streamroller": "^3.1.5"
+      },
+      "engines": {
+        "node": ">=8.0"
+      }
+    },
     "node_modules/loose-envify": {
       "version": "1.4.0",
       "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
       "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
-      "dev": true,
       "license": "MIT",
       "dependencies": {
         "js-tokens": "^3.0.0 || ^4.0.0"
@@ -4843,6 +5972,24 @@
         "@jridgewell/sourcemap-codec": "^1.5.5"
       }
     },
+    "node_modules/make-cancellable-promise": {
+      "version": "1.3.2",
+      "resolved": "https://registry.npmjs.org/make-cancellable-promise/-/make-cancellable-promise-1.3.2.tgz",
+      "integrity": "sha512-GCXh3bq/WuMbS+Ky4JBPW1hYTOU+znU+Q5m9Pu+pI8EoUqIHk9+tviOKC6/qhHh8C4/As3tzJ69IF32kdz85ww==",
+      "license": "MIT",
+      "funding": {
+        "url": "https://github.com/wojtekmaj/make-cancellable-promise?sponsor=1"
+      }
+    },
+    "node_modules/make-event-props": {
+      "version": "1.6.2",
+      "resolved": "https://registry.npmjs.org/make-event-props/-/make-event-props-1.6.2.tgz",
+      "integrity": "sha512-iDwf7mA03WPiR8QxvcVHmVWEPfMY1RZXerDVNCRYW7dUr2ppH3J58Rwb39/WG39yTZdRSxr3x+2v22tvI0VEvA==",
+      "license": "MIT",
+      "funding": {
+        "url": "https://github.com/wojtekmaj/make-event-props?sponsor=1"
+      }
+    },
     "node_modules/math-intrinsics": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
@@ -4853,6 +6000,29 @@
         "node": ">= 0.4"
       }
     },
+    "node_modules/media-engine": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/media-engine/-/media-engine-1.0.3.tgz",
+      "integrity": "sha512-aa5tG6sDoK+k70B9iEX1NeyfT8ObCKhNDs6lJVpwF6r8vhUfuKMslIcirq6HIUYuuUYLefcEQOn9bSBOvawtwg==",
+      "license": "MIT"
+    },
+    "node_modules/merge-refs": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/merge-refs/-/merge-refs-1.3.0.tgz",
+      "integrity": "sha512-nqXPXbso+1dcKDpPCXvwZyJILz+vSLqGGOnDrYHQYE+B8n9JTCekVLC65AfCpR4ggVyA/45Y0iR9LDyS2iI+zA==",
+      "license": "MIT",
+      "funding": {
+        "url": "https://github.com/wojtekmaj/merge-refs?sponsor=1"
+      },
+      "peerDependencies": {
+        "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
     "node_modules/merge2": {
       "version": "1.4.1",
       "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
@@ -4877,6 +6047,19 @@
         "node": ">=8.6"
       }
     },
+    "node_modules/mimic-response": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz",
+      "integrity": "sha512-z0yWI+4FDrrweS8Zmt4Ej5HdJmky15+L2e6Wgn3+iK5fWzb6T3fhNFq2+MeTRb064c6Wr4N/wv0DzQTjNzHNGQ==",
+      "license": "MIT",
+      "optional": true,
+      "engines": {
+        "node": ">=10"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
+      }
+    },
     "node_modules/minimatch": {
       "version": "3.1.2",
       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
@@ -4894,17 +6077,23 @@
       "version": "1.2.8",
       "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
       "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "funding": {
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/mkdirp-classic": {
+      "version": "0.5.3",
+      "resolved": "https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz",
+      "integrity": "sha512-gKLcREMhtuZRwRAfqP3RFW+TK4JqApVBtOIftVgjuABpAtpxhPGaDcfvbhNvD0B8iD1oUr/txX35NjcaY6Ns/A==",
+      "license": "MIT",
+      "optional": true
+    },
     "node_modules/ms": {
       "version": "2.1.3",
       "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
       "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
-      "dev": true,
       "license": "MIT"
     },
     "node_modules/nanoid": {
@@ -4925,6 +6114,13 @@
         "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
       }
     },
+    "node_modules/napi-build-utils": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-2.0.0.tgz",
+      "integrity": "sha512-GEbrYkbfF7MoNaoh2iGG84Mnf/WZfB0GdGEsM8wz7Expx/LlWf5U8t9nvJKXSp3qr5IsEbK04cBGhol/KwOsWA==",
+      "license": "MIT",
+      "optional": true
+    },
     "node_modules/napi-postinstall": {
       "version": "0.3.4",
       "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
@@ -5029,6 +6225,39 @@
         "node": "^10 || ^12 || >=14"
       }
     },
+    "node_modules/node-abi": {
+      "version": "3.87.0",
+      "resolved": "https://registry.npmjs.org/node-abi/-/node-abi-3.87.0.tgz",
+      "integrity": "sha512-+CGM1L1CgmtheLcBuleyYOn7NWPVu0s0EJH2C4puxgEZb9h8QpR9G2dBfZJOAUhi7VQxuBPMd0hiISWcTyiYyQ==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "semver": "^7.3.5"
+      },
+      "engines": {
+        "node": ">=10"
+      }
+    },
+    "node_modules/node-abi/node_modules/semver": {
+      "version": "7.7.3",
+      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
+      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
+      "license": "ISC",
+      "optional": true,
+      "bin": {
+        "semver": "bin/semver.js"
+      },
+      "engines": {
+        "node": ">=10"
+      }
+    },
+    "node_modules/node-addon-api": {
+      "version": "7.1.1",
+      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
+      "integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
+      "license": "MIT",
+      "optional": true
+    },
     "node_modules/node-releases": {
       "version": "2.0.27",
       "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
@@ -5036,11 +6265,19 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/normalize-svg-path": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/normalize-svg-path/-/normalize-svg-path-1.1.0.tgz",
+      "integrity": "sha512-r9KHKG2UUeB5LoTouwDzBy2VxXlHsiM6fyLQvnJa0S5hrhzqElH/CH7TUGhT1fVvIYBIKf3OpY4YJ4CK+iaqHg==",
+      "license": "MIT",
+      "dependencies": {
+        "svg-arc-to-cubic-bezier": "^3.0.0"
+      }
+    },
     "node_modules/object-assign": {
       "version": "4.1.1",
       "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
       "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
-      "dev": true,
       "license": "MIT",
       "engines": {
         "node": ">=0.10.0"
@@ -5159,6 +6396,16 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/once": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
+      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
+      "license": "ISC",
+      "optional": true,
+      "dependencies": {
+        "wrappy": "1"
+      }
+    },
     "node_modules/optionator": {
       "version": "0.9.4",
       "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
@@ -5227,6 +6474,12 @@
         "url": "https://github.com/sponsors/sindresorhus"
       }
     },
+    "node_modules/pako": {
+      "version": "1.0.11",
+      "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
+      "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
+      "license": "(MIT AND Zlib)"
+    },
     "node_modules/parent-module": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
@@ -5240,6 +6493,12 @@
         "node": ">=6"
       }
     },
+    "node_modules/parse-svg-path": {
+      "version": "0.1.2",
+      "resolved": "https://registry.npmjs.org/parse-svg-path/-/parse-svg-path-0.1.2.tgz",
+      "integrity": "sha512-JyPSBnkTJ0AI8GGJLfMXvKq42cj5c006fnLz6fXy6zfoVjJizi8BNTpu8on8ziI1cKy9d9DGNuY17Ce7wuejpQ==",
+      "license": "MIT"
+    },
     "node_modules/path-exists": {
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
@@ -5267,6 +6526,29 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/path2d": {
+      "version": "0.2.2",
+      "resolved": "https://registry.npmjs.org/path2d/-/path2d-0.2.2.tgz",
+      "integrity": "sha512-+vnG6S4dYcYxZd+CZxzXCNKdELYZSKfohrk98yajCo1PtRoDgCTrrwOvK1GT0UoAdVszagDVllQc0U1vaX4NUQ==",
+      "license": "MIT",
+      "optional": true,
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/pdfjs-dist": {
+      "version": "4.8.69",
+      "resolved": "https://registry.npmjs.org/pdfjs-dist/-/pdfjs-dist-4.8.69.tgz",
+      "integrity": "sha512-IHZsA4T7YElCKNNXtiLgqScw4zPd3pG9do8UrznC757gMd7UPeHSL2qwNNMJo4r79fl8oj1Xx+1nh2YkzdMpLQ==",
+      "license": "Apache-2.0",
+      "engines": {
+        "node": ">=18"
+      },
+      "optionalDependencies": {
+        "canvas": "^3.0.0-rc2",
+        "path2d": "^0.2.1"
+      }
+    },
     "node_modules/picocolors": {
       "version": "1.1.1",
       "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
@@ -5325,6 +6607,39 @@
         "node": "^10 || ^12 || >=14"
       }
     },
+    "node_modules/postcss-value-parser": {
+      "version": "4.2.0",
+      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
+      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
+      "license": "MIT"
+    },
+    "node_modules/prebuild-install": {
+      "version": "7.1.3",
+      "resolved": "https://registry.npmjs.org/prebuild-install/-/prebuild-install-7.1.3.tgz",
+      "integrity": "sha512-8Mf2cbV7x1cXPUILADGI3wuhfqWvtiLA1iclTDbFRZkgRQS0NqsPZphna9V+HyTEadheuPmjaJMsbzKQFOzLug==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "detect-libc": "^2.0.0",
+        "expand-template": "^2.0.3",
+        "github-from-package": "0.0.0",
+        "minimist": "^1.2.3",
+        "mkdirp-classic": "^0.5.3",
+        "napi-build-utils": "^2.0.0",
+        "node-abi": "^3.3.0",
+        "pump": "^3.0.0",
+        "rc": "^1.2.7",
+        "simple-get": "^4.0.0",
+        "tar-fs": "^2.0.0",
+        "tunnel-agent": "^0.6.0"
+      },
+      "bin": {
+        "prebuild-install": "bin.js"
+      },
+      "engines": {
+        "node": ">=10"
+      }
+    },
     "node_modules/prelude-ls": {
       "version": "1.2.1",
       "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
@@ -5339,7 +6654,6 @@
       "version": "15.8.1",
       "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
       "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
-      "dev": true,
       "license": "MIT",
       "dependencies": {
         "loose-envify": "^1.4.0",
@@ -5347,6 +6661,17 @@
         "react-is": "^16.13.1"
       }
     },
+    "node_modules/pump": {
+      "version": "3.0.3",
+      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.3.tgz",
+      "integrity": "sha512-todwxLMY7/heScKmntwQG8CXVkWUOdYxIvY2s0VWAAMh/nd8SoYiRaKjlr7+iCs984f2P8zvrfWcDDYVb73NfA==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "end-of-stream": "^1.1.0",
+        "once": "^1.3.1"
+      }
+    },
     "node_modules/punycode": {
       "version": "2.3.1",
       "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
@@ -5357,6 +6682,15 @@
         "node": ">=6"
       }
     },
+    "node_modules/queue": {
+      "version": "6.0.2",
+      "resolved": "https://registry.npmjs.org/queue/-/queue-6.0.2.tgz",
+      "integrity": "sha512-iHZWu+q3IdFZFX36ro/lKBkSvfkztY5Y7HMiPlOUjhupPcG2JMfst2KKEpu5XndviX/3UhFbRngUPNKtgvtZiA==",
+      "license": "MIT",
+      "dependencies": {
+        "inherits": "~2.0.3"
+      }
+    },
     "node_modules/queue-microtask": {
       "version": "1.2.3",
       "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
@@ -5378,6 +6712,32 @@
       ],
       "license": "MIT"
     },
+    "node_modules/rc": {
+      "version": "1.2.8",
+      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
+      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
+      "license": "(BSD-2-Clause OR MIT OR Apache-2.0)",
+      "optional": true,
+      "dependencies": {
+        "deep-extend": "^0.6.0",
+        "ini": "~1.3.0",
+        "minimist": "^1.2.0",
+        "strip-json-comments": "~2.0.1"
+      },
+      "bin": {
+        "rc": "cli.js"
+      }
+    },
+    "node_modules/rc/node_modules/strip-json-comments": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
+      "integrity": "sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==",
+      "license": "MIT",
+      "optional": true,
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
     "node_modules/react": {
       "version": "19.2.3",
       "resolved": "https://registry.npmjs.org/react/-/react-19.2.3.tgz",
@@ -5403,9 +6763,52 @@
       "version": "16.13.1",
       "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
       "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
-      "dev": true,
       "license": "MIT"
     },
+    "node_modules/react-pdf": {
+      "version": "9.2.1",
+      "resolved": "https://registry.npmjs.org/react-pdf/-/react-pdf-9.2.1.tgz",
+      "integrity": "sha512-AJt0lAIkItWEZRA5d/mO+Om4nPCuTiQ0saA+qItO967DTjmGjnhmF+Bi2tL286mOTfBlF5CyLzJ35KTMaDoH+A==",
+      "license": "MIT",
+      "dependencies": {
+        "clsx": "^2.0.0",
+        "dequal": "^2.0.3",
+        "make-cancellable-promise": "^1.3.1",
+        "make-event-props": "^1.6.0",
+        "merge-refs": "^1.3.0",
+        "pdfjs-dist": "4.8.69",
+        "tiny-invariant": "^1.0.0",
+        "warning": "^4.0.0"
+      },
+      "funding": {
+        "url": "https://github.com/wojtekmaj/react-pdf?sponsor=1"
+      },
+      "peerDependencies": {
+        "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
+        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
+        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
+      },
+      "peerDependenciesMeta": {
+        "@types/react": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/readable-stream": {
+      "version": "3.6.2",
+      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
+      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "inherits": "^2.0.3",
+        "string_decoder": "^1.1.1",
+        "util-deprecate": "^1.0.1"
+      },
+      "engines": {
+        "node": ">= 6"
+      }
+    },
     "node_modules/reflect.getprototypeof": {
       "version": "1.0.10",
       "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
@@ -5450,6 +6853,15 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/require-from-string": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
+      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
     "node_modules/resolve": {
       "version": "1.22.11",
       "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
@@ -5491,6 +6903,12 @@
         "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
       }
     },
+    "node_modules/restructure": {
+      "version": "3.0.2",
+      "resolved": "https://registry.npmjs.org/restructure/-/restructure-3.0.2.tgz",
+      "integrity": "sha512-gSfoiOEA0VPE6Tukkrr7I0RBdE0s7H1eFCDBk05l1KIQT1UIKNc5JZy6jdyW6eYH3aR3g5b3PuL77rq0hvwtAw==",
+      "license": "MIT"
+    },
     "node_modules/reusify": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
@@ -5502,6 +6920,12 @@
         "node": ">=0.10.0"
       }
     },
+    "node_modules/rfdc": {
+      "version": "1.4.1",
+      "resolved": "https://registry.npmjs.org/rfdc/-/rfdc-1.4.1.tgz",
+      "integrity": "sha512-q1b3N5QkRUWUl7iyylaaj3kOpIT0N2i9MqIEQXP73GVsN9cw3fdx8X63cEmWhJGi2PPCF23Ijp7ktmd39rawIA==",
+      "license": "MIT"
+    },
     "node_modules/run-parallel": {
       "version": "1.2.0",
       "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
@@ -5546,6 +6970,26 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/safe-buffer": {
+      "version": "5.2.1",
+      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
+      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "license": "MIT"
+    },
     "node_modules/safe-push-apply": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
@@ -5803,6 +7247,78 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/simple-concat": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz",
+      "integrity": "sha512-cSFtAPtRhljv69IK0hTVZQ+OfE9nePi/rtJmw5UjHeVyVroEqJXP1sFztKUy1qU+xvz3u/sfYJLa947b7nAN2Q==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "license": "MIT",
+      "optional": true
+    },
+    "node_modules/simple-get": {
+      "version": "4.0.1",
+      "resolved": "https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz",
+      "integrity": "sha512-brv7p5WgH0jmQJr1ZDDfKDOSeWWg+OVypG99A/5vYGPqJ6pxiaHLy8nxtFjBA7oMa01ebA9gfh1uMCFqOuXxvA==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ],
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "decompress-response": "^6.0.0",
+        "once": "^1.3.1",
+        "simple-concat": "^1.0.0"
+      }
+    },
+    "node_modules/simple-git": {
+      "version": "3.30.0",
+      "resolved": "https://registry.npmjs.org/simple-git/-/simple-git-3.30.0.tgz",
+      "integrity": "sha512-q6lxyDsCmEal/MEGhP1aVyQ3oxnagGlBDOVSIB4XUVLl1iZh0Pah6ebC9V4xBap/RfgP2WlI8EKs0WS0rMEJHg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@kwsites/file-exists": "^1.1.1",
+        "@kwsites/promise-deferred": "^1.1.1",
+        "debug": "^4.4.0"
+      },
+      "funding": {
+        "type": "github",
+        "url": "https://github.com/steveukx/git-js?sponsor=1"
+      }
+    },
+    "node_modules/simple-swizzle": {
+      "version": "0.2.4",
+      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.4.tgz",
+      "integrity": "sha512-nAu1WFPQSMNr2Zn9PGSZK9AGn4t/y97lEm+MXTtUDwfP0ksAIX4nO+6ruD9Jwut4C49SB1Ws+fbXsm/yScWOHw==",
+      "license": "MIT",
+      "dependencies": {
+        "is-arrayish": "^0.3.1"
+      }
+    },
     "node_modules/source-map-js": {
       "version": "1.2.1",
       "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
@@ -5833,6 +7349,29 @@
         "node": ">= 0.4"
       }
     },
+    "node_modules/streamroller": {
+      "version": "3.1.5",
+      "resolved": "https://registry.npmjs.org/streamroller/-/streamroller-3.1.5.tgz",
+      "integrity": "sha512-KFxaM7XT+irxvdqSP1LGLgNWbYN7ay5owZ3r/8t77p+EtSUAfUgtl7be3xtqtOmGUl9K9YPO2ca8133RlTjvKw==",
+      "license": "MIT",
+      "dependencies": {
+        "date-format": "^4.0.14",
+        "debug": "^4.3.4",
+        "fs-extra": "^8.1.0"
+      },
+      "engines": {
+        "node": ">=8.0"
+      }
+    },
+    "node_modules/string_decoder": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
+      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
+      "license": "MIT",
+      "dependencies": {
+        "safe-buffer": "~5.2.0"
+      }
+    },
     "node_modules/string.prototype.includes": {
       "version": "2.0.1",
       "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
@@ -6018,6 +7557,12 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/svg-arc-to-cubic-bezier": {
+      "version": "3.2.0",
+      "resolved": "https://registry.npmjs.org/svg-arc-to-cubic-bezier/-/svg-arc-to-cubic-bezier-3.2.0.tgz",
+      "integrity": "sha512-djbJ/vZKZO+gPoSDThGNpKDO+o+bAeA4XQKovvkNCqnIS2t+S4qnLAGQhyyrulhCFRl1WWzAp0wUDV8PpTVU3g==",
+      "license": "ISC"
+    },
     "node_modules/tailwindcss": {
       "version": "4.1.18",
       "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
@@ -6039,6 +7584,48 @@
         "url": "https://opencollective.com/webpack"
       }
     },
+    "node_modules/tar-fs": {
+      "version": "2.1.4",
+      "resolved": "https://registry.npmjs.org/tar-fs/-/tar-fs-2.1.4.tgz",
+      "integrity": "sha512-mDAjwmZdh7LTT6pNleZ05Yt65HC3E+NiQzl672vQG38jIrehtJk/J3mNwIg+vShQPcLF/LV7CMnDW6vjj6sfYQ==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "chownr": "^1.1.1",
+        "mkdirp-classic": "^0.5.2",
+        "pump": "^3.0.0",
+        "tar-stream": "^2.1.4"
+      }
+    },
+    "node_modules/tar-stream": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz",
+      "integrity": "sha512-ujeqbceABgwMZxEJnk2HDY2DlnUZ+9oEcb1KzTVfYHio0UE6dG71n60d8D2I4qNvleWrrXpmjpt7vZeF1LnMZQ==",
+      "license": "MIT",
+      "optional": true,
+      "dependencies": {
+        "bl": "^4.0.3",
+        "end-of-stream": "^1.4.1",
+        "fs-constants": "^1.0.0",
+        "inherits": "^2.0.3",
+        "readable-stream": "^3.1.1"
+      },
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/tiny-inflate": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz",
+      "integrity": "sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==",
+      "license": "MIT"
+    },
+    "node_modules/tiny-invariant": {
+      "version": "1.3.3",
+      "resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz",
+      "integrity": "sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==",
+      "license": "MIT"
+    },
     "node_modules/tinyglobby": {
       "version": "0.2.15",
       "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
@@ -6145,6 +7732,39 @@
       "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
       "license": "0BSD"
     },
+    "node_modules/tsx": {
+      "version": "4.21.0",
+      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.21.0.tgz",
+      "integrity": "sha512-5C1sg4USs1lfG0GFb2RLXsdpXqBSEhAaA/0kPL01wxzpMqLILNxIxIOKiILz+cdg/pLnOUxFYOR5yhHU666wbw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "esbuild": "~0.27.0",
+        "get-tsconfig": "^4.7.5"
+      },
+      "bin": {
+        "tsx": "dist/cli.mjs"
+      },
+      "engines": {
+        "node": ">=18.0.0"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.3"
+      }
+    },
+    "node_modules/tunnel-agent": {
+      "version": "0.6.0",
+      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
+      "integrity": "sha512-McnNiV1l8RYeY8tBgEpuodCC1mLUdbSN+CYBL7kJsJNInOP8UjDDEwdk6Mw60vdLLrr5NHKZhMAOSrR2NZuQ+w==",
+      "license": "Apache-2.0",
+      "optional": true,
+      "dependencies": {
+        "safe-buffer": "^5.0.1"
+      },
+      "engines": {
+        "node": "*"
+      }
+    },
     "node_modules/type-check": {
       "version": "0.4.0",
       "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
@@ -6300,6 +7920,41 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/unicode-properties": {
+      "version": "1.4.1",
+      "resolved": "https://registry.npmjs.org/unicode-properties/-/unicode-properties-1.4.1.tgz",
+      "integrity": "sha512-CLjCCLQ6UuMxWnbIylkisbRj31qxHPAurvena/0iwSVbQ2G1VY5/HjV0IRabOEbDHlzZlRdCrD4NhB0JtU40Pg==",
+      "license": "MIT",
+      "dependencies": {
+        "base64-js": "^1.3.0",
+        "unicode-trie": "^2.0.0"
+      }
+    },
+    "node_modules/unicode-trie": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/unicode-trie/-/unicode-trie-2.0.0.tgz",
+      "integrity": "sha512-x7bc76x0bm4prf1VLg79uhAzKw8DVboClSN5VxJuQ+LKDOVEW9CdH+VY7SP+vX7xCYQqzzgQpFqz15zeLvAtZQ==",
+      "license": "MIT",
+      "dependencies": {
+        "pako": "^0.2.5",
+        "tiny-inflate": "^1.0.0"
+      }
+    },
+    "node_modules/unicode-trie/node_modules/pako": {
+      "version": "0.2.9",
+      "resolved": "https://registry.npmjs.org/pako/-/pako-0.2.9.tgz",
+      "integrity": "sha512-NUcwaKxUxWrZLpDG+z/xZaCgQITkA/Dv4V/T6bw7VON6l1Xz/VnrBqrYjZQ12TamKHzITTfOEIYUj48y2KXImA==",
+      "license": "MIT"
+    },
+    "node_modules/universalify": {
+      "version": "0.1.2",
+      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
+      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
+      "license": "MIT",
+      "engines": {
+        "node": ">= 4.0.0"
+      }
+    },
     "node_modules/unrs-resolver": {
       "version": "1.11.1",
       "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
@@ -6376,6 +8031,35 @@
         "punycode": "^2.1.0"
       }
     },
+    "node_modules/util-deprecate": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
+      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
+      "license": "MIT"
+    },
+    "node_modules/vite-compatible-readable-stream": {
+      "version": "3.6.1",
+      "resolved": "https://registry.npmjs.org/vite-compatible-readable-stream/-/vite-compatible-readable-stream-3.6.1.tgz",
+      "integrity": "sha512-t20zYkrSf868+j/p31cRIGN28Phrjm3nRSLR2fyc2tiWi4cZGVdv68yNlwnIINTkMTmPoMiSlc0OadaO7DXZaQ==",
+      "license": "MIT",
+      "dependencies": {
+        "inherits": "^2.0.3",
+        "string_decoder": "^1.1.1",
+        "util-deprecate": "^1.0.1"
+      },
+      "engines": {
+        "node": ">= 6"
+      }
+    },
+    "node_modules/warning": {
+      "version": "4.0.3",
+      "resolved": "https://registry.npmjs.org/warning/-/warning-4.0.3.tgz",
+      "integrity": "sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==",
+      "license": "MIT",
+      "dependencies": {
+        "loose-envify": "^1.0.0"
+      }
+    },
     "node_modules/which": {
       "version": "2.0.2",
       "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
@@ -6491,6 +8175,13 @@
         "node": ">=0.10.0"
       }
     },
+    "node_modules/wrappy": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
+      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
+      "license": "ISC",
+      "optional": true
+    },
     "node_modules/yallist": {
       "version": "3.1.1",
       "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
@@ -6511,6 +8202,12 @@
         "url": "https://github.com/sponsors/sindresorhus"
       }
     },
+    "node_modules/yoga-layout": {
+      "version": "3.2.1",
+      "resolved": "https://registry.npmjs.org/yoga-layout/-/yoga-layout-3.2.1.tgz",
+      "integrity": "sha512-0LPOt3AxKqMdFBZA3HBAt/t/8vIKq7VaQYbuA8WxCgung+p9TVyKRYdpvCb80HcdTN2NkbIKbhNwKUfm3tQywQ==",
+      "license": "MIT"
+    },
     "node_modules/zod": {
       "version": "4.3.6",
       "resolved": "https://registry.npmjs.org/zod/-/zod-4.3.6.tgz",

```

### package.json

```diff
diff --git a/package.json b/package.json
index ab97381..1005ff6 100644
--- a/package.json
+++ b/package.json
@@ -6,21 +6,31 @@
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
-    "lint": "eslint"
+    "lint": "eslint",
+    "simple-git": "tsx tasks/simple-git.ts main"
   },
   "dependencies": {
+    "@react-pdf/renderer": "^4.3.2",
+    "cleave.js": "^1.6.0",
+    "google-libphonenumber": "^3.2.44",
+    "log4js": "^6.9.1",
     "next": "16.1.6",
     "react": "19.2.3",
-    "react-dom": "19.2.3"
+    "react-dom": "19.2.3",
+    "react-pdf": "^9.2.1"
   },
   "devDependencies": {
     "@tailwindcss/postcss": "^4",
+    "@types/cleave.js": "^1.4.12",
+    "@types/google-libphonenumber": "^7.4.30",
     "@types/node": "^20",
     "@types/react": "^19",
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

### public/fonts/NotoSansJP-Bold.ttf

```diff
diff --git a/public/fonts/NotoSansJP-Bold.ttf b/public/fonts/NotoSansJP-Bold.ttf
new file mode 100644
index 0000000..26a47bb
Binary files /dev/null and b/public/fonts/NotoSansJP-Bold.ttf differ

```

### public/fonts/NotoSansJP-Regular.ttf

```diff
diff --git a/public/fonts/NotoSansJP-Regular.ttf b/public/fonts/NotoSansJP-Regular.ttf
new file mode 100644
index 0000000..d13df30
Binary files /dev/null and b/public/fonts/NotoSansJP-Regular.ttf differ

```

### public/pdf/README.pdf

```diff
diff --git a/public/pdf/README.pdf b/public/pdf/README.pdf
new file mode 100644
index 0000000..f765603
--- /dev/null
+++ b/public/pdf/README.pdf
@@ -0,0 +1,67 @@
+README.md  2026-01-27
+
+https://zakzakst.github.io/practice-ant-design/
+
+概要
+
+様々なUI/フォーム機能、アニメーション、データ可視化などの技術的な実装例を集約した学習・プラクティ
+ス⽤のデモアプリケーションです。
+
+使⽤技術
+
+フレームワーク・コア
+
+        Next.js 14
+        React 18
+        TypeScript
+        Tailwind CSS
+
+UI コンポーネント
+
+        Ant Design (antd)
+        shadcn/ui (Radix UI)
+        Lucide React
+
+フォーム・バリデーション
+
+        React Hook Form
+        Yup
+        Zod
+
+データ処理・API
+
+        SWR
+        Axios
+        Orval
+
+アニメーション・ビジュアル
+
+        Motion
+        anime.js
+        Lottie
+        React Flip Toolkit
+        Konva
+
+その他
+
+        TanStack React Table
+        dnd-kit
+        react-calendar
+        FullCalendar
+        @xyflow/react
+
+                                                                                  1/2
+README.md                               2026-01-27
+
+          react-markdown
+          date-fns
+
+ 起動⽅法
+
+ 必要な環境
+
+          Node.js
+          npm / yarn / pnpm / bun
+
+                                   2/2
+

```

### tasks/old/simple-git1.ts

```diff
diff --git a/tasks/old/simple-git1.ts b/tasks/old/simple-git1.ts
new file mode 100644
index 0000000..96b6fb7
--- /dev/null
+++ b/tasks/old/simple-git1.ts
@@ -0,0 +1,20 @@
+import simpleGit from "simple-git";
+
+const git = simpleGit();
+
+async function main() {
+  // const status = await git.status();
+  // console.log(status);
+
+  // 現在ブランチ
+  const branch = await git.branch();
+  console.log("current branch:", branch.current);
+
+  // developとの差分
+  const diff = await git.diff(["develop"]);
+
+  console.log("===== git diff develop =====");
+  console.log(diff);
+}
+
+main();

```

### tasks/simple-git.ts

```diff
diff --git a/tasks/simple-git.ts b/tasks/simple-git.ts
new file mode 100644
index 0000000..4cb61a3
--- /dev/null
+++ b/tasks/simple-git.ts
@@ -0,0 +1,78 @@
+import simpleGit from "simple-git";
+import fs from "fs";
+
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

### tsconfig.json

```diff
diff --git a/tsconfig.json b/tsconfig.json
index 3a13f90..4e424f9 100644
--- a/tsconfig.json
+++ b/tsconfig.json
@@ -1,7 +1,11 @@
 {
   "compilerOptions": {
     "target": "ES2017",
-    "lib": ["dom", "dom.iterable", "esnext"],
+    "lib": [
+      "dom",
+      "dom.iterable",
+      "esnext"
+    ],
     "allowJs": true,
     "skipLibCheck": true,
     "strict": true,
@@ -19,7 +23,9 @@
       }
     ],
     "paths": {
-      "@/*": ["./*"]
+      "@/*": [
+        "./*"
+      ]
     }
   },
   "include": [
@@ -28,7 +34,10 @@
     "**/*.tsx",
     ".next/types/**/*.ts",
     ".next/dev/types/**/*.ts",
-    "**/*.mts"
+    "**/*.mts",
+    ".next/dev/dev/types/**/*.ts"
   ],
-  "exclude": ["node_modules"]
+  "exclude": [
+    "node_modules"
+  ]
 }

```

## Please review

- バグの可能性
- 設計の違和感
- 可読性改善
- TypeScript観点の指摘
