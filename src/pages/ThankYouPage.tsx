import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Settings } from 'lucide-react';

export default function ThankYouPage() {
  const navigate = useNavigate();
  const orderNumber = useMemo(
    () => `CF-${Math.floor(100000 + Math.random() * 900000)}`,
    []
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-8 text-center max-w-md w-full"
      >
        {/* Success badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
          className="w-24 h-24 bg-[#d4ff47] rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_black]"
        >
          <CheckCircle2 className="w-12 h-12 text-black" strokeWidth={1.5} />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <h1 className="font-['Anton'] text-4xl sm:text-5xl text-black uppercase tracking-wide">
            Order Confirmed!
          </h1>
          <p className="font-['Nunito'] text-lg text-black/60">
            Your receipt has been emailed to you.
          </p>
          <div className="mt-1 px-5 py-3 bg-gray-50 rounded-[14px] border border-black/10">
            <p className="font-['Nunito'] text-sm text-black/40 mb-0.5">Order number</p>
            <p className="font-['Nunito'] font-bold text-black text-lg">{orderNumber}</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 w-full"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/manage-subscription')}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-black rounded-[32px] py-3.5 font-['Nunito'] font-bold text-black hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-4 h-4" />
            Manage Subscription
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="flex-1 flex items-center justify-center gap-2 bg-[#d4ff47] rounded-[32px] py-3.5 font-['Nunito'] font-bold text-black shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-shadow"
          >
            Back to Shop <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
