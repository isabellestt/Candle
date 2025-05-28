import candlingLogo from '../../assets/candling-logo.png';
import feedbackIcon from '../../assets/feedback-icon.svg';

export function Footer() {
  return (
    <footer>
      {/* footer-container */}
      <div className="bg-[#0c1d40] flex flex-col">
        {/* footer-top */}
        <div className="-ml-8">
          {/* footer-logo */}
          <img
            className="w-[clamp(140px,15vw,218px)] h-auto mb-4 py-24 pl-24"
            src={candlingLogo}
            alt="Candling logo"
          />
        </div>

        {/* footer-bottom */}
        <div className="footer-bottom">
          {/* code-block */}
          <div className="font-['Courier_New',_monospace] text-[#7a7e87] text-[clamp(0.75rem,1.4vw,0.875rem)] leading-relaxed whitespace-normal max-w-[800px] p-4 box-border ml-24 mb-12 w-4/5">
            {/* code-line */}
            <span className="block"
              >This project was created by Isabelle and Brian,</span>
            {/* code-line */}
            <span className="block"
              >thank you for scrolling to the end and check out our demo if you
              have yet to do so!</span>
            <br />
            {/* code-line */}
            <span className="block"
              >Do reach out and connect with us, you can also email if that’s
              your thing.</span>
            <br />
            {/* code-line */}
            <span className="block">const contact_us = [</span>
            {/* code-line code-indent-1 */}
            <span className="block ml-4">&#123;</span>
            {/* code-line code-indent-2 */}
            <span className="block ml-8">name: "Isabelle Seet",</span>
            {/* code-line code-indent-2 */}
            <span className="block ml-8">
              linkedin:
              <a
                href="https://www.linkedin.com/in/seet-isabelle/"
                target="_blank"
              >
                "https://www.linkedin.com/in/seet-isabelle/" </a>,
            </span>
            {/* code-line code-indent-2 */}
            <span className="block ml-8">
              email:
              <a href="mailto:seetisabelle@gmail.com">
                "seetisabelle@gmail.com"
              </a>
            </span>
            {/* code-line code-indent-1 */}
            <span className="block ml-4">&#125;,</span>
            {/* code-line code-indent-1 */}
            <span className="block ml-4">&#123;</span>
            {/* code-line code-indent-2 */}
            <span className="block ml-8"
              >name: "Brian Christian",</span>
            {/* code-line code-indent-1 */}
            <span className="block ml-4">
              linkedin:
              <a
                href="https://www.linkedin.com/in/brianchristianbc/"
                target="_blank"
              >
                "https://www.linkedin.com/in/brianchristianbc/" </a>,
            </span>
            {/* code-line code-indent-2 */}
            <span className="block ml-8">
              email:
              <a href="mailto:brianchristbc@gmail.com">
                "brianchristbc@gmail.com"
              </a>
            </span>
            {/* code-line code-indent-1 */}
            <span className="block ml-4">&#125;</span>
            {/* code-line */}
            <span className="block">];</span>
            <br />
          </div>

          {/* feedback-container */}
          <div className="flex gap-4 mb-24">
            {/* footer-feedback-button */}
            <button
              onClick={() => window.open('https://forms.gle/SQDHcDD83htNhy5c7', '_blank', 'noopener')}
              className="bg-[#0a327c] text-[#f6ddad] text-[15.56px] font-semibold flex items-center gap-[5px] cursor-pointer border-[3.88px] border-[#0a1835] py-[3.04px] px-[12.16px] shadow-[0_0_0_1.94px_#0a327c] rounded-full ml-24"
            >
              {/* footer-feedback-button-text */}
              <div className="whitespace-nowrap">
                Provide Feedback Here
              </div>
              <img
                src={feedbackIcon}
                alt="call to action button"
              />
            </button>
            {/* feedback-code-block */}
            <div className="font-['Courier_New',_monospace] text-[#7a7e87] text-[clamp(0.75rem,1.4vw,0.875rem)] leading-relaxed whitespace-normal max-w-[800px] p-4 box-border w-4/5 sm:hidden">
              {/* code-line */}
              <span className="block">
                Please be nice, this feedback is recorded💛
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}