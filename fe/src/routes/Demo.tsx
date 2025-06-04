import CandlingLogo from '../assets/candling-logo.png';
import CtaButtonLogo from '../assets/cta-button-logo.png';
import VapiDemoLogo from '../assets/vapi-demo-logo.svg';
import CloseIcon from '../assets/plus-icon.svg';
import FlagIcon from '../assets/flag-icon.svg';
import DeleteCaseButton from '../assets/trash-icon.svg';
import Chevron from '../assets/chevron.svg'
import '../App.css'
import './Demo.css'



const Dashboard = () => {
  return (
    <div className="demo-wrapper">
      <div className="demo-top">
        <div className="demo-top-left">
          <div className="demo-logo-container">
            <img
              className="demo-logo"
              src={CandlingLogo}
              alt="Candling's logo"
            />
          </div>
          <div className="demo-subtext">
            Welcome to our product demonstration, click the “Talk to Candling”
            button to start!
          </div>
        </div>

        <div className="demo-top-right">
          <button className="demo-cta-button">
            <img
              src={CtaButtonLogo}
              alt="call to action button"
            />
            <div className="demo-cta-button-text">Talk to Candling</div>
          </button>
        </div>
      </div>

      <div className="demo-bottom">
        <div className="demo-dashboard">
          <div className="table-scroll">
            <table className="history-table">
              <thead>
                <tr>
                  <th className="header-left-corner">ID</th>
                  <th>Call&nbsp;ID</th>
                  <th>Call&nbsp;Status</th>
                  <th>Created&nbsp;Date</th>
                  <th>Duration</th>
                  <th>Urgent&nbsp;Status</th>
                  <th>Transfer&nbsp;To</th>
                  <th>Transfer&nbsp;Status</th>
                  <th>Short&nbsp;Description</th>
                  <th className="header-right-corner">Call&nbsp;Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td>
                  <td data-label="Call ID">afaDHw…</td>
                  <td className="status-container" data-label="Call Status">
                    <span className="status ongoing">
                      Ongoing
                      <div className="circle" />
                    </span>
                  </td>
                  <td data-label="Created Date">25/5/25 (5:43 AM)</td>
                  <td data-label="Duration">2 hours 58 minutes</td>
                  <td data-label="Urgent Status">
                    <span className="pill urgent">Urgent</span>
                  </td>
                  <td data-label="Transfer To">
                    <span className="pill dvert">DVERT</span>
                  </td>
                  <td data-label="Transfer Status">
                    <span className="pill transferred">Transferred</span>
                  </td>
                  <td data-label="Short Description">
                    Caller reported physical abuse…
                  </td>
                  <td className="expand-column">
                    <span>Expand View</span>
                    <img className="toggled" src={Chevron} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td data-label="Call ID">oiOEfePNf…</td>
                  <td className="status-container" data-label="Call Status">
                    <span className="status unknown">
                      Unknown
                      <div className="circle" />
                    </span>
                  </td>
                  <td data-label="Created Date">25/5/25 (2:43 AM)</td>
                  <td data-label="Duration">0 hours 12 mins</td>
                  <td data-label="Urgent Status">
                    <span className="pill urgent">Urgent</span>
                  </td>
                  <td data-label="Transfer To">
                    <span className="pill msf">MSF</span>
                  </td>
                  <td data-label="Transfer Status">
                    <span className="pill not-transferred">Not transferred</span>
                  </td>
                  <td data-label="Short Description">Feels unsafe at home now..</td>
                  <td className="expand-column">
                    <span>Expand View</span>
                    <img className="toggled" src={Chevron} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td data-label="Call ID">AWrfeNea…</td>
                  <td className="status-container" data-label="Call Status">
                    <span className="status completed">
                      Completed
                      <div className="circle" />
                    </span>
                  </td>
                  <td data-label="Created Date">25/5/25 (1:12 AM)</td>
                  <td data-label="Duration">1 hour 48 mins</td>
                  <td data-label="Urgent Status">
                    <span className="pill not-urgent">Not Urgent</span>
                  </td>
                  <td data-label="Transfer To">
                    <span className="pill not-applicable">Not Applicable</span>
                  </td>
                  <td data-label="Transfer Status">
                    <span className="pill not-applicable">Not Applicable</span>
                  </td>
                  <td data-label="Short Description">Spoke about past violence..</td>
                  <td className="expand-column">
                    <span>Expand View</span>
                    <img className="toggled" src={Chevron} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td data-label="Call ID">NFewfqiD…</td>
                  <td className="status-container" data-label="Call Status">
                    <span className="status completed">
                      Completed
                      <div className="circle" />
                    </span>
                  </td>
                  <td data-label="Created Date">24/5/25 (11:43 PM)</td>
                  <td data-label="Duration">3 hours 24 mins</td>
                  <td data-label="Urgent Status">
                    <span className="pill urgent">Urgent</span>
                  </td>
                  <td data-label="Transfer To">
                    <span className="pill dvert">DVERT</span>
                  </td>
                  <td data-label="Transfer Status">
                    <span className="pill transferred">Transferred</span>
                  </td>
                  <td data-label="Short Description">Caller reported family abuse..</td>
                  <td className="expand-column">
                    <span>Expand View</span>
                    <img className="toggled" src={Chevron} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td data-label="Call ID">LlkgsjfNdf…</td>
                  <td className="status-container" data-label="Call Status">
                    <span className="status completed">
                      Completed
                      <div className="circle" />
                    </span>
                  </td>
                  <td data-label="Created Date">24/5/25 (3:45 PM)</td>
                  <td data-label="Duration">1 hour 15 mins</td>
                  <td data-label="Urgent Status">
                    <span className="pill not-urgent">Not Urgent</span>
                  </td>
                  <td data-label="Transfer To">
                    <span className="pill aps">APS</span>
                  </td>
                  <td data-label="Transfer Status">
                    <span className="pill transferred">Transferred</span>
                  </td>
                  <td data-label="Short Description">First time reporting abuse..</td>
                  <td className="expand-column">
                    <span>Expand View</span>
                    <img className="toggled" src={Chevron} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-icon">⇆</div>
        </div>
      </div>

      <div className="page-bottom-wrapper">
        <div className="page-bottom">
          <a href="https://vapi.ai/">
            <div className="callout">
              <div className="callout-text">Built with</div>
              <img
                className="vapi-demo-logo"
                src={VapiDemoLogo}
                alt="Vapi Logo"
              />
            </div>
          </a>
        </div>
      </div>

      {/* add hidden to sidebar to make it disappear */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-left">Call Log</div>
          <div className="sidebar-header-right">
            <img src={CloseIcon} alt="close sidebar icon" />
          </div>
        </div>

        <div className="sidebar-toggle-row">
          <button className="selected-toggle-button">Summary</button>
          <button className="deselected-toggle-button">Transcript</button>
        </div>

        <div className="sidebar-urgent-row">
          <div className="sidebar-urgent-row-left">
            <img src={FlagIcon} alt="Flag Icon" />
          </div>
          <div className="sidebar-urgent-row-right">
            <div className="sidebar-urgent-row-header">Heads up!</div>
            <div className="sidebar-urgent-row-subtext">
              This caller has been flagged as an urgent case and requires active
              follow-up.
            </div>
          </div>
        </div>

        <div className="sidebar-call-details-row">
          <div className="detail-row">
            <span className="label">CALL ID:</span>
            <span className="value">afaDHw2bKdBf28B</span>
          </div>
          <div className="detail-row">
            <span className="label">CALL STARTED AT:</span>
            <span className="value">24/5/25 (10:41 PM)</span>
          </div>
          <div className="detail-row">
            <span className="label">CALL DURATION:</span>
            <span className="value">1mins 23seconds</span>
          </div>
          <div className="detail-row">
            <span className="label">TYPE OF ABUSE:</span>
            <span className="value">Physical</span>
          </div>
          <div className="detail-row">
            <span className="label">URGENT STATUS:</span>
            <span className="value">Urgent</span>
          </div>
          <div className="detail-row">
            <span className="label">TRANSFER TO:</span>
            <span className="value">SPF</span>
          </div>
          <div className="detail-row">
            <span className="label">TRANSFER STATUS:</span>
            <span className="value">TRUE</span>
          </div>
          <div className="detail-row">
            <span className="label">CALLER NAME:</span>
            <span className="value">Heather Ng</span>
          </div>
          <div className="detail-row">
            <span className="label">CALLER LOCATION:</span>
            <span className="value">123 Hougang Ave #02–16</span>
          </div>
          <div className="detail-row">
            <span className="label">LATEST INCIDENT:</span>
            <span className="value">24/5/25</span>
          </div>
        </div>

        <div className="transcript-summary-section">
          <div className="transcript-summary-header">Transcript Summary</div>
          <div className="transcript-summary-body">
            <div className="transcript-summary-body-title">
              Caller reported physical abuse by uncle
            </div>
            <div className="transcript-summary-body-content">
              Caller identified herself as Heather. She reported being physically
              assaulted by her uncle earlier in the afternoon at her family’s flat
              in Woodlands. <br /><br />She described ongoing tension in the
              household and mentioned this was not the first incident, but it was
              the first time she sustained visible bruising. Heather sounded
              shaken and anxious, pausing often during the call and showing...
            </div>
          </div>
        </div>

        <div className="recommended-follow-up-section">
          <div className="recommended-follow-up-header">Recommended Follow-up</div>
          <div className="recommended-follow-up-body">
            <div className="recommended-follow-up-body-title">
              Caller reported physical abuse by uncle
            </div>
            <div className="recommended-follow-up-body-content">
              <ul className="recommended-follow-up-body-content-list">
                <li>Attempt follow-up call to confirm Heather's safety</li>
                <li>Share shelter options within Woodlands vicinity</li>
                <li>Flag for morning outreach by duty officer</li>
              </ul>
            </div>
          </div>
          <div className="sidebar-delete-log-button">
            <button>
              <div className="sidebar-delete-log-button-text">Delete Case</div>
              <img src={DeleteCaseButton} alt="delete case button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
