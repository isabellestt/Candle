import ctaButtonLogo from "../../../assets/cta-button-logo.png";
import chevron from "../../../assets/chevron.svg";
import candleGif from "../../../assets/candle.gif";
import { Link } from "react-router";
import "./Hero.css";

export function Hero() {
  return (
    // landing
    <div className="landing">
      {/* landing-left */}
      <div className="landing-left">
        {/* landing-hero-title */}
        <div className="landing-hero-title">
          Voice AI Support for <br className="landing-hero-title-line-break" />
          Singapore's Crisis Landscape
        </div>
        {/* landing-hero-subtitle */}
        <div className="landing-hero-subtitle">
          24/7 voice support that triages callers and delivers instant case
          notes to duty teams. Reducing call overload so frontline responders
          can focus on urgent care.
        </div>
        {/* landing-cta-button */}
        <Link to="/demo">
          <button className="landing-cta-button">
            {/* landing-cta-button-text */}
            <img
              src={ctaButtonLogo}
              alt="call to action button"
              className="w-[41px]"
            />
            <div className="landing-cta-button-text">Explore our demo</div>
          </button>
        </Link>
        {/* landing-sub-cta */}
        <div
          className="landing-sub-cta"
          role="link"
          tabIndex={0}
          onClick={() => {
            document
              .getElementById("segment")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              document
                .getElementById("segment")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="landing-sub-cta-text">
            More about Candling&apos;s Mission
          </span>
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
  );
}
