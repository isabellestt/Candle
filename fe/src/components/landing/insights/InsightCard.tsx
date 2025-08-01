import insightSummary from "../../../assets/insight-summary.svg";
import "./Insights.css";

interface InsightCardProps {
  header: string;
  subtext: string;
}

export function InsightCard({ header, subtext }: InsightCardProps) {
  return (
    // insight-card
    <div className="insight-card">
      {/* insight-card-top */}
      <div className="insight-card-top">
        {/* insight-card-logo */}
        <div className="insight-card-logo">
          <img src={insightSummary} alt="Call summaries logo" />
        </div>
        {/* insight-card-header */}
        <div className="insight-card-header">{header}</div>
      </div>
      {/* insight-card-subtext */}
      <div className="insight-card-subtext">{subtext}</div>
    </div>
  );
}
