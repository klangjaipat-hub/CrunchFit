import clsx from "clsx";
import svgPaths from "./svg-abgizgdck8";
import imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr3 from "figma:asset/63a2281d47b207817ab2bdd2ec6f3b00792b96e6.png";
import imgProductImages from "figma:asset/5344db3a38f5e98d5c6b71fbc57d9a950482784e.png";
import imgUnnamed22 from "figma:asset/acf3b5c2869856497d5ac8dece7eaf0b58265a4a.png";
import imgUnnamed23 from "figma:asset/48ad168cd9e9545be2e362f09bc898492f359bb5.png";
import imgJapanStreetDaytime1 from "figma:asset/2415fad98790c269bf66b616d0cabb031a9f554d.png";
import imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr2 from "figma:asset/50ed46e5354fd32e5f255c31ad41bd92f669aace.png";
import imgUnion from "figma:asset/55de28647d286b6cc32a76135e9937b9299e85f1.png";
import imgContainer from "figma:asset/f820601cdd1c962b4234b80b4c11431bf8447210.png";
import imgContainer1 from "figma:asset/5d42d89537a46e8f97bcd9396d3860f24f89e84a.png";
import imgContainer2 from "figma:asset/7331c488a7d8f6b3f8f5ab61b638ba30895047d9.png";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type LinkProps = {
  additionalClassNames?: string;
};

function Link({ children, additionalClassNames = "" }: React.PropsWithChildren<LinkProps>) {
  return (
    <div className={clsx("relative rounded-[14px] shrink-0 size-[64px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] relative size-full">{children}</div>
    </div>
  );
}

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[36px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
      <div className="absolute inset-0 overflow-hidden rounded-[20px]">{children}</div>
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[20px]" />
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] self-stretch">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px] shadow-[4px_4px_0px_0px_black]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center not-italic p-[32px] relative size-full text-black text-center">{children}</div>
      </div>
    </div>
  );
}
type Container4Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Container4({ text, text1, additionalClassNames = "" }: Container4Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[16px] items-center justify-center px-[32px] py-[24px] relative rounded-[20px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px] shadow-[4px_4px_0px_0px_black]" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <Vector />
        <Vector />
        <Vector />
        <Vector />
        <Vector />
      </div>
      <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[32.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-full">{text}</p>
      <p className="font-['Anton:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] uppercase w-full">{text1}</p>
    </div>
  );
}

function Vector() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g filter="url(#filter0_g_1_1167)" id="Vector">
            <path d={svgPaths.p12d1db00} fill="var(--fill-0, #0A0A0A)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_g_1_1167" width="20" x="6.2388e-10" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="5336" type="fractalNoise" />
              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="4" width="100%" xChannelSelector="R" yChannelSelector="G" />
              <feMerge result="effect1_texture_1_1167">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ additionalClassNames = "" }: ButtonProps) {
  return (
    <div className="bg-[#d4ff47] relative rounded-[32px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <Text text="ซื้อเลย" additionalClassNames="w-full" />
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-end not-italic pb-[24px] relative size-full text-white whitespace-nowrap">
          <p className="font-['Anton:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px]">
            <span className="leading-[60px] text-[72px]">{text}</span>
            <span className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[36px] text-[30px]">{` THB`}</span>
          </p>
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] line-through relative shrink-0 text-[30px] tracking-[-0.4492px]">{text1}</p>
        </div>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[21px]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
            <g filter="url(#filter0_g_1_1003)" id="Vector">
              <path d={svgPaths.pf678000} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_g_1_1003" width="23" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="8802" type="fractalNoise" />
                <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="2" width="100%" xChannelSelector="R" yChannelSelector="G" />
                <feMerge result="effect1_texture_1_1003">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}

