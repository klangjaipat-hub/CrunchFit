import image_92cf502b59b7bf01e794c91af5e30d6dc3e6f9b9 from 'figma:asset/92cf502b59b7bf01e794c91af5e30d6dc3e6f9b9.png'
import image_47187052bcd60a438309b709205279309e5b66d7 from 'figma:asset/47187052bcd60a438309b709205279309e5b66d7.png'
import image_8efcfd2f0addb833798bf18a2e4a35328aa693d1 from 'figma:asset/8efcfd2f0addb833798bf18a2e4a35328aa693d1.png'
import image_e31ba1d682bc467fb8b9fcde2e49546f68932b5a from 'figma:asset/e31ba1d682bc467fb8b9fcde2e49546f68932b5a.png'
import image_c5caff8246ad0b4243905ebe6e06aee84e923b51 from 'figma:asset/c5caff8246ad0b4243905ebe6e06aee84e923b51.png'
import image_259f4f00ae189609cfc6cd0d6443440e941fe049 from 'figma:asset/259f4f00ae189609cfc6cd0d6443440e941fe049.png'
import image_1f76d9f4f147bfeb3dd7b5cc64678f604ab0d4ff from 'figma:asset/1f76d9f4f147bfeb3dd7b5cc64678f604ab0d4ff.png'
import skyBackground from 'figma:asset/92cf502b59b7bf01e794c91af5e30d6dc3e6f9b9.png'
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, AlertCircle, CheckCircle2, Package, CalendarClock, Globe, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import svgPaths from '../imports/svg-abgizgdck8';
import nutritionSvgPaths from '../imports/svg-ipt47pjs9';
import pricingSvgPaths from '../imports/svg-j611oe5awv';
import characterSvgPaths from '../imports/svg-64y53xsqw3';
import footerSvgPaths from '../imports/svg-ngg6cmdqky';
import imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr3 from "figma:asset/63a2281d47b207817ab2bdd2ec6f3b00792b96e6.png";
import imgProductImages from "figma:asset/5344db3a38f5e98d5c6b71fbc57d9a950482784e.png";
import imgUnnamed22 from "figma:asset/acf3b5c2869856497d5ac8dece7eaf0b58265a4a.png";
import imgUnnamed23 from "figma:asset/48ad168cd9e9545be2e362f09bc898492f359bb5.png";
import imgJapanStreetDaytime1 from "figma:asset/2415fad98790c269bf66b616d0cabb031a9f554d.png";
import imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr2 from "figma:asset/50ed46e5354fd32e5f255c31ad41bd92f669aace.png";
import imgContainer from "figma:asset/f820601cdd1c962b4234b80b4c11431bf8447210.png";
import imgContainer1 from "figma:asset/5d42d89537a46e8f97bcd9396d3860f24f89e84a.png";
import imgContainer2 from "figma:asset/7331c488a7d8f6b3f8f5ab61b638ba30895047d9.png";
import imgUnion from "figma:asset/55de28647d286b6cc32a76135e9937b9299e85f1.png";
import imgSpringPark from '../assets/spring-park-freshly-cut-lawn-vertical-frame-background-wallpaper-idea.jpg';
import imgHotel from '../assets/blurred-illuminated-entry-hotel.jpg';

