import dash from '../../assets/dash.svg';

export function Marquee() {
  return (
    // marquee wrapper
    <div className="-mt-40 w-screen h-[200px] overflow-hidden rotate-[1.74deg]">
      {/* marquee */}
      <div className="inline-block whitespace-nowrap animate-[scrollText_20s_linear_infinite]">
        <span className="text-[160px] md:text-[160px] sm:text-[70px] xs:text-[40px] font-['Lalezar'] inline-block">
          Someone to talk with,
          {/* underline-wrapper */}
          <span className="relative inline-block -mb-10 z-10">
            Even After Hours
            {/* underline */}
            <img src={dash} alt="underline" className="absolute -bottom-[5px] left-0 w-full pointer-events-none -z-10" />
          </span>
          • Someone to talk with,
          <span className="relative inline-block -mb-10 z-10">
            Even After Hours
            <img src={dash} alt="underline" className="absolute -bottom-[5px] left-0 w-full pointer-events-none -z-10" />
          </span>
          •
        </span>
      </div>
    </div>
  )
}