function Container23Helper() {
  return (
    <div className="h-[40px] relative shrink-0 w-0">
      <div className="absolute inset-[-1.25%_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 41">
          <path d="M0.5 0.5V40.5" id="Vector 639" stroke="var(--stroke-0, black)" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['DB_HeaventRounded:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[24px] text-center">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-center min-h-px min-w-px relative">
      <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type Container3Props = {
  text: string;
  text1: string;
};

function Container3({ text, text1 }: Container3Props) {
  return (
    <div className="content-stretch flex items-start justify-between pb-[3px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[0px] text-[24px] whitespace-nowrap">
        <span className="leading-[24px]">{text}</span>
        <span className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px]">{` 0mg`}</span>
      </p>
      <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">{text1}</p>
    </div>
  );
}
type Container2Props = {
  text: string;
  text1: string;
};

function Container2({ text, text1 }: Container2Props) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between leading-[24px] not-italic pb-[3px] pl-[16px] relative text-[#0a0a0a] text-[24px] w-full whitespace-nowrap">
        <p className="font-['DB_HeaventRounded:Regular',sans-serif] relative shrink-0">{text}</p>
        <p className="font-['DB_HeaventRounded:Bold',sans-serif] relative shrink-0">{text1}</p>
      </div>
    </div>
  );
}
type Container1Props = {
  text: string;
  text1: string;
};

function Container1({ text, text1 }: Container1Props) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px] shadow-[4px_4px_0px_0px_black]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center not-italic px-[32px] py-[24px] relative text-[#0a0a0a] text-center w-full whitespace-nowrap">
          <p className="font-['Anton:Regular',sans-serif] leading-[32px] relative shrink-0 text-[40px]">{text}</p>
          <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[20px] relative shrink-0 text-[24px]">{text1}</p>
        </div>
      </div>
    </div>
  );
}
type ContainerProps = {
  text: string;
  text1: string;
};

function Container({ text, text1 }: ContainerProps) {
  return (
    <Wrapper>
      <p className="font-['DB_HeaventRounded:Black',sans-serif] leading-[32px] relative shrink-0 text-[40px] uppercase w-full">{text}</p>
      <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] relative shrink-0 text-[24px] w-full">{text1}</p>
    </Wrapper>
  );
}
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
type UnnamedImage1Props = {
  additionalClassNames?: string;
};

function UnnamedImage1({ additionalClassNames = "" }: UnnamedImage1Props) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[113.15%] left-[-150.6%] max-w-none top-[-10.04%] w-[283.87%]" src={imgUnnamed23} />
      </div>
    </div>
  );
}
type UnnamedImageProps = {
  additionalClassNames?: string;
};

function UnnamedImage({ additionalClassNames = "" }: UnnamedImageProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[112.82%] left-[-33.93%] max-w-none top-[-10.15%] w-[281.04%]" src={imgUnnamed22} />
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center pb-[8px] pt-[12px] px-[24px] relative", additionalClassNames)}>
      <div className="flex flex-col font-['DB_HeaventRounded:Med',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">
        <p className="leading-[32px]">{text}</p>
      </div>
    </div>
  );
}

