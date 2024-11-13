// components/PDFViewer.js
import React from 'react';

const PDFViewer = ({ fileUrl, fileName }) => {
  return (
    <div className="w-full">
      {/* Embedded PDF - Visible on Medium and Larger Screens */}
      <div className="hidden md:block w-full h-[80vh]">
        <embed
          src={fileUrl}
          type="application/pdf"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Download Button - Visible on Small Screens */}
      <div className="block md:hidden flex justify-center items-center h-[80vh]">
        <a
          href={fileUrl}
          download={fileName}
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Download Catalog"
        >
          Download Catalog
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
