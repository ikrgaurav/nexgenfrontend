// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TranslationProvider } from '../context/TranslationContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.location.reload(); // Force reload on route change
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <TranslationProvider>
      <Navbar />
      <main className="min-h-screen p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </TranslationProvider>
  );
}

export default MyApp;
