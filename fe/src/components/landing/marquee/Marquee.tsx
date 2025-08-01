import dash from "../../../assets/dash.svg";
import "./Marquee.css";

export function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <span>
          Someone to talk with,
          <span className="underline-wrapper marquee-underline">
            Even After Hours
            <img src={dash} alt="underline" className="underline" />
          </span>
          • Someone to talk with, Even After Hours •
        </span>
      </div>
    </div>
  );
}
