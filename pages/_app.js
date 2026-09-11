import '../frontend/src/styles/global.css';
import '../frontend/src/styles/navbar.css';
import '../frontend/src/styles/product.css';
import '../frontend/src/styles/cart.css';
import '../frontend/src/styles/auth.css';
import Head from 'next/head';

export default function ShopvillaApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shopvilla | E-commerce Platform</title>
        <meta name="description" content="Shopvilla | Your everyday shopping destination" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
