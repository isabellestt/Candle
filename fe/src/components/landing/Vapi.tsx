import vapiLogo from '../../assets/vapi-logo.svg';
import dashboard from '../../assets/vapi-dashboard-skewed.png';

export function Vapi() {
  return (
    // fourth-wrapper
    <div className="bg-gradient-to-br from-[#0a1835] to-[#000000]">
      {/* fourth-top */}
      <div className="pt-24 pl-24 max-w-[500px] flex flex-col gap-5 -mb-40">
        {/* fourth-header */}
        <div className="text-[#f6ddad] text-[clamp(1.75rem,4vw,2.5rem)] font-normal tracking-[-1.2px] leading-tight max-w-[270px]">Powered by VAPI</div>
        {/* fourth-subheader */}
        <div className="text-[#7a7e87] text-[clamp(0.875rem,2vw,1.125rem)] font-normal tracking-[-0.2px] leading-relaxed w-[85%] max-w-[clamp(400px,80vw,1000px)]">
          Candling is powered by VAPI, a developer-friendly voice AI platform
          for flexible real-time conversations used across startups and Fortune
          500 companies.
        </div>
        {/* fourth-cta */}
        <div className="fourth-cta">
          {/* fourth-cta-button */}
          <button
            onClick={() => window.open('https://vapi.ai/', '_blank', 'noopener')}
            className="bg-[#0a327c] text-[#f6ddad] text-lg font-semibold 
                      flex items-center gap-1.5 cursor-pointer 
                      border-[3.88px] border-[#0a1835] rounded-full 
                      py-2 px-4.5 mb-3.5
                      shadow-[0_0_0_1.94px_#0a327c]"
          >
            {/* fourth-cta-button-text */}
            <div className="fourth-cta-button-text">Explore</div>
            {/* fourth-cta-button-vapi-logo */}
            <div className="fourth-cta-button-vapi-logo">
              {/* vapi-logo */}
              <img
                className="w-auto h-auto"
                src={vapiLogo}
                alt="Vapi's logo"
              />
            </div>
          </button>
        </div>
      </div>
      {/* fourth-bottom */}
      <div className="flex justify-end">
        {/* vapi-dashboard */}
        <img
          className="w-full max-w-[1300px] h-auto block object-contain
                    xl:mt-24 lg:mt-32 md:mt-40"
          src={dashboard}
          alt="vapi dashboard preview"
        />
      </div>
    </div>
  )
}