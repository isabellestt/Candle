import candlingLogo from '../../../assets/candling-logo.png';
import feedbackIcon from '../../../assets/feedback-icon.svg';
import './Footer.css'

export function Footer() {
  return (
    <footer>
      {/* footer-container */}
      <div className="footer-container">
        {/* footer-top */}
        <div className="footer-top">
          {/* footer-logo */}
          <img
            className="footer-logo"
            src={candlingLogo}
            alt="Candling logo"
          />
        </div>

        {/* footer-bottom */}
        <div className="footer-bottom">
          {/* code-block */}
          <div className="code-block">
            {/* code-line */}
            <span className="code-line"
              >This project was created by Isabelle and Brian,</span>
            {/* code-line */}
            <span className="code-line"
              >thank you for scrolling to the end and check out our demo if you
              have yet to do so!</span>
            <br />
            {/* code-line */}
            <span className="code-line"
              >Do reach out and connect with us, you can also email if that’s
              your thing.</span>
            <br />
            {/* code-line */}
            <span className="code-line">const contact_us = [</span>
            {/* code-line code-indent-1 */}
            <span className="code-line code-indent-1">&#123;</span>
            {/* code-line code-indent-2 */}
            <span className="code-line code-indent-2">name: "Isabelle Seet",</span>
            {/* code-line code-indent-2 */}
            <span className="code-line code-indent-2">
              linkedin:
              <a
                href="https://www.linkedin.com/in/seet-isabelle/"
                target="_blank"
              >
                "https://www.linkedin.com/in/seet-isabelle/" </a>,
            </span>
            {/* code-line code-indent-2 */}
            <span className="code-line code-indent-2">
              email:
              <a href="mailto:seetisabelle@gmail.com">
                "seetisabelle@gmail.com"
              </a>
            </span>
            {/* code-line code-indent-1 */}
            <span className="code-line code-indent-1">&#125;,</span>
            {/* code-line code-indent-1 */}
            <span className="code-line code-indent-1">&#123;</span>
            {/* code-line code-indent-2 */}
            <span className="code-line code-indent-2"
              >name: "Brian Christian",</span>
            {/* code-line code-indent-1 */}
            <span className="code-line code-indent-1">
              linkedin:
              <a
                href="https://www.linkedin.com/in/brianchristianbc/"
                target="_blank"
              >
                "https://www.linkedin.com/in/brianchristianbc/" </a>,
            </span>
            {/* code-line code-indent-2 */}
            <span className="code-line code-indent-2">
              email:
              <a href="mailto:brianchristbc@gmail.com">
                "brianchristbc@gmail.com"
              </a>
            </span>
            {/* code-line code-indent-1 */}
            <span className="code-line code-indent-1">&#125;</span>
            {/* code-line */}
            <span className="code-line">];</span>
            <br />
          </div>

          {/* feedback-container */}
          <div className="feedback-container">
            {/* footer-feedback-button */}
            <button
              onClick={() => window.open('https://forms.gle/SQDHcDD83htNhy5c7', '_blank', 'noopener')}
              className="footer-feedback-button"
            >
              {/* footer-feedback-button-text */}
              <div className="footer-feedback-button-text">
                Provide Feedback Here
              </div>
              <img
                src={feedbackIcon}
                alt="call to action button"
              />
            </button>
            {/* feedback-code-block */}
            <div className="feedback-code-block">
              {/* code-line */}
              <span className="code-line">
                Please be nice, this feedback is recorded💛
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}