export default function App() {
  const { openModal, openDrawer, items } = useCart();
  const { lang, toggleLang, t } = useLanguage();
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const navSections = [
    { id: 'hero',      labelEn: 'Home',          labelTh: 'หน้าแรก' },
    { id: 'about',     labelEn: 'About',          labelTh: 'เกี่ยวกับ' },
    { id: 'flavors',   labelEn: 'Flavors',        labelTh: 'รสชาติ' },
    { id: 'nutrition', labelEn: 'Nutrition',      labelTh: 'โภชนาการ' },
    { id: 'pricing',   labelEn: 'Pricing',        labelTh: 'ราคา' },
    { id: 'reviews',   labelEn: 'Reviews',        labelTh: 'รีวิว' },
    { id: 'contact',   labelEn: 'Contact',        labelTh: 'ติดต่อ' },
  ];

  const scrollTo = (id: string) => {
    setIsSideMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          {/* Left: Mascot Button */}
          <button
            onClick={() => setIsSideMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-3 sm:gap-5"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 relative overflow-hidden rounded-full">
              <img
                src={imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr3}
                alt="CrunchFit mascot"
                className="w-full h-full object-cover animate-[spin_20s_linear_infinite]"
              />
            </div>
          </button>

          {/* Center: Logo */}
          <h1 className="absolute left-1/2 -translate-x-1/2 font-['Nunito'] font-black text-2xl sm:text-4xl lg:text-5xl text-black whitespace-nowrap">
            CrunchFit
          </h1>

          {/* Right: Lang toggle + BUY NOW + Cart */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label={`Switch to ${lang === 'en' ? 'Thai' : 'English'}`}
              className="flex items-center gap-1.5 hover:opacity-60 transition-opacity duration-200"
            >
              <Globe className="w-4 h-4 text-black" />
              <span className="font-['Nunito'] font-bold text-sm text-black uppercase">{lang}</span>
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal()}
              className="min-w-[147px] sm:min-w-[200px] bg-[#d4ff47] rounded-full transition-shadow duration-200 hover:shadow-[0_6px_20px_rgba(212,255,71,0.4)] active:shadow-[0_2px_10px_rgba(212,255,71,0.3)]"
            >
              <div className="flex items-center justify-center pb-[6px] pt-[10px] px-[16px] sm:pb-[8px] sm:pt-[12px] sm:px-[24px]">
                <p className="font-['Nunito'] font-bold text-[15px] sm:text-[20px] leading-[32px] text-black whitespace-nowrap">{t('nav_buy_now')}</p>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDrawer()}
              className="relative bg-black rounded-full pb-[16px] pt-[16px] px-[24px] flex items-center gap-2 transition-shadow duration-200 hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#d4ff47]" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="font-['Nunito'] font-bold text-[14px] leading-none text-[#d4ff47]"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsSideMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 left-0 z-[70] h-full w-72 sm:w-80 bg-black flex flex-col shadow-[4px_0px_0px_0px_#d4ff47]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <p className="font-['Nunito'] font-black text-2xl text-white">CrunchFit</p>
                <button
                  onClick={() => setIsSideMenuOpen(false)}
                  aria-label="Close menu"
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navSections.map((section, i) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.25 }}
                    onClick={() => scrollTo(section.id)}
                    className="group flex items-center gap-4 px-4 py-3 rounded-[14px] hover:bg-[#d4ff47] transition-colors duration-150 text-left"
                  >
                    <span className="font-['Anton'] text-xl text-white group-hover:text-black tracking-wide uppercase transition-colors duration-150">
                      {lang === 'th' ? section.labelTh : section.labelEn}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-5 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setIsSideMenuOpen(false); openModal(); }}
                  className="w-full bg-[#d4ff47] rounded-[32px] py-3 font-['Nunito'] font-bold text-lg text-black"
                >
                  {t('nav_buy_now')}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full pt-[10rem] sm:pt-[18rem] lg:pt-[26rem] pb-4 sm:pb-6 lg:pb-8 flex items-center justify-center overflow-hidden"
      >
        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative overflow-visible">
          {/* Product Images Container with Rounded Background */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-[20px] overflow-visible flex items-end justify-center pb-6 sm:pb-8 lg:pb-12">
            {/* Sky Background */}
            <div className="absolute inset-0">
              <div className="w-[80%] h-[95%] mx-auto block relative overflow-hidden flex items-center bg-cover bg-center rounded-[20px]" style={{ backgroundImage: `url(${skyBackground})` }}>
                <motion.div
                  className="flex gap-8 absolute whitespace-nowrap items-center will-change-transform"
                  animate={{
                    x: [0, "-25%", "-25%", "-50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.45, 0.55, 1],
                    ease: "linear",
                  }}
                >
                  <img
                    src={image_e31ba1d682bc467fb8b9fcde2e49546f68932b5a}
                    alt="CrunchFit Original Flavor"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                  <img
                    src={image_c5caff8246ad0b4243905ebe6e06aee84e923b51}
                    alt="CrunchFit Spicy BBQ"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                  <img
                    src={image_8efcfd2f0addb833798bf18a2e4a35328aa693d1}
                    alt="CrunchFit Original Flavor"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                  <img
                    src={image_47187052bcd60a438309b709205279309e5b66d7}
                    alt="CrunchFit Spicy BBQ"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                  {/* Duplicate set for seamless loop */}
                  <img
                    src={image_e31ba1d682bc467fb8b9fcde2e49546f68932b5a}
                    alt="CrunchFit Original Flavor"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                  <img
                    src={image_c5caff8246ad0b4243905ebe6e06aee84e923b51}
                    alt="CrunchFit Spicy BBQ"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                  <img
                    src={image_8efcfd2f0addb833798bf18a2e4a35328aa693d1}
                    alt="CrunchFit Original Flavor"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                  <img
                    src={image_47187052bcd60a438309b709205279309e5b66d7}
                    alt="CrunchFit Spicy BBQ"
                    className="h-40 sm:h-64 lg:h-96 w-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>

            {/* Product Bags with Floating Animation */}
            <div className="relative flex items-end justify-center gap-6 sm:gap-8 lg:gap-12 z-10">
              {/* Left Bag - Floating */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[280px] sm:w-[350px] lg:w-[420px] h-auto rotate-[15deg]"
              >
                
              </motion.div>

              {/* Right Bag - Floating (opposite phase) */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="relative w-[280px] sm:w-[350px] lg:w-[420px] h-auto -rotate-[15deg]"
              >
                
              </motion.div>
            </div>

            {/* PLANT PROTEIN Text - Overlapping */}
            <div className="absolute top-8 sm:top-12 lg:top-20 left-1/2 -translate-x-1/2 w-[280px] sm:w-[380px] lg:w-[490px] pointer-events-none z-20">
              <svg className="absolute top-[-19.25rem] w-full h-auto" viewBox="0 0 490 338" fill="none">
                <g>
                  <g>
                    <path d={svgPaths.p7d61c00} fill="#FF5A4B" />
                    <path d={svgPaths.p3adccc30} fill="#FF5A4B" />
                    <path d={svgPaths.p5ed7700} fill="#FF5A4B" />
                    <path d={svgPaths.p2fee0a80} fill="#FF5A4B" />
                    <path d={svgPaths.pc83b000} fill="#FF5A4B" />
                  </g>
                  <g>
                    <path d={svgPaths.p27912d80} fill="#FF5A4B" />
                    <path d={svgPaths.p925d600} fill="#FF5A4B" />
                    <path d={svgPaths.p386db900} fill="#FF5A4B" />
                    <path d={svgPaths.p92c2b80} fill="#FF5A4B" />
                    <path d={svgPaths.p1db83e00} fill="#FF5A4B" />
                    <path d={svgPaths.p16951a00} fill="#FF5A4B" />
                    <path d={svgPaths.p2e7b0e00} fill="#FF5A4B" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Guilt-Free Snack Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full pt-12 sm:pt-16 lg:pt-24 pb-0 bg-white overflow-hidden"
      >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            {/* Title */}
            <h2 className="font-['Anton'] text-4xl sm:text-5xl lg:text-7xl text-center text-black uppercase tracking-wider mb-6 sm:mb-8">
              {t('hero_title')}
            </h2>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-32 sm:mb-40 lg:mb-52">
              {lang === 'th' ? (
                <p className="font-['Nunito'] text-center text-black leading-relaxed text-base sm:text-xl lg:text-[24px] text-[#464646]">
                  แนะนำ CrunchFit Plant-Protein Puffs: ขนมคลีนสุดจัดที่คุณรอคอย! ทำจากโปรตีนถั่วลันเตาและข้าวกล้องออร์แกนิก อบลมร้อน 100% ไม่ทอด ทุกถุงให้ความกรอบอร่อยแบบไม่มีน้ำมัน พร้อม <span className="font-semibold">โปรตีน 12 กรัม</span>และ เพียง <span className="font-semibold">90 แคลอรี่</span> ไม่มี MSG โซเดียมน้อยกว่า 50% เหมาะสำหรับคนรักสุขภาพและคนทำงานออฟฟิศ
                </p>
              ) : (
                <p className="font-['Nunito'] text-center text-black leading-relaxed text-base sm:text-xl lg:text-[24px] text-[#464646]">Meet CrunchFit Plant-Protein Puffs: the ultimate guilt-free snack! Made from golden pea protein and organic brown rice, our puffs are 100% air-roasted, never fried. Each bag delivers a satisfying, oil-free crunch with <span className="font-bold">12g of protein</span> and only <span className="font-bold">90 calories</span>. With zero MSG and 50% less sodium, it's the perfect healthy bite for fitness lovers and busy office workers.</p>
              )}
            </div>
          </div>

          {/* Crosswalk Background with Doodle Characters */}
          <div className="relative w-full aspect-[4096/486]">
            {/* Crosswalk - showing only the bottom strip */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                src={imgJapanStreetDaytime1}
                alt="Crosswalk"
                className="absolute h-[560.7%] left-0 max-w-none top-[-460.7%] w-full object-cover"
              />
            </div>

            {/* Left Blue Character with Bike - Floating */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-[8%] sm:left-[10%] lg:left-[13%] w-[30%] sm:w-[28%] lg:w-[26%] max-w-[400px] will-change-transform"
            >
              <svg viewBox="0 0 507.611 485.998" fill="none" className="w-full h-auto">
                <path d={svgPaths.p27933b00} fill="black" />
                <path d={svgPaths.pde541f2} fill="black" />
                <path d={svgPaths.p214e8600} fill="#A3CCFF" />
              </svg>
            </motion.div>

            {/* Right Blue Character with Scooter - Floating (opposite phase) */}
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute bottom-0 right-[8%] sm:right-[10%] lg:right-[13%] w-[26%] sm:w-[24%] lg:w-[22%] max-w-[350px] will-change-transform"
            >
              <svg viewBox="0 0 428.596 475.038" fill="none" className="w-full h-auto scale-y-[-1] rotate-180">
                <ellipse cx="394.956" cy="440.563" fill="black" rx="19.5181" ry="19.7172" />
                <path d={svgPaths.p3d86d100} fill="black" />
                <path d={svgPaths.p2cd9b300} fill="black" />
                <path d={svgPaths.p2d813e00} fill="#A3CCFF" />
              </svg>
            </motion.div>
          </div>
        </motion.section>

      {/* Flavor Split Section */}
      <motion.section
        id="flavors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full py-12 sm:py-16 lg:py-24 bg-white"
      >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            {/* Flavor Split - Top Part */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] mb-[14.4px] sm:mb-[19.2px] lg:mb-[24px]">
              {/* Blue Star Burst Background with Texture - Centered */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] lg:w-[719px] h-[500px] sm:h-[600px] lg:h-[719px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute inset-[2.77%_4.81%]">
                  <svg className="block size-full" fill="none" viewBox="0 0 649.818 679.201">
                    <defs>
                      <pattern id="skyPattern" patternUnits="objectBoundingBox" width="1" height="1">
                        <image href={skyBackground} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                      </pattern>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="679.201" id="filter0_g_flavor" width="649.818" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feTurbulence baseFrequency="0.1428571492433548 0.1428571492433548" numOctaves="3" seed="7992" type="fractalNoise" />
                        <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="14" width="100%" xChannelSelector="R" yChannelSelector="G" />
                        <feMerge result="effect1_texture_1_1162">
                          <feMergeNode in="displacedImage" />
                        </feMerge>
                      </filter>
                    </defs>
                    <g filter="url(#filter0_g_flavor)">
                      <path d={svgPaths.p1a7c1f00} fill="url(#skyPattern)" className="origin-center animate-[spin_20s_linear_infinite] scale-90" style={{ transformBox: 'fill-box' }} />
                    </g>
                  </svg>
                </div>
              </motion.div>

              {/* Left: Truffle Vegan Cheese */}
              <motion.div 
                className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3
                  className="keep-anton font-['Anton'] text-[80px] xl:text-[130px] leading-[1.3] tracking-[5px] uppercase text-[#e9ec5c]"
                  style={{
                    textShadow: `
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      -1px 0 0 #000,
                      1px 0 0 #000,
                      0 -1px 0 #000,
                      0 1px 0 #000
                    `
                  }}
                >
                  Truffle<br />Vegan<br />Cheese
                </h3>
              </motion.div>

              {/* Center: Product Image */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] lg:w-[463px] h-[280px] sm:h-[350px] lg:h-[456px] z-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      src={imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr2}
                      alt="CrunchFit Puff"
                      className="absolute h-[80%] left-[-25%] max-w-none top-[10%] w-[150%] rounded-[100px]"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Spicy Korean BBQ */}
              <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3
                  className="keep-anton font-['Anton'] text-[80px] xl:text-[130px] leading-[1.3] text-right uppercase text-[#e65248]"
                  style={{
                    textShadow: `
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      -1px 0 0 #000,
                      1px 0 0 #000,
                      0 -1px 0 #000,
                      0 1px 0 #000
                    `
                  }}
                >
                  Spicy<br />Korean<br />BBQ
                </h3>
              </motion.div>

              {/* Mobile flavor text - stacked vertically */}
              <motion.div 
                className="lg:hidden absolute bottom-0 left-0 right-0 flex justify-between px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3
                  className="keep-anton font-['Anton'] text-3xl sm:text-4xl leading-[1.3] tracking-[3px] uppercase text-[#e9ec5c]"
                  style={{
                    textShadow: `
                      -2px -2px 0 #000,
                      2px -2px 0 #000,
                      -2px 2px 0 #000,
                      2px 2px 0 #000,
                      -3px 0 0 #000,
                      3px 0 0 #000,
                      0 -3px 0 #000,
                      0 3px 0 #000
                    `
                  }}
                >
                  Truffle<br />Vegan<br />Cheese
                </h3>
                <h3
                  className="keep-anton font-['Anton'] text-3xl sm:text-4xl leading-[1.3] tracking-[3px] text-right uppercase text-[#e65248]"
                  style={{
                    textShadow: `
                      -2px -2px 0 #000,
                      2px -2px 0 #000,
                      -2px 2px 0 #000,
                      2px 2px 0 #000,
                      -3px 0 0 #000,
                      3px 0 0 #000,
                      0 -3px 0 #000,
                      0 3px 0 #000
                    `
                  }}
                >
                  Spicy<br />Korean<br />BBQ
                </h3>
              </motion.div>
            </div>

            {/* Feature Cards - Bottom Part */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* High Plant Protein */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2, ease: "easeInOut" }
                }}
                className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6 sm:p-8 flex flex-col gap-3 cursor-pointer"
              >
                <h4 className="font-['Nunito'] font-black leading-[1.2] text-black text-center uppercase text-base sm:text-lg lg:text-[24px]">{t('feature_protein_title').split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>)}</h4>
                <p className="font-['Nunito'] leading-[1.3] text-black text-center text-[#464646] text-sm sm:text-base lg:text-[20px]">{t('feature_protein_desc')}</p>
              </motion.div>

              {/* Low Calorie & Zero Fat */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2, ease: "easeInOut" }
                }}
                className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6 sm:p-8 flex flex-col gap-3 cursor-pointer"
              >
                <h4 className="font-['Nunito'] font-black leading-[1.2] text-black text-center uppercase text-base sm:text-lg lg:text-[24px]">{t('feature_calorie_title').split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>)}</h4>
                <p className="font-['Nunito'] leading-[1.3] text-black text-center text-[#464646] text-sm sm:text-base lg:text-[20px]">{t('feature_calorie_desc')}</p>
              </motion.div>

              {/* Clean & Safe Ingredients */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2, ease: "easeInOut" }
                }}
                className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6 sm:p-8 flex flex-col gap-3 cursor-pointer"
              >
                <h4 className="font-['Nunito'] font-black leading-[1.2] text-black text-center uppercase text-base sm:text-lg lg:text-[24px]">{t('feature_clean_title').split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>)}</h4>
                <p className="font-['Nunito'] leading-[1.3] text-black text-center text-[#464646] text-sm sm:text-base lg:text-[20px]">{t('feature_clean_desc')}</p>
              </motion.div>

              {/* Vegan Friendly */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2, ease: "easeInOut" }
                }}
                className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-6 sm:p-8 flex flex-col gap-3 cursor-pointer"
              >
                <h4 className="font-['Nunito'] font-black leading-[1.2] text-black text-center uppercase text-base sm:text-lg lg:text-[24px]">{t('feature_vegan_title').split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>)}</h4>
                <p className="font-['Nunito'] leading-[1.3] text-black text-center text-[#464646] text-sm sm:text-base lg:text-[20px]">{t('feature_vegan_desc')}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

      {/* Nutrition Facts Section */}
      <motion.section
        id="nutrition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden"
      >
          {/* Background Image - Full Opacity */}
          <div className="absolute inset-0">
            <img src={imgUnion} alt="" className="w-full h-full object-fill" />
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8">
              {/* Left: Product Images + Stats */}
              <div className="flex flex-col gap-6">
                {/* Floating Product Images */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[586px]">
                  {/* Centered product image */}
                  <img
                    src={image_1f76d9f4f147bfeb3dd7b5cc64678f604ab0d4ff}
                    alt="CrunchFit Products"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
                  />
                  
                  {/* Left Large Bag - rotated */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-[8%] top-0 w-[48%] z-10 will-change-transform"
                    style={{ transform: 'rotate(-10deg)' }}
                  >
                    <img
                      src={image_1f76d9f4f147bfeb3dd7b5cc64678f604ab0d4ff}
                      alt="CrunchFit Truffle Vegan Cheese"
                      className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                    />
                  </motion.div>

                  {/* Right Small Bag - rotated */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute right-[8%] bottom-[23%] w-[32%] z-10"
                    style={{ transform: 'rotate(10deg)' }}
                  >
                    
                  </motion.div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px black" }}
                    className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-2 sm:gap-4 cursor-pointer"
                  >
                    <p className="keep-anton font-['Anton'] text-3xl sm:text-4xl lg:text-[40px] leading-[32px] text-black">90</p>
                    <p className="font-['Nunito'] font-bold text-base sm:text-lg lg:text-[24px] leading-[20px] text-black text-center">{t('stat_calories')}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px black" }}
                    className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-2 sm:gap-4 cursor-pointer"
                  >
                    <p className="keep-anton font-['Anton'] text-3xl sm:text-4xl lg:text-[40px] leading-[32px] text-black">0g</p>
                    <p className="font-['Nunito'] font-bold text-base sm:text-lg lg:text-[24px] leading-[20px] text-black text-center">{t('stat_sugar')}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px black" }}
                    className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-2 sm:gap-4 cursor-pointer"
                  >
                    <p className="keep-anton font-['Anton'] text-3xl sm:text-4xl lg:text-[40px] leading-[32px] text-black">12g</p>
                    <p className="font-['Nunito'] font-bold text-base sm:text-lg lg:text-[24px] leading-[20px] text-black text-center">{t('stat_protein')}</p>
                  </motion.div>
                </div>
              </div>

              {/* Right: Nutrition Facts Label */}
              <div className="bg-white border border-black p-4">
                {/* Title */}
                <div className="border-b border-black pb-2 mb-2">
                  <svg className="w-full h-auto max-w-[440px]" viewBox="0 0 440 46" fill="none" preserveAspectRatio="none">
                    <g>
                      <path d={nutritionSvgPaths.p3af55380} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p224c4180} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p3cb2ca00} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p1804c880} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p3965b300} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p39843e00} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p2e8da880} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p362f2c00} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p3699a880} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p1c5c9700} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.pc1da130} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p180dc00} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p354e3100} fill="#0A0A0A" />
                      <path d={nutritionSvgPaths.p274b9a00} fill="#0A0A0A" />
                    </g>
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="font-['Nunito'] leading-[20px] text-[20px]">{t('nutrition_serving')}</p>

                  <div className="border-b-4 border-black pb-1 flex justify-between items-center">
                    <p className="font-['Nunito'] font-bold leading-[24px] text-[20px]">{t('nutrition_serving_size')}</p>
                    <p className="font-['Nunito'] leading-[24px] text-[20px]">1 Package (35g)</p>
                  </div>

                  <div className="border-b-4 border-black py-2">
                    <p className="font-['Nunito'] font-bold leading-[24px] text-[20px]">{t('nutrition_amount')}</p>
                    <div className="flex justify-between items-center font-['Anton'] text-3xl sm:text-4xl lg:text-[36px] leading-[40px]">
                      <p>{t('nutrition_calories')}</p>
                      <p className="keep-anton">90</p>
                    </div>
                  </div>

                  <div className="border-b-4 border-black pb-1 text-right">
                    <p className="font-['Nunito'] font-bold leading-[20px] text-[16px]">{t('nutrition_dv')}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="border-b border-[#99a1af] pb-1 flex justify-between">
                      <p className="font-['Nunito'] leading-[24px] text-[20px]"><span className="font-bold">{t('nutrition_total_fat')}</span> 1g</p>
                      <p className="font-['Nunito'] font-bold leading-[24px] text-[20px]">1%</p>
                    </div>

                    <div className="border-b border-[#99a1af] pb-1 pl-4 flex justify-between">
                      <p className="font-['Nunito'] text-lg sm:text-xl lg:text-[20px] leading-[24px]">{t('nutrition_sat_fat')} 0g</p>
                      <p className="font-['Nunito'] font-bold text-lg sm:text-xl lg:text-[20px] leading-[24px]">0%</p>
                    </div>

                    <div className="border-b border-[#99a1af] pb-1 pl-4">
                      <p className="font-['Nunito'] italic text-lg sm:text-xl lg:text-[20px] leading-[24px]"><span className="italic">{t('nutrition_trans_fat')} </span><span className="not-italic italic">0g</span></p>
                    </div>

                    <div className="border-b border-[#99a1af] pb-1 flex justify-between">
                      <p className="font-['Nunito'] text-lg sm:text-xl lg:text-[20px] leading-[24px]"><span className="font-bold">{t('nutrition_cholesterol')}</span> 0mg</p>
                      <p className="font-['Nunito'] font-bold text-lg sm:text-xl lg:text-[20px] leading-[24px]">0%</p>
                    </div>

                    <div className="border-b border-[#99a1af] pb-1 flex justify-between">
                      <p className="font-['Nunito'] text-lg sm:text-xl lg:text-[20px] leading-[24px]"><span className="font-bold">{t('nutrition_sodium')}</span> 0mg</p>
                      <p className="font-['Nunito'] font-bold text-lg sm:text-xl lg:text-[20px] leading-[24px]">0%</p>
                    </div>

                    <div className="border-b border-[#99a1af] pb-1 flex justify-between">
                      <p className="font-['Nunito'] text-lg sm:text-xl lg:text-[20px] leading-[24px]"><span className="font-bold">{t('nutrition_carb')}</span> 8g</p>
                      <p className="font-['Nunito'] font-bold text-lg sm:text-xl lg:text-[20px] leading-[24px]">3%</p>
                    </div>

                    <div className="border-b border-[#99a1af] pb-1 pl-4 flex justify-between">
                      <p className="font-['Nunito'] text-lg sm:text-xl lg:text-[20px] leading-[24px]">{t('nutrition_fiber')} 0g</p>
                      <p className="font-['Nunito'] font-bold text-lg sm:text-xl lg:text-[20px] leading-[24px]">0%</p>
                    </div>

                    <div className="border-b border-[#99a1af] pb-1 pl-4">
                      <p className="font-['Nunito'] text-lg sm:text-xl lg:text-[20px] leading-[24px]">{t('nutrition_sugars')} 0g</p>
                    </div>

                    <div className="border-b-4 border-black pb-2 pl-8 flex justify-between">
                      <p className="font-['Nunito'] text-base sm:text-lg lg:text-[20px] leading-[20px]">{t('nutrition_added_sugars')}</p>
                      <p className="font-['Nunito'] font-bold text-lg sm:text-xl lg:text-[20px] leading-[24px]">0%</p>
                    </div>

                    <div className="flex justify-between font-['Nunito'] font-bold pt-1">
                      <p className="text-lg sm:text-xl lg:text-[20px] leading-[24px]">{t('nutrition_protein')} 12g</p>
                      <p className="text-lg sm:text-xl lg:text-[20px] leading-[28px]">24%</p>
                    </div>
                  </div>

                  <div className="border-t-4 border-black pt-4">
                    <p className="font-['Nunito'] text-sm sm:text-base lg:text-[20px] leading-[20px]">
                      {t('nutrition_dv_note')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-white border border-black rounded-[20px] shadow-[4px_4px_0px_0px_black] p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row sm:items-stretch justify-between gap-0">
                {[
                  { icon: <AlertCircle className="w-5 h-5 shrink-0" />, text: t('info_soy') },
                  { icon: <CheckCircle2 className="w-5 h-5 shrink-0" />, text: t('info_free') },
                  { icon: <Package className="w-5 h-5 shrink-0" />, text: t('info_packaging') },
                  { icon: <CalendarClock className="w-5 h-5 shrink-0" />, text: t('info_shelf') },
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    className={`flex-1 flex flex-row items-center justify-center gap-3 px-4 py-3
                      ${i < arr.length - 1 ? "border-b sm:border-b-0 sm:border-r border-black" : ""}`}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    <p className="font-['Nunito'] text-sm sm:text-base lg:text-[18px] leading-snug text-left">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-12 sm:py-16 lg:py-24 bg-white"
      >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <h2 className="font-['Anton'] text-4xl sm:text-5xl lg:text-[72px] text-center text-black uppercase tracking-[3px] mb-12 sm:mb-16 lg:mb-20">
              {t('pricing_title')}
            </h2>

            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {/* Top Row - 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {/* Starter Pack */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="relative bg-white border border-black rounded-[20px] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-[500px]"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 rounded-[20px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[20px] [transform:translateZ(0)]">
                      <img src={imgSpringPark} alt="" className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]" />
                    </div>
                    <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[20px]" />
                  </div>

                  {/* Content */}
                  <div className="relative overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start p-6 sm:p-[36px] relative size-full">
                      {/* Blue Character - Positioned absolutely */}
                      <div className="absolute h-[752.999px] left-[-150px] top-[125px] w-[763.613px]">
                        <div className="absolute inset-[-0.53%_0_-0.53%_-0.52%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 767.614 760.999">
                            <g>
                              <path d={characterSvgPaths.p3e59a200} fill="black" />
                              <g filter="url(#filter0_g_character_starter)">
                                <path d={characterSvgPaths.p2f936000} fill="#A3CCFF" />
                              </g>
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="760.999" id="filter0_g_character_starter" width="763.976" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="4149" type="fractalNoise" />
                                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="8" width="100%" xChannelSelector="R" yChannelSelector="G" />
                                <feMerge result="effect1_texture_character">
                                  <feMergeNode in="displacedImage" />
                                </feMerge>
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
                        <p className="keep-anton font-['Anton'] leading-none text-[40px] sm:text-[48px] lg:text-[56px] text-white tracking-[2px] uppercase">Starter Pack</p>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="h-[24px] relative shrink-0 w-[21px]">
                            <div className="absolute inset-[-4.17%_-4.76%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
                                <g filter="url(#filter0_g_check_starter)">
                                  <path d={pricingSvgPaths.pf678000} fill="#D4FF47" />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_g_check_starter" width="23" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="8802" type="fractalNoise" />
                                    <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="2" width="100%" xChannelSelector="R" yChannelSelector="G" />
                                    <feMerge result="effect1_texture_check">
                                      <feMergeNode in="displacedImage" />
                                    </feMerge>
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Nunito'] leading-[28px] text-[24px] sm:text-[28px] lg:text-[30px] text-white">{t('pricing_pack_qty_6')}</p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                        <div className="flex flex-col justify-end size-full">
                          <div className="content-stretch flex flex-col gap-[4px] items-start justify-end pb-[24px] relative size-full text-white">
                            <p className="keep-anton font-['Anton'] leading-[0] relative shrink-0 text-[0px]">
                              <span className="leading-[50px] sm:leading-[60px] text-[60px] sm:text-[72px]">390</span>
                              <span className="font-['Nunito'] leading-[36px] text-[24px] sm:text-[30px]">{` THB`}</span>
                            </p>
                            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Nunito'] leading-[28px] line-through relative shrink-0 text-[24px] sm:text-[30px] tracking-[-0.4492px]">414 THB</p>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openModal({ packId: 'starter' })}
                        className="bg-[#d4ff47] relative rounded-[32px] shrink-0 w-full pb-[8px] pt-[12px] px-[24px] cursor-pointer"
                      >
                        <p className="font-['Nunito'] font-bold leading-[32px] text-[24px] text-black text-center">{t('pricing_buy_now')}</p>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Office Survivor */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="relative bg-white border border-black rounded-[20px] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-[500px]"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 rounded-[20px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[20px] [transform:translateZ(0)]">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]" src={imgHotel} />
                    </div>
                    <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[20px]" />
                  </div>

                  {/* Blue Character Illustration */}
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[654.44px] left-[calc(50%+114.72px)] top-[calc(50%+146.22px)] w-[676.657px] pointer-events-none">
                    <div className="absolute inset-[-0.46%_-0.44%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682.657 660.44">
                        <g>
                          <path d={pricingSvgPaths.p6e19700} fill="black" />
                          <path d={pricingSvgPaths.p17dbe700} fill="black" />
                          <g filter="url(#filter0_g_office)">
                            <path d={pricingSvgPaths.p1da8d800} fill="#A3CCFF" />
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="660.44" id="filter0_g_office" width="682.657" x="-1.05267e-08" y="-2.43717e-08">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" seed="9110" type="fractalNoise" />
                            <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="6" width="100%" xChannelSelector="R" yChannelSelector="G" />
                            <feMerge result="effect1_texture_office">
                              <feMergeNode in="displacedImage" />
                            </feMerge>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start p-6 sm:p-[36px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
                        <p className="keep-anton font-['Anton'] leading-none text-[40px] sm:text-[48px] lg:text-[56px] text-white tracking-[2px] uppercase">Office Survivor</p>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="h-[24px] relative shrink-0 w-[21px]">
                            <div className="absolute inset-[-4.17%_-4.76%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
                                <g filter="url(#filter0_g_check_office)">
                                  <path d={pricingSvgPaths.pf678000} fill="#D4FF47" />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_g_check_office" width="23" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="8802" type="fractalNoise" />
                                    <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="2" width="100%" xChannelSelector="R" yChannelSelector="G" />
                                    <feMerge result="effect1_texture_check_office">
                                      <feMergeNode in="displacedImage" />
                                    </feMerge>
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Nunito'] leading-[28px] text-[24px] sm:text-[28px] lg:text-[30px] text-white">{t('pricing_pack_qty_24')}</p>
                        </div>
                        <div className="font-['Nunito'] leading-[24px] text-[20px] sm:text-[22px] lg:text-[24px] text-white">
                          <p className="mb-0"><span className="font-['Nunito'] font-bold leading-[24px]">{t('pricing_free_shipping')}</span><span className="leading-[24px]">{t('pricing_free_shaker_suffix')}</span></p>
                          <p className="leading-[24px]">{t('pricing_shaker_name')}</p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                        <div className="flex flex-col justify-end size-full">
                          <div className="content-stretch flex flex-col gap-[4px] items-start justify-end pb-[24px] relative size-full text-white">
                            <p className="keep-anton font-['Anton'] leading-[0] relative shrink-0 text-[0px]">
                              <span className="leading-[50px] sm:leading-[60px] text-[60px] sm:text-[72px]">1,490</span>
                              <span className="font-['Nunito'] leading-[36px] text-[24px] sm:text-[30px]">{` THB`}</span>
                            </p>
                            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Nunito'] leading-[28px] line-through relative shrink-0 text-[24px] sm:text-[30px] tracking-[-0.4492px]">1,656 THB</p>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openModal({ packId: 'office-survivor' })}
                        className="bg-[#d4ff47] relative rounded-[32px] shrink-0 w-full pb-[8px] pt-[12px] px-[24px] cursor-pointer"
                      >
                        <p className="font-['Nunito'] font-bold leading-[32px] text-[24px] text-black text-center">{t('pricing_buy_now')}</p>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row - Full Width Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="relative bg-white border border-black rounded-[20px] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 rounded-[20px]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] [transform:translateZ(0)]">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]" src={imgContainer2} />
                  </div>
                  <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[20px]" />
                </div>

                {/* Blue Character Illustrations */}
                <div className="hidden lg:block absolute h-[583.001px] left-[710px] top-[-48px] w-[429.276px] pointer-events-none overflow-hidden">
                  <div className="absolute inset-[-0.69%_-0.93%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 437.276 591.001">
                      <g>
                        <path d={pricingSvgPaths.p217a100} fill="black" />
                        <path d={pricingSvgPaths.p25e42c00} fill="black" />
                        <g filter="url(#filter0_g_sub1)">
                          <path d={pricingSvgPaths.p25165600} fill="#A3CCFF" />
                        </g>
                        <g filter="url(#filter1_g_sub2)">
                          <path d={pricingSvgPaths.p3640edf0} fill="#A3CCFF" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="589.429" id="filter0_g_sub1" width="136.719" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="9994" type="fractalNoise" />
                          <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="8" width="100%" xChannelSelector="R" yChannelSelector="G" />
                          <feMerge result="effect1_texture_sub1">
                            <feMergeNode in="displacedImage" />
                          </feMerge>
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="523.841" id="filter1_g_sub2" width="289.307" x="147.968" y="67.1592">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="9994" type="fractalNoise" />
                          <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="8" width="100%" xChannelSelector="R" yChannelSelector="G" />
                          <feMerge result="effect1_texture_sub2">
                            <feMergeNode in="displacedImage" />
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-start p-6 sm:p-[36px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center text-white w-full">
                      <div className="content-stretch flex flex-wrap gap-[16px] items-end relative shrink-0">
                        <p className="keep-anton font-['Anton'] leading-none relative shrink-0 text-[40px] sm:text-[48px] lg:text-[56px] tracking-[2px] uppercase">CrunchFit Subscription</p>
                        <p className="font-['Nunito'] leading-[24px] relative shrink-0 text-[20px] sm:text-[22px] lg:text-[24px]">{t('pricing_sub_caption')}</p>
                      </div>
                      <p className="font-['Nunito'] leading-[24px] relative shrink-0 text-[20px] sm:text-[22px] lg:text-[24px]">{t('pricing_sub_detail')}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal({ type: 'subscription' })}
                      className="bg-[#d4ff47] relative rounded-[32px] shrink-0 w-full pb-[8px] pt-[12px] px-[24px] cursor-pointer"
                    >
                      <p className="font-['Nunito'] font-bold leading-[32px] text-[24px] text-black text-center">{t('pricing_subscribe')}</p>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="reviews"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-12 sm:py-16 lg:py-24 bg-white"
      >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <h2 className="font-['Anton'] text-4xl sm:text-5xl lg:text-6xl text-center text-black uppercase tracking-wider mb-12 sm:mb-16">
              {t('testimonial_title')}
            </h2>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { text: t('review_1'), author: "Namning", bg: "bg-pink-200" },
                { text: t('review_2'), author: "Oat",     bg: "bg-blue-200" },
                { text: t('review_3'), author: "Mint",    bg: "bg-pink-200" },
                { text: t('review_4'), author: "Jane",    bg: "bg-blue-200" },
                { text: t('review_5'), author: "Pee",     bg: "bg-pink-200" },
                { text: t('review_6'), author: "Sam",     bg: "bg-blue-200" },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -6,
                    boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={`${testimonial.bg} border-2 border-black rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer flex flex-col`}
                >
                  <div className="flex-grow">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="black">
                          <path d={svgPaths.p12d1db00} />
                        </svg>
                      ))}
                    </div>

                    <p className="font-['Nunito'] text-black mb-4 leading-relaxed text-base sm:text-lg lg:text-[24px] font-semi-bold">
                      {testimonial.text}
                    </p>
                  </div>
                  <p className="keep-anton font-['Anton'] text-base sm:text-lg text-black uppercase mt-auto">
                    {testimonial.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      {/* Footer */}
      <motion.footer
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-black py-12 sm:py-16 lg:py-20 relative overflow-hidden mx-[0px]"
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            {/* Brand & Contact Info */}
            <div className="flex-1 max-w-[700px]">
              <p className="font-['Nunito'] font-black text-4xl sm:text-5xl lg:text-[56px] text-white mb-6">
                CrunchFit
              </p>
              <div className="space-y-2">
                <p className="font-['Nunito'] text-lg sm:text-xl text-white">
                  99/9 BizTown, Lat Phrao Rd, Chatuchak, Bangkok 10900
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0 w-5 h-5">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_phone)">
                        <rect fill="black" height="20" width="20" />
                        <path clipRule="evenodd" d={footerSvgPaths.p13054a40} fill="white" fillRule="evenodd" />
                      </g>
                      <defs>
                        <clipPath id="clip0_phone">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Nunito'] text-lg sm:text-xl text-white">02-555-4321</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0 w-5 h-5">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_email)">
                        <rect fill="black" height="20" width="20" />
                        <path clipRule="evenodd" d={footerSvgPaths.p30cd280} fill="white" fillRule="evenodd" />
                      </g>
                      <defs>
                        <clipPath id="clip0_email">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Nunito'] text-lg sm:text-xl text-white">order@crunchfit.co.th</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0 w-5 h-5">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_line)">
                        <rect fill="black" height="20" width="20" />
                        <path d={footerSvgPaths.p179a3c80} fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_line">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['Nunito'] text-lg sm:text-xl text-white">Line OA: @CrunchFit</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="shrink-0">
              <p className="font-['Anton'] text-2xl sm:text-[30px] leading-[36px] text-white mb-6">{t('footer_follow')}</p>
              <div className="flex gap-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative rounded-[14px] w-16 h-16 bg-[#ffaca5] flex items-center justify-center hover:shadow-[0_6px_20px_rgba(255,172,165,0.4)] transition-shadow duration-200"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path d={footerSvgPaths.p217fb680} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative rounded-[14px] w-16 h-16 bg-[#a3ccff] flex items-center justify-center hover:shadow-[0_6px_20px_rgba(163,204,255,0.4)] transition-shadow duration-200"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path d={footerSvgPaths.p1eb47e80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={footerSvgPaths.p3d99bc00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M23.3333 8.66667H23.3467" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative rounded-[14px] w-16 h-16 bg-[#ffaca5] flex items-center justify-center hover:shadow-[0_6px_20px_rgba(255,172,165,0.4)] transition-shadow duration-200"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path d={footerSvgPaths.p1e119030} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-[#364153] text-center">
            <p className="font-['Nunito'] text-base text-white">
              © 2026 CrunchFit Foods Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>

        {/* Blue Decorative Background - Left */}
        <div className="absolute h-[982px] left-1/2 -translate-x-1/2 top-[-157px] w-[997px] pointer-events-none opacity-25">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1002.45 988.001">
            <g>
              <path d={footerSvgPaths.pddef600} fill="black" />
              <path d={footerSvgPaths.p36284600} fill="#A3CCFF" />
            </g>
          </svg>
        </div>

        {/* Pink Decorative Background - Right */}
        <div className="absolute h-[861px] left-auto right-[-555px] top-[-176px] w-[899px] pointer-events-none">
          
        </div>
      </motion.footer>
    </div>
  );
}