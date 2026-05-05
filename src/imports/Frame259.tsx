import svgPaths from "./svg-8tdcb4eb49";
import imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr2 from "figma:asset/50ed46e5354fd32e5f255c31ad41bd92f669aace.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] size-[719px] top-[calc(50%+0.5px)]">
        <div className="absolute inset-[2.77%_4.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 649.818 679.201">
            <g filter="url(#filter0_g_1_1162)" id="Star 1">
              <path d={svgPaths.p1a7c1f00} fill="var(--fill-0, #A3CCFF)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="679.201" id="filter0_g_1_1162" width="649.818" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="0.1428571492433548 0.1428571492433548" numOctaves="3" seed="7992" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="14" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_1162">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#e9ec5c] bg-clip-text font-['Anton:Regular',sans-serif] leading-[1.3] left-0 not-italic text-[130px] text-[transparent] top-[calc(50%-253px)] tracking-[5px] uppercase whitespace-nowrap">
        <p className="mb-0">Truffle</p>
        <p className="mb-0">Vegan</p>
        <p>Cheese</p>
      </div>
      <div className="-translate-x-full absolute font-['Anton:Regular',sans-serif] leading-[1.3] left-[1160px] not-italic text-[#e65248] text-[130px] text-right top-[calc(50%-253px)] uppercase whitespace-nowrap">
        <p className="mb-0">Spicy</p>
        <p className="mb-0">Korean</p>
        <p>BBQ</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[456px] left-[calc(50%-0.5px)] top-1/2 w-[463px]" data-name="Gemini_Generated_Image_xbgr6vxbgr6vxbgr 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.04%] left-[-39.91%] max-w-none top-[-0.02%] w-[180.4%]" src={imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr2} />
        </div>
      </div>
    </div>
  );
}