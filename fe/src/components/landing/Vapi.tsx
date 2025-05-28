import vapiLogo from '../../assets/vapi-logo.svg';
import dashboard from '../../assets/vapi-dashboard-skewed.png';
import '../../App.css'

export function Vapi() {
  return (
    // fourth-wrapper
    <div className="fourth-wrapper">
      {/* fourth-top */}
      <div className="fourth-top">
        {/* fourth-header */}
        <div className="fourth-header">Powered by VAPI</div>
        {/* fourth-subheader */}
        <div className="fourth-subheader">
          Candling is powered by VAPI, a developer-friendly voice AI platform
          for flexible real-time conversations used across startups and Fortune
          500 companies.
        </div>
        {/* fourth-cta */}
        <div className="fourth-cta">
          {/* fourth-cta-button */}
          <button
            onClick={() => window.open('https://vapi.ai/', '_blank', 'noopener')}
            className="fourth-cta-button"
          >
            {/* fourth-cta-button-text */}
            <div className="fourth-cta-button-text">Explore</div>
            {/* fourth-cta-button-vapi-logo */}
            <div className="fourth-cta-button-vapi-logo">
              {/* vapi-logo */}
              <img
                className="vapi-logo"
                src={vapiLogo}
                alt="Vapi's logo"
              />
            </div>
          </button>
        </div>
      </div>
      {/* fourth-bottom */}
      <div className="fourth-bottom">
        {/* vapi-dashboard */}
        <img
          className="vapi-dashboard"
          src={dashboard}
          alt="vapi dashboard preview"
        />
      </div>
    </div>
  )
}