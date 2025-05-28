import insightSummary from '../../assets/insight-summary.svg'

interface InsightCardProps {
  header: string;
  subtext: string;
}

export function InsightCard({header, subtext}: InsightCardProps) {
  return (
    // insight-card
    <div className="flex flex-col gap-3 w-[218px] md:w-[90%] md:max-w-[400px]">
      {/* insight-card-top */}
      <div className="flex gap-2">
        {/* insight-card-logo */}
        <div className="w-12 h-12">
          <img
            src={insightSummary}
            alt="Call summaries logo"
          />
        </div>
        {/* insight-card-header */}
        <div className="text-[#f6ddad] text-[15.99px] font-normal tracking-[-0.26px] leading-[22.8px]">{header}</div>
      </div>
      {/* insight-card-subtext */}
      <div className="text-[#7a7e87] text-[15.7px] tracking-[-0.26px] leading-[22.4px]">{subtext}</div>
    </div>
  )
}