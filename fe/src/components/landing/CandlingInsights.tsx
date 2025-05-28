import chevron from '../../assets/chevron.svg';
import dashboard from '../../assets/dashboard.png';
import { Link } from 'react-router';
import { InsightCard } from './InsightCard';
import '../../App.css'

export function CandlingInsights() {
  return (
    // third-wrapper
    <div className="third-wrapper">
      {/* third-top */}
      <div className="third-top">
        {/* third-header */}
        <div className="third-header">Candling Insights</div>
        {/* third-subheader */}
        <div className="third-subheader">
          Improve cross-agency collaboration with real-time consolidated views
          on one unified dashboard
        </div>
        {/* third-sub-cta */}
        <div className="third-sub-cta">
          {/* third-sub-cta-text */}
          <Link to="/demo" className="bg-gradient-to-b from-[#f5f6f6] to-[#8a8f98] inline-block text-transparent bg-clip-text"> 
            <div className="bg-gradient-to-b from-[#f5f6f6] to-[#8a8f98] inline-block text-transparent bg-clip-text">Interact with our dashboard</div>
            {/* third-sub-cta-arrow */}
            <img
              className="third-sub-cta-arrow"
              src={chevron}
              alt="chevron pointing right"
            />
          </Link>
        </div>
      </div>

      {/* third-middle */}
      <div className="third-middle">
        <img src={dashboard} alt="Candling's dashboard" />
      </div>

      {/*  third-bottom */}
      <div className="third-bottom">
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