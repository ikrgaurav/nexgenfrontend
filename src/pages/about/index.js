import AboutUs from '@/components/AboutUs'
import React from 'react'
import { useTranslation } from '../../context/TranslationContext';

const HomePage = () => {
  const { getTranslatedText } = useTranslation();

  return (
    <>
      <AboutUs />
    </>
  )
}

export default HomePage;
