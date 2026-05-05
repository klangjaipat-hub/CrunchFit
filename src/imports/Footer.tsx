import svgPaths from "./svg-j611oe5awv";
import imgContainer from "figma:asset/f820601cdd1c962b4234b80b4c11431bf8447210.png";
import imgContainer1 from "figma:asset/5d42d89537a46e8f97bcd9396d3860f24f89e84a.png";
import imgContainer2 from "figma:asset/7331c488a7d8f6b3f8f5ab61b638ba30895047d9.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[36px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
      <div className="absolute inset-0 overflow-hidden rounded-[20px]">{children}</div>
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[20px]" />
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#d4ff47] relative rounded-[32px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[8px] pt-[12px] px-[24px] relative w-full">
          <div className="flex flex-col font-['DB_HeaventRounded:Med',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">
            <p className="leading-[32px]">{text}</p>
          </div>
        </div>
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
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
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

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center px-[140px] py-[120px] relative size-full" data-name="Footer">
      <p className="font-['Anton:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#0a0a0a] text-[72px] text-center tracking-[3px] uppercase whitespace-nowrap">Choose Your Pack</p>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[40px] h-[500px] items-center relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[500px] items-start min-h-px min-w-px relative rounded-[20px]">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[4px_4px_0px_0px_black]" />
            <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] w-full" data-name="Container">
              <Wrapper>
                <img alt="" className="absolute h-[226.2%] left-[-16.53%] max-w-none top-[-63.03%] w-[133.23%]" src={imgContainer} />
              </Wrapper>
              <Wrapper1>
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
                  <Text text="x 6 ซอง" />
                </div>
                <Helper text="390" text1="414 THB" />
                <ButtonText text="ซื้อเลย" />
              </Wrapper1>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[20px]">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[4px_4px_0px_0px_black]" />
            <div className="h-[500px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
              <Wrapper>
                <img alt="" className="absolute h-[157.4%] left-[-54.18%] max-w-none top-[-33.17%] w-[208.47%]" src={imgContainer1} />
              </Wrapper>
              <Wrapper1>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[654.44px] left-[calc(50%+114.72px)] top-[calc(50%+146.22px)] w-[676.657px]" data-name="character">
                  <div className="absolute inset-[-0.46%_-0.44%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682.657 660.44">
                      <g id="character">
                        <path d={svgPaths.p6e19700} fill="var(--fill-0, black)" id="Rectangle 2" />
                        <path d={svgPaths.p17dbe700} fill="var(--fill-0, black)" id="Rectangle 1" />
                        <g filter="url(#filter0_g_7_830)" id="Exclude">
                          <path d={svgPaths.p1da8d800} fill="var(--fill-0, #A3CCFF)" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="660.44" id="filter0_g_7_830" width="682.657" x="-1.05267e-08" y="-2.43717e-08">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" seed="9110" type="fractalNoise" />
                          <feDisplacementMap height="100%" in="shape" result="displacedImage" scale="6" width="100%" xChannelSelector="R" yChannelSelector="G" />
                          <feMerge result="effect1_texture_7_830">
                            <feMergeNode in="displacedImage" />
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
                  <p className="font-['Anton:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[56px] text-white tracking-[2px] uppercase whitespace-nowrap">Office Survivor</p>
                  <Text text="x 24 ซอง" />
                  <div className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
                    <p className="mb-0">
                      <span className="font-['DB_HeaventRounded:Bold',sans-serif] leading-[24px] not-italic">ส่งฟรี!</span>
                      <span className="leading-[24px]">{` พร้อมแถมกระบอกน้ำปั่นโปรตีน`}</span>
                    </p>
                    <p className="leading-[24px]">CrunchFit Shaker 1 ใบ</p>
                  </div>
                </div>
                <Helper text="1,490" text1="1,656 THB" />
                <ButtonText text="ซื้อเลย" />
              </Wrapper1>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[4px_4px_0px_0px_black]" />
          <div className="relative rounded-[20px] shrink-0 w-full" data-name="Container">
            <Wrapper>
              <img alt="" className="absolute h-[316.98%] left-0 max-w-none top-[-92.69%] w-full" src={imgContainer2} />
            </Wrapper>
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
                <ButtonText text="สมัครสมาชิก" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}