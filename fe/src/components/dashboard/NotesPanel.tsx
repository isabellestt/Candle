import CloseIcon from '../../assets/plus-icon.svg'
import FlagIcon from '../../assets/flag-icon.svg';
import DeleteCaseButton from '../../assets/trash-icon.svg';
import type { CallRecord } from "../../types/conversation.type";
import { useState } from "react";
import '../../routes/Demo.css'

interface NotesPanelProps {
  record: CallRecord;
  onDeleteRecord?: (recordId: string) => void;
  onCloseFollowUpNotes?: () => void;
}

export function NotesPanel({ record, onDeleteRecord, onCloseFollowUpNotes }: NotesPanelProps) {
  const [showTranscript, setShowTranscript] = useState(false);

  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  const handleDelete = (recordId: string) => {
    if (onDeleteRecord) {
      onDeleteRecord(recordId);
    }
  }

  const handleCloseFollowUpNotes = () => {
    if (onCloseFollowUpNotes) {
      onCloseFollowUpNotes();
    }
  }

  const messages = record.details.messages

  return (
    <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-left">Call Log</div>
          <div className="sidebar-header-right">
            <button onClick={()=> handleCloseFollowUpNotes()}>
              <img src={CloseIcon} alt="close sidebar icon" />
            </button>
          </div>
        </div>

        <div className="sidebar-toggle-row">
          <button className="selected-toggle-button" onClick={toggleTranscript}>Summary</button>
          <button className="deselected-toggle-button" onClick={toggleTranscript}>Transcript</button>
        </div>

        {showTranscript ? (
        <div className="transcript-bottom-row">
          <div id="view-transcript" className="note-view">
            {messages.length > 0 ? (messages
              .map((message, index) => {
                if (message.role !== 'user' && message.role !== 'bot') {
                  return null;
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
        <>
        {record.details.structuredData.urgentStatus && (
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
        )}

          <div className="sidebar-call-details-row">
            <div className="detail-row">
              <span className="label">CALL ID:</span>
              <span className="value">{record.callId}</span>
            </div>
            <div className="detail-row">
              <span className="label">CALL STARTED AT:</span>
              <span className="value">{record.createdDate}</span>
            </div>
            <div className="detail-row">
              <span className="label">CALL DURATION:</span>
              <span className="value">{record.duration}</span>
            </div>
            <div className="detail-row">
              <span className="label">TYPE OF ABUSE:</span>
              <span className="value">{record.details.structuredData.abuseType}</span>
            </div>
            <div className="detail-row">
              <span className="label">URGENT STATUS:</span>
              <span className="value">{record.details.structuredData.urgentStatus ? <span>TRUE</span> : <span>FALSE</span>}</span>
            </div>
            <div className="detail-row">
              <span className="label">TRANSFER TO:</span>
              <span className="value">{record.details.structuredData.transferTo}</span>
            </div>
            <div className="detail-row">
              <span className="label">TRANSFER STATUS:</span>
              <span className="value">{record.details.structuredData.transferred ? <span>TRUE</span> : <span>FALSE</span>}</span>
            </div>
            <div className="detail-row">
              <span className="label">CALLER NAME:</span>
              <span className="value">{record.details.structuredData.callerName}</span>
            </div>
            <div className="detail-row">
              <span className="label">CALLER LOCATION:</span>
              <span className="value">{record.details.structuredData.callerLocation}</span>
            </div>
            <div className="detail-row">
              <span className="label">LATEST INCIDENT:</span>
              <span className="value">{record.details.structuredData.latestIncident}</span>
            </div>
          </div>

          <div className="transcript-summary-section">
            <div className="transcript-summary-header">Transcript Summary</div>
            <div className="transcript-summary-body">
              <div className="transcript-summary-body-title">
              {record.details.summaryTitle}
              </div>
              <div className="transcript-summary-body-content">
                {record.details.summary || "No summary available."}
              </div>
            </div>
          </div>

          <div className="recommended-follow-up-section">
            <div className="recommended-follow-up-header">Recommended Follow-up</div>
            <div className="recommended-follow-up-body">
              <div className="recommended-follow-up-body-title">
              {record.details.summaryTitle}
              </div>
              <div className="recommended-follow-up-body-content">
                <ul className="recommended-follow-up-body-content-list">
                  <li>{record.details.structuredData.follow_up}</li>
                </ul>
              </div>
            </div>
            <div className="sidebar-delete-log-button">
              <button onClick={() => handleDelete(record.id)}>
                <div className="sidebar-delete-log-button-text">Delete Case</div>
                <img src={DeleteCaseButton} alt="delete case button" />
              </button>
            </div>
          </div>
          </>
      )}
      </div>
  
  );
}