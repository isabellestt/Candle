import dash from '../../assets/dash.svg';
import '../../App.css'

export function Marquee() {
  return (
    // marquee wrapper
    <div className="marquee-wrapper">
      {/* marquee */}
      <div className="marquee">
        <span className="">
          Someone to talk with,
          {/* underline-wrapper */}
          <span className="underline-wrapper">
            Even After Hours
            {/* underline */}
            <img src={dash} alt="underline" className="underline" />
          </span>
          • Someone to talk with,
          <span className="relative inline-block -mb-10 z-10">
            Even After Hours
            <img src={dash} alt="underline" className="underline" />
          </span>
          •
        </span>
      </div>
    </div>
  )
}