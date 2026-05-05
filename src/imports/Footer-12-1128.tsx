import clsx from "clsx";
import svgPaths from "./svg-ngg6cmdqky";
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

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-black content-stretch flex gap-[48px] items-start justify-center pt-[80px] px-[140px] relative size-full" data-name="footer">
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
  );
}