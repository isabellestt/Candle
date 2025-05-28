import chevron from '../../assets/chevron.svg';
import dashboard from '../../assets/dashboard.png';
import { Link } from 'react-router';
import { InsightCard } from './InsightCard';

export function CandlingInsights() {
  return (
    // third-wrapper
    <div className="p-24 bg-[#0c1d40]">
      {/* third-top */}
      <div className="flex flex-col items-center justify-center gap-3">
        {/* third-header */}
        <div className="text-[#f6ddad] text-[40.65px] font-normal tracking-[-1.5px] leading-[45px]">Candling Insights</div>
        {/* third-subheader */}
        <div className="text-[#7a7e87] text-[19.12px] font-normal tracking-[-0.31px] leading-[27.3px] text-center">
          Improve cross-agency collaboration with real-time consolidated views
          on one unified dashboard
        </div>
        {/* third-sub-cta */}
        <div className="flex items-center gap-1.5 mb-4 pb-4 cursor-pointer">
          {/* third-sub-cta-text */}
          <Link to="/demo" className="bg-gradient-to-b from-[#f5f6f6] to-[#8a8f98] inline-block text-transparent bg-clip-text"> 
            <div className="bg-gradient-to-b from-[#f5f6f6] to-[#8a8f98] inline-block text-transparent bg-clip-text">Interact with our dashboard</div>
            {/* third-sub-cta-arrow */}
            <img
              className="h-[14px]"
              src={chevron}
              alt="chevron pointing right"
            />
          </Link>
        </div>
      </div>

      {/* third-middle */}
      <div className="flex flex-col items-center justify-center mb-12">
        <img src={dashboard} alt="Candling's dashboard" />
      </div>

      {/*  third-bottom */}
      <div className="flex justify-center gap-[63.46px] flex-wrap">
        <InsightCard
          header="Call summaries"
          subtext="Automatically generated call recaps capture emotional tone, risk
        level, and referral decisions, ready by the time the call ends."
        />

        <InsightCard
          header="Risk prioritisation"
          subtext="Urgent cases are flagged with escalation tags and colour-coded
            severity, helping teams triage with confidence and precision."
        />

        <InsightCard
          header="Safe data handling"
          subtext="Personal data is stored only while it’s needed for case handling,
            then easily deleted post-case closure in line with PDPA standards."
        />
      </div>
    </div>
  )
}