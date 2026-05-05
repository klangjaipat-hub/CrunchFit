import clsx from "clsx";
import svgPaths from "./svg-auaaqebmpe";
import imgJapanStreetDaytime1 from "figma:asset/2415fad98790c269bf66b616d0cabb031a9f554d.png";
type IntroShadowProps = {
  additionalClassNames?: string;
};

function IntroShadow({ additionalClassNames = "" }: IntroShadowProps) {
  return (
    <div className={clsx("absolute h-[23px] top-[910px] w-[511px]", additionalClassNames)}>
      <div className="absolute inset-[-130.43%_-5.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 83">
          <g filter="url(#filter0_f_1_1540)" id="shadow" opacity="0.4">
            <ellipse cx="285.5" cy="41.5" fill="var(--fill-0, black)" rx="255.5" ry="11.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="83" id="filter0_f_1_1540" width="571" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_1540" stdDeviation="15" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between pt-[120px] relative size-full" data-name="intro">
      <div className="content-stretch flex flex-col gap-[24px] items-center not-italic px-[140px] relative shrink-0 text-center" data-name="text">
        <p className="font-['Anton:Regular',sans-serif] leading-[72px] relative shrink-0 text-[#0a0a0a] text-[72px] tracking-[3px] uppercase whitespace-nowrap">Ultimate guilt-free snack</p>
        <div className="flex flex-col font-['DB_HeaventRounded:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[24px] text-black w-[900px]">
          <p className="leading-[32px]">CrunchFit Plant-Protein Puffs คือขนมอบกรอบที่ปฏิวัติวงการสแน็ค ด้วยการใช้โปรตีนจากถั่วลันเตาสีทอง และข้าวกล้องออร์แกนิก เป็นส่วนผสมหลัก ผ่านกรรมวิธีอบด้วยลมร้อน (Air-Roasting Technology) ไม่ผ่านการทอด 100% ทำให้ได้ความกรอบฟูโดยไร้น้ำมัน ให้โปรตีนสูงถึง 12 กรัมต่อซอง แต่แคลอรี่ต่ำเพียง 90 kcal ปรุงรสด้วยสูตรคลีนที่ปราศจากผงชูรสและลดโซเดียมลง 50% ตอบโจทย์ สายสุขภาพ คนลดน้ำหนัก หรือพนักงานออฟฟิศที่ชอบกินจุบจิบแก้ง่วง แต่ไม่อยากเสียสุขภาพ</p>
        </div>
      </div>
      <div className="aspect-[4096/486] relative shrink-0 w-full" data-name="japan-street-daytime 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[560.7%] left-0 max-w-none top-[-460.7%] w-full" src={imgJapanStreetDaytime1} />
        </div>
      </div>
      <IntroShadow additionalClassNames="left-[184px]" />
      <IntroShadow additionalClassNames="left-[745px]" />
      <div className="absolute h-[479.998px] left-[188px] top-[442px] w-[501.61px]" data-name="character">
        <div className="absolute inset-[-0.63%_-0.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 507.611 485.998">
            <g id="character">
              <path d={svgPaths.p27933b00} fill="var(--fill-0, black)" id="Rectangle 2" />
              <path d={svgPaths.pde541f2} fill="var(--fill-0, black)" id="Rectangle 1" />
              <g filter="url(#filter0_g_1_1476)" id="Exclude">
                <path d={svgPaths.p214e8600} fill="var(--fill-0, #A3CCFF)" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="485.998" id="filter0_g_1_1476" width="507.611" x="1.90339e-08" y="-9.93314e-08">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" seed="9110" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="6" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_1476">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[469.038px] items-center justify-center left-[789px] top-[453px] w-[422.596px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[469.038px] relative w-[422.596px]" data-name="character">
            <div className="absolute inset-[-0.64%_-0.71%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.596 475.038">
                <g id="character">
                  <ellipse cx="394.956" cy="440.563" fill="var(--fill-0, black)" id="Ellipse 51" rx="19.5181" ry="19.7172" />
                  <path d={svgPaths.p3d86d100} fill="var(--fill-0, black)" id="Vector 636" />
                  <path d={svgPaths.p2cd9b300} fill="var(--fill-0, black)" id="Vector 635" />
                  <g filter="url(#filter0_g_1_1169)" id="Subtract">
                    <path d={svgPaths.p2d813e00} fill="var(--fill-0, #A3CCFF)" />
                  </g>
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="475.038" id="filter0_g_1_1169" width="428.596" x="6.82103e-08" y="9.5315e-08">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" seed="9435" type="fractalNoise" />
                    <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="6" width="100%" xChannelSelector="R" yChannelSelector="G" />
                    <feMerge result="effect1_texture_1_1169">
                      <feMergeNode in="displacedImage" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}