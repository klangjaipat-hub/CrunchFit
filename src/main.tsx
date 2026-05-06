import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'sonner';
import App from './app/App.tsx';
import CheckoutPage from './pages/CheckoutPage.tsx';
import ThankYouPage from './pages/ThankYouPage.tsx';
import ManageSubscriptionPage from './pages/ManageSubscriptionPage.tsx';
import { CartProvider } from './context/CartContext.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import PackageSelectionModal from './components/PackageSelectionModal.tsx';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/manage-subscription" element={<ManageSubscriptionPage />} />
      </Routes>
      <CartDrawer />
      <PackageSelectionModal />
      <Toaster richColors position="top-center" />
    </CartProvider>
  </BrowserRouter>
);