export default function SinglePageSalesFunnel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Single-Page Sales Funnel">
      <div className="bg-white h-[100px] relative shrink-0 w-full" data-name="top-nav">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[40px] py-[8px] relative size-full">
            <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="action">
              <div className="overflow-clip relative shrink-0 size-[40px]" data-name="mingcute:menu-line">
                <div className="absolute inset-[16.67%_12.5%_0.78%_12.5%]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33.0232">
                    <g id="Group">
                      <g id="Vector" />
                      <path d={svgPaths.p2a5e9400} fill="var(--fill-0, black)" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <Text text="ซื้อเลย" additionalClassNames="bg-[#d4ff47] rounded-[32px] shrink-0" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Nunito:Black',sans-serif] font-black leading-[normal] left-1/2 text-[72px] text-black text-center top-[calc(50%-49px)] whitespace-nowrap">CrunchFit</p>
            <div className="h-[72px] relative shrink-0 w-[70px]" data-name="Gemini_Generated_Image_xbgr6vxbgr6vxbgr 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[-43.45%] max-w-none top-0 w-[189.12%]" src={imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1030px] relative shrink-0 w-full" data-name="Main Content">
        <div className="flex flex-col items-center justify-end size-full">
          <div className="content-stretch flex flex-col items-center justify-end pt-[100px] px-[140px] relative size-full">
            <div className="content-stretch flex gap-[24px] h-[700px] items-end justify-center pb-[24px] relative rounded-[20px] shrink-0 w-full" data-name="Product Images">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                <img alt="" className="absolute h-[179.34%] left-[-53.48%] max-w-none top-[-0.04%] w-[161.76%]" src={imgProductImages} />
              </div>
              <Wrapper3 additionalClassNames="h-[582.59px] w-[487.837px]">
                <div className="flex-none rotate-15">
                  <UnnamedImage additionalClassNames="h-[504px] w-[370px]" />
                </div>
              </Wrapper3>
              <Wrapper3 additionalClassNames="h-[584.522px] w-[488.355px]">
                <div className="-rotate-15 flex-none">
                  <UnnamedImage1 additionalClassNames="h-[506px] w-[370px]" />
                </div>
              </Wrapper3>
            </div>
            <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-[100px] w-[490px]" data-name="Headlines">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 490 338">
                <g id="Headlines">
                  <g id="Plant">
                    <path d={svgPaths.p7d61c00} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p3adccc30} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p5ed7700} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p2fee0a80} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.pc83b000} fill="var(--fill-0, #FF5A4B)" />
                  </g>
                  <g id="Protein">
                    <path d={svgPaths.p27912d80} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p925d600} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p386db900} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p92c2b80} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p1db83e00} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p16951a00} fill="var(--fill-0, #FF5A4B)" />
                    <path d={svgPaths.p2e7b0e00} fill="var(--fill-0, #FF5A4B)" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[995px] items-center justify-between pt-[120px] relative shrink-0 w-[1440px]" data-name="intro">
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
      <div className="content-stretch flex flex-col gap-[80px] items-center px-[140px] py-[120px] relative shrink-0 w-[1440px]" data-name="Footer">
        <div className="h-[700px] relative shrink-0 w-full">
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
        <div className="content-stretch flex gap-[24px] h-[252px] items-start relative shrink-0 w-full">
          <Container text="High Plant Protein" text1="ให้โปรตีน 12 กรัมต่อซอง (เทียบเท่าไข่ไก่ เกือบ 2 ฟอง) ช่วยให้อิ่มท้องนาน อยู่ท้อง ไม่ทำให้หิวจุกจิกหลังกินเสร็จ" />
          <Wrapper>
            <div className="font-['DB_HeaventRounded:Black',sans-serif] leading-[32px] relative shrink-0 text-[40px] uppercase w-full">
              <p className="mb-0">Low Calorie</p>
              <p>{`& Zero Fat`}</p>
            </div>
            <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] relative shrink-0 text-[24px] w-full">พลังงานเพียง 90 kcal และไม่มีไขมัน ทรานส์ (0% Trans Fat) กินหมดซองก็ไม่ ต้องไป วิ่งชดใช้กรรม</p>
          </Wrapper>
          <Wrapper>
            <p className="font-['DB_HeaventRounded:Black',sans-serif] leading-[32px] relative shrink-0 text-[40px] uppercase w-full">{`Clean & Safe Ingredients`}</p>
            <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] relative shrink-0 text-[24px] w-full">สูตรคลีน ปราศจากผงชูรส (No MSG), ไม่มีสารกันบูด, และปราศจากกลูเตน (Gluten-Free) สบายท้อง ไม่บวมน้ำ</p>
          </Wrapper>
          <Container text="Vegan Friendly" text1="ส่วนผสมจากพืช 100% ผู้ที่ทานเจ วีแกน หรือแพ้นมวัว (Dairy-Free) สามารถทาน ได้อย่างสบายใจ" />
        </div>
      </div>
      <div className="h-[1193.869px] relative shrink-0 w-[1440.001px]" data-name="nutrition-fact">
        <div className="absolute h-[1193.869px] left-0 top-0 w-[1440.001px]" data-name="Union">
          <img alt="" className="absolute block max-w-none size-full" height="1193.869" src={imgUnion} width="1440.001" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 px-[140px] py-[120px] top-[calc(50%+0.07px)] w-[1440px]" data-name="Footer">
          <div className="content-stretch flex gap-[80px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
              <div className="h-[586px] overflow-clip relative shrink-0 w-[600px]" data-name="image">
                <div className="-translate-y-1/2 absolute contents left-[8.14%] right-[8%] top-1/2">
                  <div className="-translate-y-1/2 absolute aspect-[472.7374519757868/585.5872520106495] flex items-center justify-center left-[8.14%] right-[13.07%] top-[calc(50%-0.21px)]">
                    <div className="-rotate-10 flex-none h-[526.343px] w-[387.222px]">
                      <UnnamedImage additionalClassNames="size-full" />
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute aspect-[255.7087288555249/318.3072343044387] flex items-center justify-center left-[49.38%] right-[8%] top-[calc(50%+133.85px)]">
                    <div className="flex-none h-[286.336px] rotate-10 w-[209.165px]">
                      <UnnamedImage1 additionalClassNames="size-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                <Container1 text="90" text1="แคลอรี่" />
                <Container1 text="0g" text1="น้ำตาล" />
                <Container1 text="12g" text1="โปรตีน" />
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-[480px]">
              <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="App">
                <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                  <div className="content-stretch flex items-center justify-center pb-[8px] relative shrink-0 w-full" data-name="Heading 3">
                    <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
                    <div className="h-[46px] relative shrink-0 w-[440px]" data-name="Nutrition Facts">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 46">
                        <g id="Nutrition Facts">
                          <path d={svgPaths.p3af55380} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p224c4180} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p3cb2ca00} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p1804c880} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p3965b300} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p39843e00} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p2e8da880} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p362f2c00} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p3699a880} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p1c5c9700} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.pc1da130} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p180dc00} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p354e3100} fill="var(--fill-0, #0A0A0A)" />
                          <path d={svgPaths.p274b9a00} fill="var(--fill-0, #0A0A0A)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                    <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">1 serving per container</p>
                    <div className="content-stretch flex items-center justify-between pb-[4px] relative shrink-0 w-full" data-name="Paragraph">
                      <div aria-hidden="true" className="absolute border-b-4 border-black border-solid inset-0 pointer-events-none" />
                      <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">Serving size</p>
                      <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">1 Package (35g)</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-b-4 border-black border-solid inset-0 pointer-events-none" />
                      <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">Amount Per Serving</p>
                      <div className="content-stretch flex font-['Anton:Regular',sans-serif] h-[40px] items-start justify-between leading-[40px] not-italic relative shrink-0 text-[#0a0a0a] text-[36px] w-full whitespace-nowrap" data-name="Container">
                        <p className="relative shrink-0">Calories</p>
                        <p className="relative shrink-0">90</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[32px] items-end pb-[4px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-b-4 border-black border-solid inset-0 pointer-events-none" />
                      <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-right whitespace-nowrap">% Daily Value*</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex items-start justify-between pb-[3px] relative shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
                        <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[0px] text-[24px] whitespace-nowrap">
                          <span className="leading-[24px]">Total Fat</span>
                          <span className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px]">{` 1g`}</span>
                        </p>
                        <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">1%</p>
                      </div>
                      <Container2 text="Saturated Fat 0g" text1="0%" />
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-start justify-between pb-[3px] pl-[16px] pr-[140.773px] relative w-full">
                          <p className="font-['DB_HeaventRounded:Italic',sans-serif] italic leading-[0] relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">
                            <span className="leading-[24px]">{`Trans `}</span>
                            <span className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px] not-italic">Fat</span>
                            <span className="leading-[24px]">{` 0g`}</span>
                          </p>
                        </div>
                      </div>
                      <Container3 text="Cholesterol" text1="0%" />
                      <Container3 text="Sodium" text1="0%" />
                      <div className="content-stretch flex items-start justify-between pb-[3px] relative shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
                        <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[0px] text-[24px] whitespace-nowrap">
                          <span className="leading-[24px]">Total Carbohydrate</span>
                          <span className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px]">{` 8g`}</span>
                        </p>
                        <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">3%</p>
                      </div>
                      <Container2 text="Dietary Fiber 0g" text1="0%" />
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-start justify-between pb-[3px] pl-[16px] pr-[125.219px] relative w-full">
                          <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">Total Sugars 0g</p>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-b-4 border-black border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-start justify-between not-italic pb-[6px] pl-[32px] relative text-[#0a0a0a] text-[24px] w-full whitespace-nowrap">
                          <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[20px] relative shrink-0">Includes 0g Added Sugars</p>
                          <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] relative shrink-0">0%</p>
                        </div>
                      </div>
                      <div className="content-stretch flex font-['DB_HeaventRounded:Bold',sans-serif] items-start justify-between not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-full whitespace-nowrap" data-name="Container">
                        <p className="leading-[24px] relative shrink-0">Protein 12g</p>
                        <p className="leading-[28px] relative shrink-0">24%</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-black border-solid border-t-4 inset-0 pointer-events-none" />
                      <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] w-full">*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[72px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px] shadow-[4px_4px_0px_0px_black]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
                <Text1 text="มีส่วนผสมของถั่วเหลือง" />
                <Container23Helper />
                <Text2 text="Gluten-Free, Dairy-Free, Nut-Free" />
                <Container23Helper />
                <Text1 text="บรรจุภัณฑ์ Zip-lock กันความชื้นและแสง" />
                <Container23Helper />
                <Text2 text="อายุเก็บรักษา 8 เดือน (นับจากวันผลิต)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[80px] items-center px-[140px] py-[120px] relative shrink-0 w-[1440px]" data-name="Footer">
        <p className="font-['Anton:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#0a0a0a] text-[72px] text-center tracking-[3px] uppercase whitespace-nowrap">Choose Your Pack</p>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[40px] h-[500px] items-center relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[500px] items-start min-h-px min-w-px relative rounded-[20px]">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[4px_4px_0px_0px_black]" />
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] w-full" data-name="Container">
                <Wrapper1>
                  <img alt="" className="absolute h-[226.2%] left-[-16.53%] max-w-none top-[-63.03%] w-[133.23%]" src={imgContainer} />
                </Wrapper1>
                <Wrapper2>
                  <div className="absolute h-[752.999px] left-[-47.49px] top-[86px] w-[763.613px]">
                    <div className="absolute inset-[-0.53%_0_-0.53%_-0.52%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 767.614 760.999">
                        <g id="Group 3">
                          <path d={svgPaths.p3e59a200} fill="var(--fill-0, black)" id="Rectangle 3" />
                          <g filter="url(#filter0_g_1_1005)" id="Exclude">
                            <path d={svgPaths.p2f936000} fill="var(--fill-0, #A3CCFF)" />
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="760.999" id="filter0_g_1_1005" width="763.976" x="-2.4732e-08" y="-9.07267e-09">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="4149" type="fractalNoise" />
                            <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="8" width="100%" xChannelSelector="R" yChannelSelector="G" />
                            <feMerge result="effect1_texture_1_1005">
                              <feMergeNode in="displacedImage" />
                            </feMerge>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
                    <p className="font-['Anton:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[56px] text-white tracking-[2px] uppercase whitespace-nowrap">Starter Pack</p>
                    <Text3 text="x 6 ซอง" />
                  </div>
                  <Helper text="390" text1="414 THB" />
                  <Button />
                </Wrapper2>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[20px]">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[4px_4px_0px_0px_black]" />
              <div className="h-[500px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
                <Wrapper1>
                  <img alt="" className="absolute h-[157.4%] left-[-54.18%] max-w-none top-[-33.17%] w-[208.47%]" src={imgContainer1} />
                </Wrapper1>
                <Wrapper2>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[654.44px] left-[calc(50%+114.72px)] top-[calc(50%+146.22px)] w-[676.657px]" data-name="character">
                    <div className="absolute inset-[-0.46%_-0.44%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682.657 660.44">
                        <g id="character">
                          <path d={svgPaths.p6e19700} fill="var(--fill-0, black)" id="Rectangle 2" />
                          <path d={svgPaths.p17dbe700} fill="var(--fill-0, black)" id="Rectangle 1" />
                          <g filter="url(#filter0_g_1_1192)" id="Exclude">
                            <path d={svgPaths.p12adb6c0} fill="var(--fill-0, #FFACA5)" />
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="660.44" id="filter0_g_1_1192" width="682.657" x="-1.05267e-08" y="-2.43717e-08">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" seed="9110" type="fractalNoise" />
                            <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="6" width="100%" xChannelSelector="R" yChannelSelector="G" />
                            <feMerge result="effect1_texture_1_1192">
                              <feMergeNode in="displacedImage" />
                            </feMerge>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
                    <p className="font-['Anton:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[56px] text-white tracking-[2px] uppercase whitespace-nowrap">Office Survivor</p>
                    <Text3 text="x 24 ซอง" />
                    <div className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
                      <p className="mb-0">
                        <span className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] not-italic">ส่งฟรี!</span>
                        <span className="leading-[24px]">{` พร้อมแถมกระบอกน้ำปั่นโปรตีน`}</span>
                      </p>
                      <p className="leading-[24px]">CrunchFit Shaker 1 ใบ</p>
                    </div>
                  </div>
                  <Helper text="1,490" text1="1,656 THB" />
                  <Button />
                </Wrapper2>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[4px_4px_0px_0px_black]" />
            <div className="relative rounded-[20px] shrink-0 w-full" data-name="Container">
              <Wrapper1>
                <img alt="" className="absolute h-[316.98%] left-0 max-w-none top-[-92.69%] w-full" src={imgContainer2} />
              </Wrapper1>
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start p-[36px] relative w-full">
                  <div className="absolute h-[583.001px] left-[710px] top-[-48px] w-[429.276px]">
                    <div className="absolute inset-[-0.69%_-0.93%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 437.276 591.001">
                        <g id="Group 1144">
                          <path d={svgPaths.p217a100} fill="var(--fill-0, black)" id="Vector 642" />
                          <path d={svgPaths.p25e42c00} fill="var(--fill-0, black)" id="Vector 643" />
                          <g filter="url(#filter0_g_1_1041)" id="Exclude">
                            <path d={svgPaths.p25165600} fill="var(--fill-0, #A3CCFF)" />
                          </g>
                          <g filter="url(#filter1_g_1_1041)" id="Exclude_2">
                            <path d={svgPaths.p3640edf0} fill="var(--fill-0, #A3CCFF)" />
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="589.429" id="filter0_g_1_1041" width="136.719" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="9994" type="fractalNoise" />
                            <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="8" width="100%" xChannelSelector="R" yChannelSelector="G" />
                            <feMerge result="effect1_texture_1_1041">
                              <feMergeNode in="displacedImage" />
                            </feMerge>
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="523.841" id="filter1_g_1_1041" width="289.307" x="147.968" y="67.1592">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feTurbulence baseFrequency="0.25 0.25" numOctaves="3" seed="9994" type="fractalNoise" />
                            <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="8" width="100%" xChannelSelector="R" yChannelSelector="G" />
                            <feMerge result="effect1_texture_1_1041">
                              <feMergeNode in="displacedImage" />
                            </feMerge>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start justify-center not-italic relative shrink-0 text-white w-full whitespace-nowrap">
                    <div className="content-stretch flex gap-[16px] items-end relative shrink-0">
                      <p className="font-['Anton:Regular',sans-serif] leading-none relative shrink-0 text-[56px] tracking-[2px] uppercase">CrunchFit Subscription</p>
                      <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] relative shrink-0 text-[24px]">(ส่งตรงถึงออฟฟิศทุกเดือน)</p>
                    </div>
                    <p className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] relative shrink-0 text-[24px]">รับส่วนลดเพิ่ม 15% จากทุกแพ็กเกจ (สามารถยกเลิกหรือเปลี่ยนรสชาติได้ตลอดเวลา)</p>
                  </div>
                  <div className="bg-[#d4ff47] relative rounded-[32px] shrink-0 w-full" data-name="Button">
                    <div className="flex flex-row items-center justify-center size-full">
                      <Text text="สมัครสมาชิก" additionalClassNames="w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[80px] items-center pb-[200px] pt-[120px] px-[140px] relative shrink-0 w-[1440px]" data-name="Footer">
        <p className="font-['Anton:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#0a0a0a] text-[72px] text-center tracking-[3px] uppercase whitespace-nowrap">What people say</p>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[40px] items-end justify-center relative shrink-0 w-full">
            <Container4 text="แคลต่ำ รสทรัฟเฟิลหอมทะลุซอง แก้ง่วงได้ดีมาก" text1="Ton" additionalClassNames="bg-[#ffaca5] w-[370px]" />
            <Container4 text="โปรตีนตั้ง 12 กรัม กินแทนมื้อว่างได้เลย" text1="Praew" additionalClassNames="bg-[#a3ccff] w-[315px]" />
            <Container4 text="รสชาติจัดจ้านกว่าขนมคลีนทั่วไป" text1="Golf" additionalClassNames="bg-[#ffaca5] w-[276px]" />
          </div>
          <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full">
            <Container4 text="รส Spicy BBQ อร่อยมากกกก สิวไม่ขึ้น แฮปปี้ค่ะ" text1="fah" additionalClassNames="bg-[#ffaca5] w-[379px]" />
            <Container4 text="แพ็กเกจดูดี วางบนโต๊ะทำงานแล้วเท่ดี" text1="nop" additionalClassNames="bg-[#a3ccff] w-[301px]" />
          </div>
        </div>
      </div>
      <div className="bg-black relative shrink-0 w-full" data-name="footer">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[48px] items-start justify-center pt-[80px] px-[140px] relative w-full">
            <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[700px]">
              <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-h-px min-w-px relative" data-name="Container">
                    <p className="font-['Nunito:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[56px] text-center text-white whitespace-nowrap">CrunchFit</p>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
                      <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">99/9 BizTown, Lat Phrao Rd, Chatuchak, Bangkok 10900</p>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                        <Icon1>
                          <g clipPath="url(#clip0_1_1447)" id="icon">
                            <rect fill="black" height="20" width="20" />
                            <g filter="url(#filter0_g_1_1447)" id="Vector">
                              <path clipRule="evenodd" d={svgPaths.p13054a40} fill="var(--fill-0, white)" fillRule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_g_1_1447" width="22" x="-1" y="-1">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="3453" type="fractalNoise" />
                              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="4" width="100%" xChannelSelector="R" yChannelSelector="G" />
                              <feMerge result="effect1_texture_1_1447">
                                <feMergeNode in="displacedImage" />
                              </feMerge>
                            </filter>
                            <clipPath id="clip0_1_1447">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </Icon1>
                        <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">02-555-4321</p>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                        <Icon1>
                          <g clipPath="url(#clip0_1_1000)" id="icon">
                            <rect fill="black" height="20" width="20" />
                            <g filter="url(#filter0_g_1_1000)" id="Vector">
                              <path clipRule="evenodd" d={svgPaths.p30cd280} fill="var(--fill-0, white)" fillRule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_g_1_1000" width="22" x="-1" y="-1">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="509" type="fractalNoise" />
                              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="4" width="100%" xChannelSelector="R" yChannelSelector="G" />
                              <feMerge result="effect1_texture_1_1000">
                                <feMergeNode in="displacedImage" />
                              </feMerge>
                            </filter>
                            <clipPath id="clip0_1_1000">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </Icon1>
                        <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">order@crunchfit.co.th</p>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                        <Icon1>
                          <g clipPath="url(#clip0_1_1164)" id="icon">
                            <rect fill="black" height="20" width="20" />
                            <g filter="url(#filter0_g_1_1164)" id="Vector">
                              <path d={svgPaths.p179a3c80} fill="var(--fill-0, white)" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_g_1_1164" width="22" x="-1" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feTurbulence baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="509" type="fractalNoise" />
                              <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="4" width="100%" xChannelSelector="R" yChannelSelector="G" />
                              <feMerge result="effect1_texture_1_1164">
                                <feMergeNode in="displacedImage" />
                              </feMerge>
                            </filter>
                            <clipPath id="clip0_1_1164">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </Icon1>
                        <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Line OA: @CrunchFit</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
                  <p className="font-['Anton:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">Follow Us</p>
                  <div className="content-stretch flex gap-[24px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
                    <Link additionalClassNames="bg-[#ffaca5]">
                      <Icon>
                        <path d={svgPaths.p217fb680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </Icon>
                    </Link>
                    <Link additionalClassNames="bg-[#a3ccff]">
                      <Icon>
                        <path d={svgPaths.p1eb47e80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p3d99bc00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d="M23.3333 8.66667H23.3467" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </Icon>
                    </Link>
                    <Link additionalClassNames="bg-[#ffaca5]">
                      <Icon>
                        <path d={svgPaths.p1e119030} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </Icon>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center pb-[8px] pt-[24px] relative shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[#364153] border-solid border-t inset-0 pointer-events-none" />
                <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">© 2026 CrunchFit Foods Co., Ltd. All rights reserved.</p>
              </div>
            </div>
            <div className="absolute h-[982.001px] left-[-555px] top-[-157px] w-[996.506px]">
              <div className="absolute inset-[-0.31%_-0.29%_-0.31%_-0.3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1002.45 988.001">
                  <g id="Group 1145">
                    <path d={svgPaths.pddef600} fill="var(--fill-0, black)" id="Rectangle 3" />
                    <g filter="url(#filter0_g_1_963)" id="Exclude">
                      <path d={svgPaths.p36284600} fill="var(--fill-0, #A3CCFF)" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="988.001" id="filter0_g_1_963" width="1002.45" x="2.17247e-09" y="1.05779e-08">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" seed="4149" type="fractalNoise" />
                      <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="6" width="100%" xChannelSelector="R" yChannelSelector="G" />
                      <feMerge result="effect1_texture_1_963">
                        <feMergeNode in="displacedImage" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute h-[860.623px] left-[934px] top-[-176px] w-[899.224px]">
              <div className="absolute inset-[-0.35%_-0.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 905.224 866.623">
                  <g id="Group 3">
                    <path d={svgPaths.p17b50780} fill="var(--fill-0, black)" id="Rectangle 2" />
                    <path d={svgPaths.p3758b1c0} fill="var(--fill-0, black)" id="Rectangle 1" />
                    <g filter="url(#filter0_g_1_1546)" id="Exclude">
                      <path d={svgPaths.p105e7c00} fill="var(--fill-0, #FFACA5)" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="866.623" id="filter0_g_1_1546" width="905.224" x="2.73028e-08" y="3.66011e-08">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" seed="9110" type="fractalNoise" />
                      <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="6" width="100%" xChannelSelector="R" yChannelSelector="G" />
                      <feMerge result="effect1_texture_1_1546">
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
    </div>
  );
}