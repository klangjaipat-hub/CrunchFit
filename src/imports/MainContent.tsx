import clsx from "clsx";
import svgPaths from "./svg-78kslnee0s";
import imgProductImages from "figma:asset/5344db3a38f5e98d5c6b71fbc57d9a950482784e.png";
import imgUnnamed22 from "figma:asset/acf3b5c2869856497d5ac8dece7eaf0b58265a4a.png";
import imgUnnamed23 from "figma:asset/48ad168cd9e9545be2e362f09bc898492f359bb5.png";
type ProductImagesHelperProps = {
  additionalClassNames?: string;
};

function ProductImagesHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<ProductImagesHelperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end pt-[100px] px-[140px] relative size-full" data-name="Main Content">
      <div className="content-stretch flex gap-[24px] h-[700px] items-end justify-center pb-[24px] relative rounded-[20px] shrink-0 w-full" data-name="Product Images">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[179.34%] left-[-53.48%] max-w-none top-[-0.04%] w-[161.76%]" src={imgProductImages} />
        </div>
        <ProductImagesHelper additionalClassNames="h-[582.59px] w-[487.837px]">
          <div className="flex-none rotate-15">
            <div className="h-[504px] relative w-[370px]" data-name="unnamed-2 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[112.82%] left-[-33.93%] max-w-none top-[-10.15%] w-[281.04%]" src={imgUnnamed22} />
              </div>
            </div>
          </div>
        </ProductImagesHelper>
        <ProductImagesHelper additionalClassNames="h-[584.522px] w-[488.355px]">
          <div className="-rotate-15 flex-none">
            <div className="h-[506px] relative w-[370px]" data-name="unnamed-2 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[113.15%] left-[-150.6%] max-w-none top-[-10.04%] w-[283.87%]" src={imgUnnamed23} />
              </div>
            </div>
          </div>
        </ProductImagesHelper>
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
  );
}