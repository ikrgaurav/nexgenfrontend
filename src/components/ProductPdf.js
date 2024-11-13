import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <main className="flex justify-center items-center h-screen">
      <embed
        src={pdfUrl}
        type="application/pdf"
        width="100%"
        height="100%"
        className="w-full h-full"
      />
    </main>
  );
};

export default PdfViewer;
