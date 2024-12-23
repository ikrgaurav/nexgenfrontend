// pages/index.js
import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import Carousel from '@/components/Home/Caraousel';
import ProductHighlights from '@/components/Home/ProductHighlights';
import CategoriesGrid from '@/components/Home/ProductsforHome';
import ProductShowcase from '@/components/Home/ProductShowcase';
import CustomerFirst from '@/components/Home/CustomerFirst';
import BrandPartnerBand from '@/components/Home/BrandPartner';

const HomePage = () => {
  const { getTranslatedText } = useTranslation();

  return (
    <>
    <Carousel/>
    <ProductHighlights/>
    <BrandPartnerBand/>
    <CategoriesGrid/>
    <ProductShowcase/>
    <CustomerFirst/>
    </>
  );
};

export default HomePage;
