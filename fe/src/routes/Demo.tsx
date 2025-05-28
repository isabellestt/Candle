import { useState, useEffect } from 'react'
import '../App.css'
import CandlingLogo from '../assets/candling-logo.png'
import MidCallIcon from '../assets/mid-call-icon.svg'
import ctaButtonLogo from '../assets/cta-button-logo.png'
import { useVapi } from '../utils/assistant/useVapi';
// import { MessageList } from '../components/messages/MessageList';
import { Table } from '../components/dashboard/Table';
import { NotesPanel } from '../components/dashboard/NotesPanel';
import { callData } from '../../public/callData.tsx'; 
import type { CallRecord } from '../types/conversation.type';
import '../App.css'

function Dashboard() {
  const [selectedRecord, setSelectedRecord] = useState<CallRecord | null>(callData[0]);

  const handleSelectRecord = (record: CallRecord) => {
    setSelectedRecord(record);
  };
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const { toggleCall, isSpeechActive, callStatus, audioLevel} =
    useVapi();

  useEffect(() => {
    if (callStatus === "inactive") {
      setIsConnecting(false)
      setIsConnected(false)
    }

    if (callStatus === "loading") {
      setIsConnecting(true)
    }

    if (callStatus === "active") {
      setIsConnecting(false)
      setIsConnected(true)
    }
    
  },[callStatus])



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
          <div className="viewport-warning">
            This demo is primarily designed for desktop. You can still scroll to
            see everything on mobile or tablet but some elements may stack or
            require sideways scrolling.
          </div>
        </div>

        <div className="demo-top-right">

          <div>
            <div>
              {
                isConnected ? isConnecting ? (
                  <p className="text-center">Connecting to Candling...</p>
                ) : (
                  <p className="text-center">Connected to Candling</p>
                ) : (
                  <></>
                )
              }
              

              {isConnected && (
                <div className="mt-2.5">
                  <p className="text-center">{isSpeechActive ? "Assistant is speaking" : "Assistant is listening"}</p>

                  {/* Volume indicator */}
                  <div className="flex justify-center mt-2.5 mb-2.5 gap-[3px]">
                    {Array.from({ length: 10 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-[15px] h-[15px] ${i / 10 < audioLevel ? "bg-[#3ef07c]" : "bg-neutral-600"} rounded-[2px]`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center mt-4">
                <button
                  onClick={toggleCall}
                  disabled={isConnecting}
                  className="demo-cta-button"
                  
                >
                  {isConnecting ? "Connecting..." : isConnected ? 
                  <>
                    <div className="mid-call demo-cta-button-text">End Call</div>
                    <img src={MidCallIcon} alt="call to action button" />
                  </> : 
                  <>
                    <img
                    src={ctaButtonLogo}
                    alt="call to action button"
                    />
                    <div className="demo-cta-button-text">Talk to Candling</div>
                  </>}
                </button>
              </div>

              {/* <div className="w-full mt-8">
                <MessageList
                  messages={messages}
                  activeTranscript={activeTranscript}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>


      <div className="demo-bottom">
        <div className="demo-dashboard">
          <Table records={callData} onSelectRecord={handleSelectRecord} />
        </div>

        <NotesPanel record={selectedRecord || callData[0]} />

        {/* <div className="demo-notes">
          <div className="demo-notes-top-row">
            <button className="deselected-demo-button">Transcript</button>
            <button className="selected-demo-button">Follow-up Notes</button>
          </div>
          <div className="demo-notes-middle-row">
            <div className="notes-reminder-left">
              <img src="./assets/flag-icon.svg" alt="Flag Icon" />
            </div>
            <div className="notes-reminder-right">
              <div className="notes-reminder-header">Heads up!</div>
              <div className="notes-reminder-subtext">
                This caller has been flagged as an urgent case and requires
                active follow-up.
              </div>
            </div>
          </div>
          <div className="transcript-bottom-row hidden">
            <div id="view-transcript" className="note-view">
              <div className="bubble caller">
                <strong>Caller</strong><br />
                Hello this is Brian, I need some help.
              </div>

              <div className="bubble agent">
                <strong>Candling</strong><br />
                Hello Brian, this is Candling. How can I help you tonight?
              </div>

              <div className="bubble caller">
                <strong>Caller</strong><br />
                With my math.
              </div>

              <div className="bubble agent">
                <strong>Candling</strong><br />
                With your mouth?
              </div>

              <div className="bubble caller">
                <strong>Caller</strong><br />
                No, my math. I have to do it. Will you help me?
              </div>

              <div className="bubble agent">
                <strong>Candling</strong><br />
                Sure. Where do you live?
              </div>

              <div className="bubble caller">
                <strong>Caller</strong><br />
                No, with my math.
              </div>
            </div>
          </div>
          hidden className must toggle between this and transcript-bottom-row
          <div className="demo-notes-bottom-row">
            <div className="transcript-summary-section">
              <div className="transcript-summary-header">Transcript Summary</div>
              <div className="transcript-summary-body">
                <div className="transcript-summary-body-title">
                  Caller reported physical abuse by uncle
                </div>
                <div className="transcript-summary-body-content">
                  Caller identified herself as Heather. She reported being
                  physically assaulted by her uncle earlier in the afternoon at
                  her family’s flat in Woodlands. <br /><br />She described
                  ongoing tension in the household and mentioned this was not
                  the first incident, but it was the first time she sustained
                  visible bruising. Heather sounded shaken and anxious, pausing
                  often during the call and showing...
                </div>
              </div>
            </div>

            <div className="recommended-follow-up-section">
              <div className="recommended-follow-up-header">
                Recommended Follow-up
              </div>
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
            </div>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default Dashboard
