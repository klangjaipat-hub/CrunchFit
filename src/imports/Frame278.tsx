import svgPaths from "./svg-64y53xsqw3";
import imgContainer from "figma:asset/f820601cdd1c962b4234b80b4c11431bf8447210.png";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[20px] size-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[4px_4px_0px_0px_black]" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] w-full" data-name="Container">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <img alt="" className="absolute h-[226.2%] left-[-16.53%] max-w-none top-[-63.03%] w-[133.23%]" src={imgContainer} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[20px]" />
        </div>
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[36px] relative size-full">
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
                <p className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">x 6 ซอง</p>
              </div>
            </div>
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
              <div className="flex flex-col justify-end size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-end not-italic pb-[24px] relative size-full text-white whitespace-nowrap">
                  <p className="font-['Anton:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px]">
                    <span className="leading-[60px] text-[72px]">390</span>
                    <span className="font-['DB_HeaventRounded:Regular',sans-serif] leading-[36px] text-[30px]">{` THB`}</span>
                  </p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid font-['DB_HeaventRounded:Regular',sans-serif] leading-[28px] line-through relative shrink-0 text-[30px] tracking-[-0.4492px]">414 THB</p>
                </div>
              </div>
            </div>
            <div className="bg-[#d4ff47] relative rounded-[32px] shrink-0 w-full" data-name="Button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center pb-[8px] pt-[12px] px-[24px] relative w-full">
                  <div className="flex flex-col font-['DB_HeaventRounded:Med',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">
                    <p className="leading-[32px]">ซื้อเลย</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}