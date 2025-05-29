import { useState } from "react";
import flagIcon from "../../assets/flag-icon.svg";
import type { CallRecord } from "../../types/conversation.type";
import '../../routes/Demo.css'

interface NotesPanelProps {
  record: CallRecord;
}

export function NotesPanel({ record }: NotesPanelProps) {
  const [showTranscript, setShowTranscript] = useState(false);
  const messages = record.details.messages

  return (
    <div className="demo-notes">
      <div className="demo-notes-top-row">
        <button 
          className={showTranscript ? "selected-demo-button" : "deselected-demo-button"}
          onClick={() => setShowTranscript(true)}
        >
          Transcript
        </button>
        <button 
          className={!showTranscript ? "selected-demo-button" : "deselected-demo-button"}
          onClick={() => setShowTranscript(false)}
        >
          Follow-up Notes
        </button>
      </div>
      
      {record.urgentStatus && (
        <div className="demo-notes-middle-row">
          <div className="notes-reminder-left">
            <img src={flagIcon} alt="Flag Icon" />
          </div>
          <div className="notes-reminder-right">
            <div className="notes-reminder-header">Heads up!</div>
            <div className="notes-reminder-subtext">
              This caller has been flagged as an urgent case and requires
              active follow-up.
            </div>
          </div>
        </div>
      )}
      
      {showTranscript ? (
        <div className="transcript-bottom-row">
          <div id="view-transcript" className="note-view">
            {messages.length > 0 ? (messages
              .map((message, index) => {
                if (message.role !== 'user' && message.role !== 'bot') {
                  return null;
                } else {
                  
                  console.log(JSON.stringify(message))
                }
                return (
                <div key={index} className={`bubble ${message.role}`}>
                  <strong>{message.role === 'user' ? 'Caller' : 'Candling'}</strong><br />
                  {message.message}
                </div>
                )
              }
              )
            ) : (
              // Default transcript if none provided
              <>
                <div className="bubble user">
                  <strong>Caller</strong><br />
                  Hello this is Brian, I need some help.
                </div>
                <div className="bubble bot">
                  <strong>Candling</strong><br />
                  Hello Brian, this is Candling. How can I help you tonight?
                </div>
                <div className="bubble user">
                  <strong>Caller</strong><br />
                  With my math.
                </div>
                <div className="bubble bot">
                  <strong>Candling</strong><br />
                  With your mouth?
                </div>
                <div className="bubble user">
                  <strong>Caller</strong><br />
                  No, my math. I have to do it. Will you help me?
                </div>
                <div className="bubble bot">
                  <strong>Candling</strong><br />
                  Sure. Where do you live?
                </div>
                <div className="bubble user">
                  <strong>Caller</strong><br />
                  No, with my math.
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="demo-notes-bottom-row">
          <div className="transcript-summary-section">
            <div className="transcript-summary-header">Transcript Summary</div>
            <div className="transcript-summary-body">
              <div className="transcript-summary-body-title">
                {record.summaryTitle || "Summary of the Call"}
              </div>
              <div className="transcript-summary-body-content">
                {/* {record.details.summary.split('<br />').map((text, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br /><br />}
                    {text}
                  </React.Fragment>
                ))} */}
                {record.details.summary || "No summary available."}
              </div>
            </div>
          </div>

          <div className="recommended-follow-up-section">
            <div className="recommended-follow-up-header">
              Recommended Follow-up
            </div>
            {/* <div className="recommended-follow-up-body">
              <div className="recommended-follow-up-body-title">
                {followUpTitle}
              </div>
              <div className="recommended-follow-up-body-content">
                <ul className="recommended-follow-up-body-content-list">
                  {followUpItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}