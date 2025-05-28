import ctaButtonLogo from '../../assets/cta-button-logo.png'
import chevron from '../../assets/chevron.svg'
import candleGif from '../../assets/candle.gif'
import { Link } from 'react-router'

export function Hero() {
  return (
    // landing
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* landing-left */}
      <div className="flex flex-col gap-4 w-full max-w-[700px] px-6 mx-auto">
        {/* landing-hero-title */}
        <div className="text-[clamp(2rem,5vw,3.25rem)] tracking-tight font-light leading-tight">
          Voice AI Support for <br />
          Non-violent crisis situations
        </div>
        {/* landing-hero-subtitle */}
        <div className="text-[clamp(1rem,2vw,1.25rem)] leading-normal text-[#b5b6b6] break-words w-[95%]">
          24/7 victim support with real-time resource access, seamless authority
          handoffs,
          and omni-channel communication with protection centres to
          improve response times and save more lives.
        </div>
        {/* landing-cta-button */}
        <Link to="/demo">
          <button className="flex items-center justify-center flex-wrap 
                            gap-3 w-full max-w-[320px] 
                            bg-[#0a327c] text-[#f6ddad] font-semibold 
                            border-[3.88px] border-[#0a1835] rounded-full 
                            shadow-[0_0_0_1.94px_#0a327c]
                            text-[clamp(1rem,2vw,1.125rem)] cursor-pointer 
                            py-4 px-6 mb-3.5 text-center">
            {/* landing-cta-button-text */}
            <img src={ctaButtonLogo} alt="call to action button" className="w-[41px]" />
            <div>Explore our demo</div>
          </button>
        </Link>
        {/* landing-sub-cta */}
        <div className="flex items-center gap-1.5 mb-4 pb-4 cursor-pointer">
          {/* landing-sub-cta-text */}
          <div className="bg-gradient-to-b from-[#f5f6f6] to-[#8a8f98] inline-block text-transparent bg-clip-text">More about Candling's Mission</div>
          {/* landing-sub-cta-arrow */}
          <img
            className="h-[14px]"
            src={chevron}
            alt="chevron pointing right"
          />
        </div>
      </div>

      {/* landing-right */}
      <div className="md:block relative md:static -z-10 md:z-0 
                      md:transform-none transform scale-80 opacity-40 md:opacity-100
                      ml-60 md:ml-0 -mt-80 md:mt-0">
        {/* landing-header-gif */}
        <img
          className="w-[500px] h-[1000px] -mt-72"
          src={candleGif}
          alt="gif of a candle"
        />
      </div>
    </div>
  )
}