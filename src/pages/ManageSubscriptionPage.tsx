import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, CreditCard, Calendar, Package, AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../app/components/ui/dialog';

const MOCK_SUB = {
  plan: 'Office Survivor – Spicy BBQ',
  status: 'Active',
  nextBillingDate: 'June 6, 2026',
  amount: '฿1,267 / month',
  cardBrand: 'Visa',
  cardLast4: '4242',
  startedDate: 'May 6, 2026',
};

const inputCls =
  "w-full border border-black rounded-[10px] px-4 py-2.5 font-['Nunito'] text-black focus:outline-none focus:ring-2 focus:ring-[#d4ff47] bg-white";
const labelCls = "font-['Nunito'] font-bold text-sm text-black/60 block mb-1";

export default function ManageSubscriptionPage() {
  const navigate = useNavigate();
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [cardUpdated, setCardUpdated] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-black/10 px-4 sm:px-6 lg:px-10 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="font-['Anton'] text-2xl text-black uppercase tracking-wide">
          Manage Subscription
        </h1>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col gap-6">
        {/* Status Banner */}
        {cancelled ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FF5A4B]/10 border border-[#FF5A4B] rounded-[14px] p-4 flex items-start gap-3"
          >
            <AlertTriangle className="w-5 h-5 text-[#FF5A4B] shrink-0 mt-0.5" />
            <p className="font-['Nunito'] font-bold text-[#FF5A4B]">
              Subscription cancelled. You will not be billed next cycle.
            </p>
          </motion.div>
        ) : (
          <div className="bg-[#d4ff47] border border-black rounded-[14px] p-4 flex items-center gap-3 shadow-[2px_2px_0px_0px_black]">
            <span className="w-3 h-3 bg-green-500 rounded-full shrink-0" />
            <p className="font-['Nunito'] font-bold text-black">Subscription Active</p>
          </div>
        )}

        {/* Plan Card */}
        <div className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6 flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-black rounded-[10px] flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 text-[#d4ff47]" />
            </div>
            <div>
              <p className="font-['Nunito'] font-bold text-xs text-black/40 uppercase tracking-widest mb-0.5">
                Current Plan
              </p>
              <p className="font-['Anton'] text-xl text-black">{MOCK_SUB.plan}</p>
              <p className="font-['Nunito'] text-sm text-black/50">Started {MOCK_SUB.startedDate}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-[14px] p-4 border border-black/10 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-black/40 shrink-0 mt-0.5" />
              <div>
                <p className="font-['Nunito'] text-xs text-black/40 uppercase tracking-wider mb-0.5">
                  Next Billing
                </p>
                <p className="font-['Nunito'] font-bold text-black">{MOCK_SUB.nextBillingDate}</p>
                <p className="font-['Nunito'] text-sm text-black/60">{MOCK_SUB.amount}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[14px] p-4 border border-black/10 flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-black/40 shrink-0 mt-0.5" />
              <div>
                <p className="font-['Nunito'] text-xs text-black/40 uppercase tracking-wider mb-0.5">
                  Payment Method
                </p>
                <p className="font-['Nunito'] font-bold text-black">
                  {cardUpdated ? 'Updated Card' : MOCK_SUB.cardBrand} •••• {MOCK_SUB.cardLast4}
                </p>
                {cardUpdated && (
                  <p className="font-['Nunito'] text-xs text-green-600 font-bold mt-0.5">
                    ✓ New card on file
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsCardModalOpen(true)}
            disabled={cancelled}
            className="flex-1 flex items-center justify-center gap-2 bg-[#d4ff47] border border-black rounded-[32px] py-4 font-['Nunito'] font-bold text-black shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-shadow disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <CreditCard className="w-5 h-5" />
            Update Card on File
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsCancelModalOpen(true)}
            disabled={cancelled}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-black rounded-[32px] py-4 font-['Nunito'] font-bold text-black hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Cancel Subscription
          </motion.button>
        </div>

        <p className="font-['Nunito'] text-sm text-black/40 text-center">
          Questions?{' '}
          <a href="mailto:support@crunchfit.co" className="underline">
            support@crunchfit.co
          </a>
        </p>
      </div>

      {/* ── Update Card Modal ── */}
      <Dialog open={isCardModalOpen} onOpenChange={setIsCardModalOpen}>
        <DialogContent className="max-w-md p-0 rounded-[20px] border border-black shadow-[4px_4px_0px_0px_black] gap-0">
          <div className="p-6 flex flex-col gap-5">
            <DialogHeader>
              <DialogTitle className="font-['Anton'] text-2xl text-black uppercase">
                Update Card on File
              </DialogTitle>
              <DialogDescription className="font-['Nunito'] text-black/50">
                Your new card will be charged on the next billing cycle.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4">
              <div>
                <label className={labelCls}>Card Number</label>
                <input placeholder="•••• •••• •••• ••••" maxLength={16} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Name on Card</label>
                <input placeholder="Full name" className={inputCls} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Expiry</label>
                  <input placeholder="MM/YY" maxLength={5} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>CVV</label>
                  <input placeholder="•••" maxLength={4} type="password" className={inputCls} />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCardUpdated(true);
                setIsCardModalOpen(false);
              }}
              className="w-full bg-[#d4ff47] rounded-[32px] py-3.5 font-['Nunito'] font-bold text-lg text-black shadow-[3px_3px_0px_0px_black]"
            >
              Save New Card
            </motion.button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Cancel Confirm Modal ── */}
      <Dialog open={isCancelModalOpen} onOpenChange={setIsCancelModalOpen}>
        <DialogContent className="max-w-md p-0 rounded-[20px] border border-black shadow-[4px_4px_0px_0px_black] gap-0">
          <div className="p-6 flex flex-col gap-5">
            <DialogHeader>
              <DialogTitle className="font-['Anton'] text-2xl text-black uppercase">
                Cancel Subscription?
              </DialogTitle>
              <DialogDescription className="font-['Nunito'] text-black/60">
                You'll lose your 15% discount and the subscription ends after the current billing
                period. This action cannot be undone.
              </DialogDescription>
            </DialogHeader>

            <div className="flex gap-3">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsCancelModalOpen(false)}
                className="flex-1 border-2 border-black rounded-[32px] py-3 font-['Nunito'] font-bold text-black hover:bg-gray-50 transition-colors"
              >
                Keep It
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setCancelled(true);
                  setIsCancelModalOpen(false);
                }}
                className="flex-1 bg-[#FF5A4B] rounded-[32px] py-3 font-['Nunito'] font-bold text-white"
              >
                Yes, Cancel
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
