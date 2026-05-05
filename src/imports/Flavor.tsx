import svgPaths from "./svg-wpawnqtbot";
import imgGeminiGeneratedImageXbgr6Vxbgr6Vxbgr2 from "figma:asset/50ed46e5354fd32e5f255c31ad41bd92f669aace.png";

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
type ContainerProps = {
  text: string;
  text1: string;
};

function Container({ text, text1 }: ContainerProps) {
  return (
    <Wrapper>
      <p className="font-['Poppins',sans-serif] font-black leading-[32px] relative shrink-0 text-[40px] uppercase w-full">{text}</p>
      <p className="font-['Poppins',sans-serif] leading-[28px] relative shrink-0 text-[24px] w-full">{text1}</p>
    </Wrapper>
  );
}

export default function Flavor() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center px-[140px] py-[120px] relative size-full" data-name="flavor">
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
          <div className="font-['Poppins',sans-serif] font-black leading-[32px] relative shrink-0 text-[40px] uppercase w-full">
            <p className="mb-0">Low Calorie</p>
            <p>{`& Zero Fat`}</p>
          </div>
          <p className="font-['Poppins',sans-serif] leading-[28px] relative shrink-0 text-[24px] w-full">พลังงานเพียง 90 kcal และไม่มีไขมัน ทรานส์ (0% Trans Fat) กินหมดซองก็ไม่ ต้องไป วิ่งชดใช้กรรม</p>
        </Wrapper>
        <Wrapper>
          <p className="font-['Poppins',sans-serif] font-black leading-[32px] relative shrink-0 text-[40px] uppercase w-full">{`Clean & Safe Ingredients`}</p>
          <p className="font-['Poppins',sans-serif] leading-[28px] relative shrink-0 text-[24px] w-full">สูตรคลีน ปราศจากผงชูรส (No MSG), ไม่มีสารกันบูด, และปราศจากกลูเตน (Gluten-Free) สบายท้อง ไม่บวมน้ำ</p>
        </Wrapper>
        <Container text="Vegan Friendly" text1="ส่วนผสมจากพืช 100% ผู้ที่ทานเจ วีแกน หรือแพ้นมวัว (Dairy-Free) สามารถทาน ได้อย่างสบายใจ" />
      </div>
    </div>
  );
}