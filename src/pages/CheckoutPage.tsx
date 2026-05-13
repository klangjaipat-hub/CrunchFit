import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { ChevronLeft, ShoppingBag, Tag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

// --- Tax Logic ---
const TAX_RATES: Record<string, { rate: number; label: string }> = {
  Bangkok: { rate: 0.07, label: 'VAT 7%' },
  'Chiang Mai': { rate: 0.09, label: 'VAT 7% + 2% Provincial' },
  'Chon Buri': { rate: 0.085, label: 'VAT 7% + 1.5% Provincial' },
  Phuket: { rate: 0.08, label: 'VAT 7% + 1% Provincial' },
};

function getTax(province: string, subtotal: number) {
  const entry = TAX_RATES[province] ?? { rate: 0.07, label: 'VAT 7%' };
  return { amount: Math.round(subtotal * entry.rate), label: entry.label };
}

// --- Promo Codes ---
const PROMO_CODES: Record<
  string,
  { type: 'percent' | 'fixed'; value: number; label: string }
> = {
  CRUNCH10: { type: 'percent', value: 0.1, label: '10% off' },
  WELCOME15: { type: 'percent', value: 0.15, label: '15% off' },
  STAFF20: { type: 'percent', value: 0.2, label: '20% off' },
  SAVE50: { type: 'fixed', value: 50, label: '฿50 off' },
};

const THAI_PROVINCES = [
  'Bangkok',
  'Chiang Mai',
  'Chon Buri',
  'Phuket',
  'Nonthaburi',
  'Pathum Thani',
  'Samut Prakan',
  'Khon Kaen',
  'Nakhon Ratchasima',
  'Udon Thani',
  'Ayutthaya',
  'Other',
];

type PaymentMethod = 'bank-transfer' | 'qr-code' | 'credit-card';

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

const inputCls =
  "w-full border border-black rounded-[10px] px-4 py-2.5 font-['Nunito'] text-black focus:outline-none focus:ring-2 focus:ring-[#d4ff47] bg-white";

const labelCls = "font-['Nunito'] font-bold text-sm text-black/60 block mb-1";
const errorCls = "font-['Nunito'] text-xs text-[#FF5A4B] mt-1";

export default function CheckoutPage() {
  const { items, subtotal, hasSubscription, clearCart } = useCart();
  const navigate = useNavigate();

  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    type: 'percent' | 'fixed';
    value: number;
    label: string;
  } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    hasSubscription ? 'credit-card' : 'bank-transfer'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutForm>({ defaultValues: { province: 'Bangkok' } });

  const watchProvince = watch('province', 'Bangkok');
  const tax = getTax(watchProvince, subtotal);
  const promoDiscount = appliedPromo
    ? appliedPromo.type === 'percent'
      ? Math.round(subtotal * appliedPromo.value)
      : Math.min(appliedPromo.value, subtotal)
    : 0;
  const total = subtotal + tax.amount - promoDiscount;

  const applyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    const promo = PROMO_CODES[code];
    if (!promo) {
      setPromoError('Invalid promo code');
      setAppliedPromo(null);
      return;
    }
    setAppliedPromo({ code, ...promo });
    setPromoError('');
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    clearCart();
    toast.success('Receipt emailed! Thank you for your order. 🎉', { duration: 5000 });
    navigate('/thank-you');
  };

  if (items.length === 0 && !isSubmitting) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <ShoppingBag className="w-16 h-16 text-black/20" />
        <p className="font-['Anton'] text-2xl text-black uppercase">Your cart is empty</p>
        <button onClick={() => navigate('/')} className="font-['Nunito'] font-bold text-black underline">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-black/10 px-4 sm:px-6 lg:px-10 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="font-['Anton'] text-2xl text-black uppercase tracking-wide">Checkout</h1>
      </nav>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-14 h-14 border-4 border-black/10 border-t-[#d4ff47] rounded-full"
            />
            <p className="font-['Anton'] text-2xl text-black uppercase">Processing your order…</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12"
        >
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <section className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6">
              <h2 className="font-['Anton'] text-xl text-black uppercase mb-5">Contact Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>First Name *</label>
                  <input
                    {...register('firstName', {
                      required: 'Required',
                      minLength: { value: 2, message: 'Min 2 chars' },
                    })}
                    className={inputCls}
                  />
                  {errors.firstName && <p className={errorCls}>{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Last Name *</label>
                  <input
                    {...register('lastName', {
                      required: 'Required',
                      minLength: { value: 2, message: 'Min 2 chars' },
                    })}
                    className={inputCls}
                  />
                  {errors.lastName && <p className={errorCls}>{errors.lastName.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Email *</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                    })}
                    className={inputCls}
                  />
                  {errors.email && <p className={errorCls}>{errors.email.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Phone *</label>
                  <input
                    type="tel"
                    placeholder="08X-XXX-XXXX"
                    {...register('phone', {
                      required: 'Required',
                      minLength: { value: 9, message: 'Min 9 digits' },
                    })}
                    className={inputCls}
                  />
                  {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6">
              <h2 className="font-['Anton'] text-xl text-black uppercase mb-5">Shipping Address</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className={labelCls}>Street Address *</label>
                  <input
                    placeholder="123 Street, Apt/Floor"
                    {...register('address', { required: 'Required' })}
                    className={inputCls}
                  />
                  {errors.address && <p className={errorCls}>{errors.address.message}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>City / District *</label>
                    <input
                      {...register('city', { required: 'Required' })}
                      className={inputCls}
                    />
                    {errors.city && <p className={errorCls}>{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Province *</label>
                    <select
                      {...register('province', { required: 'Required' })}
                      className={inputCls}
                    >
                      {THAI_PROVINCES.map(p => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.province && <p className={errorCls}>{errors.province.message}</p>}
                  </div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6">
              <h2 className="font-['Anton'] text-xl text-black uppercase mb-5">Payment Method</h2>

              {hasSubscription && (
                <div className="mb-4 p-3 bg-[#d4ff47] rounded-[10px] border border-black flex items-start gap-2">
                  <span className="text-base">💳</span>
                  <p className="font-['Nunito'] font-bold text-sm text-black">
                    Subscription orders require Credit/Debit Card.
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-3 mb-5">
                {(
                  [
                    { id: 'bank-transfer', label: 'Bank Transfer', desc: 'Transfer to our KBank account', icon: '🏦' },
                    { id: 'qr-code', label: 'QR Code / PromptPay', desc: 'Scan & pay instantly', icon: '📱' },
                    { id: 'credit-card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, JCB', icon: '💳' },
                  ] as const
                ).map(method => {
                  const locked = hasSubscription && method.id !== 'credit-card';
                  return (
                    <label
                      key={method.id}
                      className={[
                        'flex items-center gap-4 p-4 rounded-[14px] border-2 transition-all',
                        paymentMethod === method.id
                          ? 'border-black bg-[#d4ff47]'
                          : 'border-black/20 hover:border-black/50 bg-white',
                        locked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                      ].join(' ')}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        checked={paymentMethod === method.id}
                        onChange={() => !locked && setPaymentMethod(method.id)}
                        readOnly={locked}
                      />
                      <span className="text-2xl leading-none">{method.icon}</span>
                      <div className="flex-1">
                        <p className="font-['Nunito'] font-bold text-black">{method.label}</p>
                        <p className="font-['Nunito'] text-sm text-black/60">{method.desc}</p>
                      </div>
                      {paymentMethod === method.id && (
                        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#d4ff47]" />
                        </div>
                      )}
                    </label>
                  );
                })}
              </div>

              {/* Bank Transfer Details */}
              {paymentMethod === 'bank-transfer' && (
                <div className="bg-gray-50 rounded-[14px] p-4 border border-black/10 flex flex-col gap-1">
                  <p className="font-['Nunito'] font-bold text-sm text-black mb-1">Transfer to:</p>
                  {[
                    ['Bank', 'Kasikorn Bank (KBank)'],
                    ['Account No.', '123-4-56789-0'],
                    ['Account Name', 'CrunchFit Co., Ltd.'],
                  ].map(([k, v]) => (
                    <p key={k} className="font-['Nunito'] text-sm text-black/70">
                      {k}: <span className="font-bold text-black">{v}</span>
                    </p>
                  ))}
                  <p className="font-['Nunito'] text-xs text-black/40 mt-2">
                    Send proof of transfer to LINE: @crunchfit
                  </p>
                </div>
              )}

              {/* QR Code */}
              {paymentMethod === 'qr-code' && (
                <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-[14px] border border-black/10">
                  <div className="w-40 h-40 border-2 border-black rounded-[10px] bg-white flex items-center justify-center p-3">
                    {/* Mock QR grid */}
                    <svg viewBox="0 0 70 70" className="w-full h-full">
                      {Array.from({ length: 7 }, (_, r) =>
                        Array.from({ length: 7 }, (_, c) => {
                          const isCorner =
                            (r < 3 && c < 3) ||
                            (r < 3 && c > 3) ||
                            (r > 3 && c < 3);
                          const fill = isCorner
                            ? 'black'
                            : (r * 7 + c) % 3 === 0
                            ? 'black'
                            : 'transparent';
                          return (
                            <rect
                              key={`${r}-${c}`}
                              x={r * 10}
                              y={c * 10}
                              width={9}
                              height={9}
                              fill={fill}
                              rx={1}
                            />
                          );
                        })
                      )}
                    </svg>
                  </div>
                  <p className="font-['Nunito'] font-bold text-black">Scan with your banking app</p>
                  <p className="font-['Nunito'] text-sm text-black/50">PromptPay: 0812345678</p>
                </div>
              )}

              {/* Credit Card Form */}
              {paymentMethod === 'credit-card' && (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className={labelCls}>Card Number *</label>
                    <input
                      placeholder="1234 5678 9012 3456"
                      maxLength={16}
                      {...register('cardNumber', {
                        validate: v => {
                          if (paymentMethod !== 'credit-card') return true;
                          if (!v) return 'Required';
                          if (!/^\d{16}$/.test(v)) return '16 digits required';
                          return true;
                        },
                      })}
                      className={inputCls}
                    />
                    {errors.cardNumber && <p className={errorCls}>{errors.cardNumber.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Name on Card *</label>
                    <input
                      placeholder="Full name as on card"
                      {...register('cardName', {
                        validate: v => {
                          if (paymentMethod !== 'credit-card') return true;
                          return !!v || 'Required';
                        },
                      })}
                      className={inputCls}
                    />
                    {errors.cardName && <p className={errorCls}>{errors.cardName.message}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Expiry *</label>
                      <input
                        placeholder="MM/YY"
                        maxLength={5}
                        {...register('cardExpiry', {
                          validate: v => {
                            if (paymentMethod !== 'credit-card') return true;
                            if (!v) return 'Required';
                            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(v))
                              return 'Use MM/YY format';
                            return true;
                          },
                        })}
                        className={inputCls}
                      />
                      {errors.cardExpiry && <p className={errorCls}>{errors.cardExpiry.message}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>CVV *</label>
                      <input
                        placeholder="•••"
                        maxLength={4}
                        type="password"
                        {...register('cardCvv', {
                          validate: v => {
                            if (paymentMethod !== 'credit-card') return true;
                            if (!v) return 'Required';
                            if (!/^\d{3,4}$/.test(v)) return '3–4 digits';
                            return true;
                          },
                        })}
                        className={inputCls}
                      />
                      {errors.cardCvv && <p className={errorCls}>{errors.cardCvv.message}</p>}
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* ── Right Column – Order Summary ── */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6 lg:sticky lg:top-24">
              <h2 className="font-['Anton'] text-xl text-black uppercase mb-4">Order Summary</h2>

              {/* Line items */}
              <div className="flex flex-col gap-3 mb-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-['Nunito'] font-bold text-sm text-black leading-tight">
                        {item.packName}
                      </p>
                      <p className="font-['Nunito'] text-xs text-black/50">
                        {item.flavor} × {item.qty}
                      </p>
                      {item.type === 'subscription' && (
                        <span className="inline-block px-1.5 py-0.5 bg-black text-[#d4ff47] rounded text-xs font-['Nunito'] font-bold mt-0.5">
                          SUB
                        </span>
                      )}
                    </div>
                    <p className="font-['Nunito'] font-bold text-black whitespace-nowrap">
                      ฿{(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-black/10 pt-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="font-['Nunito'] text-black/60">Subtotal</p>
                  <p className="font-['Nunito'] font-bold text-black">฿{subtotal.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-['Nunito'] text-black/60">{tax.label}</p>
                  <p className="font-['Nunito'] font-bold text-black">฿{tax.amount.toLocaleString()}</p>
                </div>
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <p className="font-['Nunito']">Promo ({appliedPromo?.label})</p>
                    <p className="font-['Nunito'] font-bold">−฿{promoDiscount.toLocaleString()}</p>
                  </div>
                )}
              </div>

              {/* Promo Code */}
              <div className="border-t border-black/10 pt-4 mt-4 flex flex-col gap-2">
                <label className="font-['Nunito'] font-bold text-sm text-black/60 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    value={promoInput}
                    onChange={e => setPromoInput(e.target.value.toUpperCase())}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), applyPromo())}
                    placeholder="CRUNCH10"
                    className="flex-1 border border-black rounded-[10px] px-3 py-2 font-['Nunito'] text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#d4ff47] bg-white"
                  />
                  <button
                    type="button"
                    onClick={applyPromo}
                    className="px-4 py-2 bg-black text-[#d4ff47] rounded-[10px] font-['Nunito'] font-bold text-sm hover:opacity-80 transition-opacity"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="font-['Nunito'] text-xs text-[#FF5A4B]">{promoError}</p>}
                {appliedPromo && (
                  <div className="flex items-center justify-between">
                    <p className="font-['Nunito'] text-xs text-green-600 font-bold">
                      ✓ {appliedPromo.label} applied!
                    </p>
                    <button
                      type="button"
                      onClick={() => { setAppliedPromo(null); setPromoInput(''); }}
                      className="text-black/40 hover:text-black transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-black pt-4 mt-4 flex justify-between items-center">
                <p className="font-['Anton'] text-xl text-black">TOTAL</p>
                <p className="keep-anton font-['Anton'] text-3xl text-black">฿{total.toLocaleString()}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-5 bg-[#d4ff47] rounded-[32px] py-4 font-['Nunito'] font-bold text-xl text-black shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Order
              </motion.button>

              <p className="font-['Nunito'] text-xs text-black/30 text-center mt-3">
                Guest checkout · No account needed
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
