'use client';
import { useState } from 'react';
import { Document, Page as PdfPage, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Page = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/pdf/README.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <PdfPage pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button type='button' onClick={() => setPageNumber(1)}>1</button>
      <button type='button' onClick={() => setPageNumber(2)}>2</button>
    </div>
  );
}

export default Page;