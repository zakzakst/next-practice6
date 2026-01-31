### app/\_sample/page.tsx

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

### app/\_sample/parts/Parts1.tsx

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

### app/\_sample/parts/\_Parts.tsx

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
