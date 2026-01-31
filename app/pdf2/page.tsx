"use client";
import { useEffect, useState } from "react";
import { PDFViewer, Font, PDFDownloadLink } from "@react-pdf/renderer";
// import { Parts } from "./parts/Parts1";
import { Parts } from "./parts/Parts2";

Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: "/fonts/NotoSansJP-Regular.ttf",
    },
    {
      src: "/fonts/NotoSansJP-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const Page = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="p-4">
      <div className="h-screen">
        {loaded && (
          <>
            <PDFViewer width="100%" height="100%">
              <Parts />
            </PDFViewer>
            <PDFDownloadLink document={<Parts />} fileName={"parts.pdf"}>
              {({ loading }) =>
                loading ? "PDF生成中..." : "PDFをダウンロード"
              }
            </PDFDownloadLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
