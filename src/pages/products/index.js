// pages/catalog.js
import React from 'react';
import PDFViewer from '@/components/ProductPdf';

const CatalogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Your existing Navbar component */}
      {/* <Navbar /> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Catalog</h1>
        <PDFViewer fileUrl="/nexgenproducts.pdf" fileName="nexgenproducts.pdf" />
      </main>

      {/* Your existing Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default CatalogPage;
