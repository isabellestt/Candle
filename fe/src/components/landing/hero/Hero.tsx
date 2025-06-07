import ctaButtonLogo from '../../../assets/cta-button-logo.png'
import chevron from '../../../assets/chevron.svg'
import candleGif from '../../../assets/candle.gif'
import { Link } from 'react-router'
import './Hero.css'

export function Hero() {
  return (
    // landing
    <div className="landing">

      {/* landing-left */}
      <div className="landing-left">
        {/* landing-hero-title */}
        <div className="landing-hero-title">
          Voice AI Support for <br className='landing-hero-title-line-break' />
          Non-violent crisis situations
        </div>
        {/* landing-hero-subtitle */}
        <div className="landing-hero-subtitle">
          24/7 victim support with real-time resource access, seamless authority
          handoffs,
          and omni-channel communication with protection centres to
          improve response times and save more lives.
        </div>
        {/* landing-cta-button */}
        <Link to="/demo">
          <button className="landing-cta-button">
            {/* landing-cta-button-text */}
            <img src={ctaButtonLogo} alt="call to action button" className="w-[41px]" />
            <div className="landing-cta-button-text">Explore our demo</div>
          </button>
        </Link>
        {/* landing-sub-cta */}
        <div className="landing-sub-cta">
          {/* landing-sub-cta-text */}
          <div className="landing-sub-cta-text">More about Candling's Mission</div>
          {/* landing-sub-cta-arrow */}
          <img
            className="landing-sub-cta-arrow"
            src={chevron}
            alt="chevron pointing right"
          />
        </div>
      </div>

      {/* landing-right */}
      <div className="landing-right">
        {/* landing-header-gif */}
        <img
          className="landing-header-gif"
          src={candleGif}
          alt="gif of a candle"
        />
      </div>
    </div>
  )
}