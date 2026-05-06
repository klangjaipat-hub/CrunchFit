import { createContext, useContext, useReducer, useEffect, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  packId: string;
  packName: string;
  flavor: string;
  name: string;
  price: number;
  qty: number;
  type: 'one-time' | 'subscription';
}

export const PACKS = [
  {
    id: 'starter',
    name: 'Starter Pack',
    description: 'x 6 Pack',
    price: 390,
    originalPrice: 414,
    perks: [] as string[],
  },
  {
    id: 'office-survivor',
    name: 'Office Survivor',
    description: 'x 24 Pack',
    price: 1490,
    originalPrice: 1656,
    perks: ['Free Shipping', '1 Free Shaker'],
  },
] as const;

export const FLAVORS = ['Original Flavor', 'Spicy BBQ', 'Truffle'] as const;
export const SUBSCRIPTION_DISCOUNT = 0.15;

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QTY'; payload: { id: string; qty: number } }
  | { type: 'CLEAR_CART' };

export interface ModalPreset {
  packId?: string;
  type?: 'one-time' | 'subscription';
}

interface CartContextValue {
  items: CartItem[];
  totalQty: number;
  subtotal: number;
  hasSubscription: boolean;
  isDrawerOpen: boolean;
  isModalOpen: boolean;
  modalPreset: ModalPreset;
  openDrawer: () => void;
  closeDrawer: () => void;
  openModal: (preset?: ModalPreset) => void;
  closeModal: () => void;
  addItem: (item: CartItem) => 'ok' | 'volume-limit';
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => 'ok' | 'volume-limit';
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function cartReducer(items: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = items.find(i => i.id === action.payload.id);
      if (existing) {
        return items.map(i =>
          i.id === action.payload.id ? { ...i, qty: i.qty + action.payload.qty } : i
        );
      }
      return [...items, action.payload];
    }
    case 'REMOVE_ITEM':
      return items.filter(i => i.id !== action.payload);
    case 'UPDATE_QTY':
      if (action.payload.qty <= 0) return items.filter(i => i.id !== action.payload.id);
      return items.map(i =>
        i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
      );
    case 'CLEAR_CART':
      return [];
    default:
      return items;
  }
}

const STORAGE_KEY = 'crunchfit-cart-v1';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<ModalPreset>({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const hasSubscription = items.some(i => i.type === 'subscription');

  const addItem = (item: CartItem): 'ok' | 'volume-limit' => {
    const existing = items.find(i => i.id === item.id);
    if ((existing?.qty ?? 0) + item.qty > 100) return 'volume-limit';
    dispatch({ type: 'ADD_ITEM', payload: item });
    return 'ok';
  };

  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id });

  const updateQty = (id: string, qty: number): 'ok' | 'volume-limit' => {
    if (qty > 100) return 'volume-limit';
    dispatch({ type: 'UPDATE_QTY', payload: { id, qty } });
    return 'ok';
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalQty,
        subtotal,
        hasSubscription,
        isDrawerOpen,
        isModalOpen,
        modalPreset,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        openModal: (preset = {}) => {
          setModalPreset(preset);
          setIsModalOpen(true);
        },
        closeModal: () => setIsModalOpen(false),
        addItem,
        removeItem,
        updateQty,
        clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
