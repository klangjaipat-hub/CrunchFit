import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartButton() {
  const { totalQty, openDrawer } = useCart();

  return (
    <motion.button
      onClick={openDrawer}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 bg-black text-white rounded-full px-5 py-3 shadow-[4px_4px_0px_0px_#d4ff47] hover:shadow-[6px_6px_0px_0px_#d4ff47] transition-shadow"
    >
      <ShoppingCart className="w-5 h-5" />
      <span className="font-['Nunito'] font-bold text-sm">Cart</span>
      <AnimatePresence>
        {totalQty > 0 && (
          <motion.span
            key={totalQty}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-[#d4ff47] text-black text-xs font-['Nunito'] font-bold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center"
          >
            {totalQty > 99 ? '99+' : totalQty}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
