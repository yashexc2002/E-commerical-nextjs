import dynamic from 'next/dynamic';

const LegacyShopvillaApp = dynamic(() => import('../frontend/src/App'), {
  ssr: false,
});

export default function ShopvillaPage() {
  return <LegacyShopvillaApp />;
}
