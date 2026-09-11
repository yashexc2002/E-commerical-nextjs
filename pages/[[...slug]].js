import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { AuthProvider } from '../frontend/src/context/AuthContext';
import { store } from '../frontend/src/redux/store';

const LegacyShopvillaApp = dynamic(() => import('../frontend/src/App'), {
  ssr: false,
});

export default function ShopvillaPage() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <LegacyShopvillaApp />
      </AuthProvider>
    </Provider>
  );
}
