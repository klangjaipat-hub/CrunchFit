import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, Trash2, X, ShoppingBag } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerClose,
} from '../app/components/ui/drawer';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQty, subtotal, totalQty } =
    useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeDrawer();
    navigate('/checkout');
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={open => !open && closeDrawer()} direction="right">
      <DrawerContent className="flex flex-col h-full max-h-screen">
        {/* Header */}
        <div className="border-b border-black/10 px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-['Anton'] text-xl text-black uppercase tracking-wide">
              Your Cart
            </span>
            {totalQty > 0 && (
              <span className="bg-[#d4ff47] text-black text-xs font-['Nunito'] font-bold px-2 py-0.5 rounded-full border border-black">
                {totalQty}
              </span>
            )}
          </div>
          <DrawerClose asChild>
            <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DrawerClose>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 gap-3 text-center">
              <ShoppingBag className="w-10 h-10 text-black/20" />
              <p className="font-['Nunito'] text-base text-black/40">Your cart is empty</p>
              <button
                onClick={closeDrawer}
                className="font-['Nunito'] font-bold text-sm text-black underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <AnimatePresence initial={false}>
              <div className="flex flex-col gap-3">
                {items.map(item => {
                  const atLimit = item.qty >= 100;
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      className="bg-white border border-black rounded-[14px] p-4 shadow-[2px_2px_0px_0px_black]"
                    >
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-['Nunito'] font-bold text-sm text-black leading-tight">
                            {item.packName}
                          </p>
                          <p className="font-['Nunito'] text-xs text-black/60">{item.flavor}</p>
                          <span
                            className={[
                              'inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-["Nunito"] font-bold',
                              item.type === 'subscription'
                                ? 'bg-black text-[#d4ff47]'
                                : 'bg-gray-100 text-black/60',
                            ].join(' ')}
                          >
                            {item.type === 'subscription' ? 'Monthly Sub' : 'One-Time'}
                          </span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 rounded-full hover:bg-red-50 text-black/30 hover:text-red-500 transition-colors shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-['Nunito'] font-bold text-base w-7 text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            disabled={atLimit}
                            className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-['Anton'] text-lg text-black">
                          ฿{(item.price * item.qty).toLocaleString()}
                        </p>
                      </div>

                      {atLimit && (
                        <div className="mt-3 p-3 bg-[#d4ff47] rounded-[10px] border border-black">
                          <p className="font-['Nunito'] font-bold text-xs text-black">
                            Max 100 units reached.
                          </p>
                          <a
                            href="mailto:contact@crunchfit.co"
                            className="font-['Nunito'] text-xs text-black underline"
                          >
                            Contact Staff for Volume Billing →
                          </a>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-black/10 px-5 py-4 flex flex-col gap-3 shrink-0">
            <div className="flex justify-between items-center">
              <p className="font-['Nunito'] text-base text-black/60">Subtotal</p>
              <p className="font-['Anton'] text-2xl text-black">฿{subtotal.toLocaleString()}</p>
            </div>
            <p className="font-['Nunito'] text-xs text-black/40">
              Taxes &amp; shipping calculated at checkout
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full bg-[#d4ff47] rounded-[32px] py-4 font-['Nunito'] font-bold text-lg text-black shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-shadow"
            >
              Proceed to Checkout →
            </motion.button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}
