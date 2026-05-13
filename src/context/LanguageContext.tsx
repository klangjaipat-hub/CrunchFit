import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'en' | 'th';

// ─── Translations ────────────────────────────────────────────────────────────
// Brand names / contact details are intentionally identical in both languages.
export const translations = {
  en: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav_buy_now: 'BUY NOW',

    // ── Hero / Guilt-Free section ─────────────────────────────────────────────
    hero_title: 'Ultimate guilt-free snack',
    // hero_desc is rich text – handled inline with lang check in App.tsx

    // ── Feature Cards ─────────────────────────────────────────────────────────
    feature_protein_title: 'High Plant\nProtein',
    feature_protein_desc:
      'Packs 12g of protein (equal to about 2 eggs) to keep you full longer and crush cravings',
    feature_calorie_title: 'Low Calorie\n& Zero Fat',
    feature_calorie_desc:
      'Contains only 90 kcal and 0% trans fat, so you can finish the whole bag without needing extra cardio',
    feature_clean_title: 'Clean & Safe\nIngredients',
    feature_clean_desc:
      'Made with a clean recipe featuring zero MSG, preservatives, or gluten for easy digestion and no bloating',
    feature_vegan_title: 'Vegan\nFriendly',
    feature_vegan_desc:
      'Crafted from 100% plant-based ingredients, making it completely vegan, dairy-free, and worry-free',

    // ── Nutrition Label ───────────────────────────────────────────────────────
    nutrition_serving: '1 serving per container',
    nutrition_serving_size: 'Serving size',
    nutrition_amount: 'Amount Per Serving',
    nutrition_calories: 'Calories',
    nutrition_dv: '% Daily Value*',
    nutrition_total_fat: 'Total Fat',
    nutrition_sat_fat: 'Saturated Fat',
    nutrition_trans_fat: 'Trans Fat',
    nutrition_cholesterol: 'Cholesterol',
    nutrition_sodium: 'Sodium',
    nutrition_carb: 'Total Carbohydrate',
    nutrition_fiber: 'Dietary Fiber',
    nutrition_sugars: 'Total Sugars',
    nutrition_added_sugars: 'Includes 0g Added Sugars',
    nutrition_protein: 'Protein',
    nutrition_dv_note:
      '*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.',

    // ── Info Bar ──────────────────────────────────────────────────────────────
    info_soy: 'Contains soy',
    info_free: 'Gluten-Free, Dairy-Free, Nut-Free',
    info_packaging: 'Light and moisture-resistant zip-lock packaging',
    info_shelf: 'Shelf life: 8 months (from manufacturing date)',

    // ── Stat Cards ────────────────────────────────────────────────────────────
    stat_calories: 'Calories',
    stat_sugar: 'Sugar',
    stat_protein: 'Protein',

    // ── Pricing Section ───────────────────────────────────────────────────────
    pricing_title: 'Choose Your Pack',
    pricing_pack_qty_6: 'x 6 Pack',
    pricing_pack_qty_24: 'x 24 Pack',
    pricing_free_shipping: 'Free Shipping!',
    pricing_free_shaker_suffix: ' Plus 1 free',
    pricing_shaker_name: 'CrunchFit Shaker',
    pricing_sub_caption: '(Direct to your desk, monthly)',
    pricing_sub_detail:
      'Get an extra 15% off all packages (Cancel or change flavors anytime)',
    pricing_subscribe: 'SUBSCRIBE',
    pricing_buy_now: 'BUY NOW',

    // ── Testimonials ──────────────────────────────────────────────────────────
    testimonial_title: 'What People Say',
    review_1: 'Completely guilt-free and so delicious! Love the high protein too!',
    review_2: 'A snack I can finally eat without the guilt. Perfect for weight loss.',
    review_3: 'Intense flavors! Not bland like your typical healthy snacks.',
    review_4: 'Great for kids and adults. The whole family is addicted!',
    review_5: 'This is my new staple bag snack. It goes everywhere with me!',
    review_6: "Incredible crunch! This is the best protein snack I've ever tasted.",

    // ── Footer ────────────────────────────────────────────────────────────────
    footer_follow: 'Follow Us',

    // ── Cart Drawer ───────────────────────────────────────────────────────────
    cart_title: 'Your Cart',
    cart_empty: 'Your cart is empty',
    cart_continue: 'Continue Shopping',
    cart_badge_monthly: 'Monthly Sub',
    cart_badge_once: 'One-Time',
    cart_max_reached: 'Max 100 units reached.',
    cart_contact: 'Contact Staff for Volume Billing →',
    cart_subtotal: 'Subtotal',
    cart_tax_note: 'Taxes & shipping calculated at checkout',
    cart_checkout: 'Proceed to Checkout →',

    // ── Package Modal ─────────────────────────────────────────────────────────
    modal_title: 'Choose Your Pack',
    modal_label_pack: 'Pack',
    modal_label_flavor: 'Flavor',
    modal_label_type: 'Purchase Type',
    modal_one_time: 'One-Time',
    modal_subscribe_save: 'Subscribe & Save',
    modal_sub_note: '15% off · Cancel anytime',
    modal_total: 'Total',
    modal_save_prefix: 'Save',
    modal_volume_warning: 'Max 100 units per item reached.',
    modal_contact: 'Contact Staff for Volume Billing →',
    modal_add_to_cart: 'Add to Cart',

    // Pack display descriptions (in modal)
    pack_desc_starter: 'x 6 Pack',
    pack_desc_office: 'x 24 Pack',
    pack_perk_shipping: 'Free Shipping',
    pack_perk_shaker: '1 Free Shaker',
  },

  th: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav_buy_now: 'ซื้อเลย',

    // ── Hero / Guilt-Free section ─────────────────────────────────────────────
    hero_title: 'ขนมคลีนอร่อย ไม่ต้องรู้สึกผิด',

    // ── Feature Cards ─────────────────────────────────────────────────────────
    feature_protein_title: 'โปรตีนพืชสูง',
    feature_protein_desc:
      'โปรตีน 12 กรัม (เทียบเท่าไข่ประมาณ 2 ฟอง) ช่วยให้อิ่มนานและอยู่ท้องนานยิ่งขึ้น',
    feature_calorie_title: 'แคลอรี่ต่ำ\nไขมันเป็นศูนย์',
    feature_calorie_desc:
      'มีเพียง 90 กิโลแคลอรี และไขมันทรานส์ 0% กินหมดถุงได้สบายใจโดยไม่ต้องออกกำลังกายเพิ่ม',
    feature_clean_title: 'ส่วนผสมสะอาด\nปลอดภัย',
    feature_clean_desc:
      'สูตรสะอาด ไม่มี MSG ไม่มีสารกันบูด และไม่มีกลูเตน ย่อยง่าย ไม่ท้องอืด',
    feature_vegan_title: 'เหมาะสำหรับ\nวีแกน',
    feature_vegan_desc:
      'ทำจากส่วนผสมพืช 100% วีแกนแท้ ปราศจากนม และไม่ต้องกังวลเรื่องส่วนผสม',

    // ── Nutrition Label ───────────────────────────────────────────────────────
    nutrition_serving: '1 หน่วยบริโภคต่อบรรจุภัณฑ์',
    nutrition_serving_size: 'ขนาดหน่วยบริโภค',
    nutrition_amount: 'ปริมาณต่อหน่วยบริโภค',
    nutrition_calories: 'แคลอรี่',
    nutrition_dv: '% มูลค่ารายวัน*',
    nutrition_total_fat: 'ไขมันรวม',
    nutrition_sat_fat: 'ไขมันอิ่มตัว',
    nutrition_trans_fat: 'ไขมันทรานส์',
    nutrition_cholesterol: 'คอเลสเตอรอล',
    nutrition_sodium: 'โซเดียม',
    nutrition_carb: 'คาร์โบไฮเดรตรวม',
    nutrition_fiber: 'เส้นใยอาหาร',
    nutrition_sugars: 'น้ำตาลรวม',
    nutrition_added_sugars: 'รวมน้ำตาลที่เติม 0 กรัม',
    nutrition_protein: 'โปรตีน',
    nutrition_dv_note:
      '*% มูลค่ารายวัน (DV) บอกให้ทราบว่าสารอาหารในหนึ่งหน่วยบริโภคมีส่วนต่อปริมาณอาหารรายวันเท่าใด โดยใช้เกณฑ์ 2,000 แคลอรี่ต่อวัน',

    // ── Info Bar ──────────────────────────────────────────────────────────────
    info_soy: 'มีส่วนผสมของถั่วเหลือง',
    info_free: 'ปราศจากกลูเตน นม และถั่ว',
    info_packaging: 'บรรจุภัณฑ์ซิปล็อคทนความชื้น น้ำหนักเบา',
    info_shelf: 'อายุผลิตภัณฑ์: 8 เดือน (นับจากวันผลิต)',

    // ── Stat Cards ────────────────────────────────────────────────────────────
    stat_calories: 'แคลอรี่',
    stat_sugar: 'น้ำตาล',
    stat_protein: 'โปรตีน',

    // ── Pricing Section ───────────────────────────────────────────────────────
    pricing_title: 'เลือกแพ็กเกจของคุณ',
    pricing_pack_qty_6: 'x 6 แพ็ก',
    pricing_pack_qty_24: 'x 24 แพ็ก',
    pricing_free_shipping: 'ส่งฟรี!',
    pricing_free_shaker_suffix: ' พร้อมของฟรี 1 ชิ้น',
    pricing_shaker_name: 'แก้ว CrunchFit Shaker',
    pricing_sub_caption: '(ส่งตรงถึงโต๊ะคุณ ทุกเดือน)',
    pricing_sub_detail:
      'ลดเพิ่ม 15% ทุกแพ็กเกจ (ยกเลิกหรือเปลี่ยนรสชาติได้ทุกเมื่อ)',
    pricing_subscribe: 'สมัครสมาชิก',
    pricing_buy_now: 'ซื้อเลย',

    // ── Testimonials ──────────────────────────────────────────────────────────
    testimonial_title: 'เสียงจากผู้ใช้จริง',
    review_1: 'อร่อยมากโดยไม่รู้สึกผิดเลย! ชอบที่มีโปรตีนสูงมากๆ ด้วย!',
    review_2: 'ขนมที่กินได้สบายใจ ไม่รู้สึกผิด เหมาะมากสำหรับคนลดน้ำหนัก',
    review_3: 'รสชาติจัดจ้านมาก! ไม่จืดชืดเหมือนขนมสุขภาพทั่วไปเลย',
    review_4: 'เหมาะทั้งเด็กและผู้ใหญ่ ทั้งบ้านติดใจกันหมดเลย!',
    review_5: 'ขนมประจำถุงใหม่ของฉัน ติดตัวไปทุกที่เลย!',
    review_6: 'กรอบสุดๆ! อร่อยที่สุดที่เคยกินมาเลย!',

    // ── Footer ────────────────────────────────────────────────────────────────
    footer_follow: 'ติดตามเรา',

    // ── Cart Drawer ───────────────────────────────────────────────────────────
    cart_title: 'ตะกร้าสินค้า',
    cart_empty: 'ตะกร้าสินค้าว่างเปล่า',
    cart_continue: 'ช้อปต่อ',
    cart_badge_monthly: 'รายเดือน',
    cart_badge_once: 'ซื้อครั้งเดียว',
    cart_max_reached: 'ถึงขีดสูงสุด 100 ชิ้นแล้ว',
    cart_contact: 'ติดต่อเจ้าหน้าที่สำหรับสั่งจำนวนมาก →',
    cart_subtotal: 'ยอดรวม',
    cart_tax_note: 'ภาษีและค่าจัดส่งคำนวณที่หน้าชำระเงิน',
    cart_checkout: 'ดำเนินการชำระเงิน →',

    // ── Package Modal ─────────────────────────────────────────────────────────
    modal_title: 'เลือกแพ็กเกจของคุณ',
    modal_label_pack: 'แพ็กเกจ',
    modal_label_flavor: 'รสชาติ',
    modal_label_type: 'ประเภทการซื้อ',
    modal_one_time: 'ซื้อครั้งเดียว',
    modal_subscribe_save: 'สมัครสมาชิกและประหยัด',
    modal_sub_note: 'ลด 15% · ยกเลิกได้ทุกเมื่อ',
    modal_total: 'รวม',
    modal_save_prefix: 'ประหยัด',
    modal_volume_warning: 'ถึงขีดสูงสุด 100 ชิ้นต่อรายการแล้ว',
    modal_contact: 'ติดต่อเจ้าหน้าที่สำหรับสั่งจำนวนมาก →',
    modal_add_to_cart: 'เพิ่มลงตะกร้า',

    // Pack display descriptions (in modal)
    pack_desc_starter: 'x 6 แพ็ก',
    pack_desc_office: 'x 24 แพ็ก',
    pack_perk_shipping: 'ส่งฟรี',
    pack_perk_shaker: 'แก้ว Shaker ฟรี 1 ใบ',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

// ─── Context ─────────────────────────────────────────────────────────────────
interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'crunchfit-lang-v1';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'th' ? 'th' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    // Apply / remove Thai font class on <html> so the Prompt font cascades
    // to all text in the app when the language is set to Thai.
    document.documentElement.classList.toggle('lang-th', lang === 'th');
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'th' : 'en'));

  const t = (key: TranslationKey): string => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
