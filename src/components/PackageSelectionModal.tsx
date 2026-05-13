import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../app/components/ui/dialog';
import { useCart, PACKS, FLAVORS, SUBSCRIPTION_DISCOUNT, CartItem } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function PackageSelectionModal() {
  const { isModalOpen, closeModal, modalPreset, addItem, openDrawer } = useCart();
  const { t } = useLanguage();

  const [selectedPackId, setSelectedPackId] = useState<string>('starter');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Original Flavor');
  const [selectedType, setSelectedType] = useState<'one-time' | 'subscription'>('one-time');
  const [volumeWarning, setVolumeWarning] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setSelectedPackId(modalPreset.packId ?? 'starter');
      setSelectedType(modalPreset.type ?? 'one-time');
      setSelectedFlavor('Original Flavor');
      setVolumeWarning(false);
    }
  }, [isModalOpen, modalPreset]);

  const selectedPack = PACKS.find(p => p.id === selectedPackId) ?? PACKS[0];
  const basePrice = selectedPack.price;
  const finalPrice =
    selectedType === 'subscription'
      ? Math.round(basePrice * (1 - SUBSCRIPTION_DISCOUNT))
      : basePrice;
  const savings = basePrice - finalPrice;

  const packLocked = !!modalPreset.packId;

  const handleAddToCart = () => {
    const item: CartItem = {
      id: `${selectedPackId}-${selectedFlavor}-${selectedType}`,
      packId: selectedPackId,
      packName: selectedPack.name,
      flavor: selectedFlavor,
      name: `${selectedPack.name} – ${selectedFlavor}`,
      price: finalPrice,
      qty: 1,
      type: selectedType,
    };
    const result = addItem(item);
    if (result === 'volume-limit') {
      setVolumeWarning(true);
      return;
    }
    closeModal();
    openDrawer();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={open => !open && closeModal()}>
      <DialogContent className="max-w-lg p-0 overflow-hidden rounded-[20px] border border-black shadow-[4px_4px_0px_0px_black] gap-0">
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-['Anton'] text-3xl text-black uppercase tracking-wide">
              {t('modal_title')}
            </DialogTitle>
          </DialogHeader>

          {/* Pack Selection */}
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito'] font-bold text-xs text-black/50 uppercase tracking-widest">
              {t('modal_label_pack')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {PACKS.map(pack => {
                const isSelected = selectedPackId === pack.id;
                const isDisabled = packLocked && !isSelected;
                return (
                  <motion.button
                    key={pack.id}
                    whileTap={isDisabled ? {} : { scale: 0.97 }}
                    onClick={() => !isDisabled && setSelectedPackId(pack.id)}
                    className={[
                      'relative p-4 rounded-[14px] border-2 text-left transition-all duration-150',
                      isSelected
                        ? 'border-black bg-[#d4ff47] shadow-[3px_3px_0px_0px_black]'
                        : 'border-black/20 bg-white hover:border-black/60',
                      isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                    ].join(' ')}
                  >
                    {isSelected && (
                      <span className="absolute top-2 right-2">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </span>
                    )}
                    <p className="font-['Anton'] text-lg text-black leading-tight">{pack.name}</p>
                    <p className="font-['Nunito'] text-sm text-black/60">
                      {pack.id === 'starter' ? t('pack_desc_starter') : t('pack_desc_office')}
                    </p>
                    <p className="font-['Nunito'] font-bold text-black mt-1">
                      ฿{pack.price.toLocaleString()}
                    </p>
                    {pack.perks.length > 0 && (
                      <p className="font-['Nunito'] text-xs text-black/50 mt-0.5">
                        {[t('pack_perk_shipping'), t('pack_perk_shaker')].join(' · ')}
                      </p>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Flavor Selection */}
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito'] font-bold text-xs text-black/50 uppercase tracking-widest">
              {t('modal_label_flavor')}
            </p>
            <div className="flex flex-wrap gap-2">
              {FLAVORS.map(flavor => (
                <motion.button
                  key={flavor}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={[
                    'px-4 py-2 rounded-full border-2 font-["Nunito"] font-semibold text-sm transition-all',
                    selectedFlavor === flavor
                      ? 'border-black bg-black text-white'
                      : 'border-black/20 bg-white text-black hover:border-black/60',
                  ].join(' ')}
                >
                  {flavor}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Purchase Type */}
          <div className="flex flex-col gap-2">
            <p className="font-['Nunito'] font-bold text-xs text-black/50 uppercase tracking-widest">
              {t('modal_label_type')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {(['one-time', 'subscription'] as const).map(type => (
                <motion.button
                  key={type}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedType(type)}
                  className={[
                    'p-3 rounded-[14px] border-2 text-left transition-all',
                    selectedType === type
                      ? 'border-black bg-black text-white'
                      : 'border-black/20 bg-white text-black hover:border-black/60',
                  ].join(' ')}
                >
                  <p className="font-['Nunito'] font-bold text-sm">
                    {type === 'one-time' ? t('modal_one_time') : t('modal_subscribe_save')}
                  </p>
                  {type === 'subscription' && (
                    <p className="font-['Nunito'] text-xs mt-0.5 opacity-70">
                      {t('modal_sub_note')}
                    </p>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 rounded-[14px] p-4 flex items-center justify-between border border-black/10">
            <div>
              <p className="font-['Nunito'] font-bold text-black">{t('modal_total')}</p>
              {selectedType === 'subscription' && (
                <p className="font-['Nunito'] text-xs text-black/40 line-through">
                  ฿{basePrice.toLocaleString()}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="keep-anton font-['Anton'] text-3xl text-black">฿{finalPrice.toLocaleString()}</p>
              {selectedType === 'subscription' && savings > 0 && (
                <p className="font-['Nunito'] text-xs text-green-600 font-bold">
                  {t('modal_save_prefix')} ฿{savings.toLocaleString()}
                </p>
              )}
            </div>
          </div>

          {/* Volume Warning */}
          {volumeWarning && (
            <div className="bg-[#FF5A4B]/10 border border-[#FF5A4B] rounded-[14px] p-4 flex flex-col gap-1">
              <p className="font-['Nunito'] font-bold text-sm text-[#FF5A4B]">
                {t('modal_volume_warning')}
              </p>
              <a
                href="mailto:contact@crunchfit.co"
                className="font-['Nunito'] text-sm text-black underline"
              >
                {t('modal_contact')}
              </a>
            </div>
          )}

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="w-full bg-[#d4ff47] rounded-[32px] py-4 font-['Nunito'] font-bold text-xl text-black shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-shadow"
          >
            {t('modal_add_to_cart')}
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
