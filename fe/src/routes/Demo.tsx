import CandlingLogo from '../assets/candling-logo.png';
import CtaButtonLogo from '../assets/cta-button-logo.png';
import VapiDemoLogo from '../assets/vapi-demo-logo.svg';
import MidCallIcon from '../assets/mid-call-icon.svg'
import feedbackIcon from '../assets/feedback-icon.svg'
import '../App.css'
import './Demo.css'

import { useVapi } from '../utils/assistant/useVapi';
import { useEffect, useState } from 'react';
import { Table } from '../components/dashboard/Table';
import { NotesPanel } from '../components/dashboard/NotesPanel';
import type { CallRecord } from '../types/conversation.type';
import { NavLink } from 'react-router';
import { getStoredCallRecords, storeCallRecords, addDeletedId } from '../utils/localStorage';


const Dashboard = () => {
  const { toggleCall, isSpeechActive, callStatus, audioLevel, callData} = useVapi();

  const [callRecords, setCallRecords] = useState<CallRecord[]>(getStoredCallRecords());

  const [selectedRecord, setSelectedRecord] = useState<CallRecord | null>(callData[0]);
  const [showTranscript, setShowTranscript] = useState(false);

  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    storeCallRecords(callRecords);
    console.log("Call records updated in local storage:", callRecords);
  }, [callRecords]);
  
  useEffect(() => {
    if (callData.length > 0) {
      setCallRecords(prevRecords => {
        const mergedRecords = [...prevRecords];
        let hasChanges = false;
        
        callData.forEach(newRecord => {
          const existingIndex = mergedRecords.findIndex(r => r.id === newRecord.id);
          
          if (existingIndex === -1) {
            mergedRecords.unshift(newRecord);
            hasChanges = true;
          } else if (JSON.stringify(mergedRecords[existingIndex]) !== JSON.stringify(newRecord)) {
            mergedRecords[existingIndex] = newRecord;
            hasChanges = true;
          }
        });
        
        if (hasChanges) {
          storeCallRecords(mergedRecords); 
          return [...mergedRecords];
        }
        
        return prevRecords;
      });
    }
  }, [callData]);

  const handleDeleteRecord = (recordId: string) => {
    addDeletedId(recordId);
    const deleteIndex = callRecords.findIndex(record => record.id === recordId);
    const isSelectedRecord = selectedRecord?.id === recordId;

    setCallRecords(prevRecords => {
      const updatedRecords = prevRecords.filter(record => record.id !== recordId);
      
      localStorage.setItem('callRecords', JSON.stringify(updatedRecords));
      
      if (isSelectedRecord && callRecords.length > 1) {
        const nextIndex = Math.min(deleteIndex, updatedRecords.length - 1);
        setSelectedRecord(updatedRecords[nextIndex]);
        
      } else if (isSelectedRecord && callRecords.length === 1) {
        setSelectedRecord(null);
        setShowTranscript(false);
      }
      return updatedRecords;
    });
    
  };
  
  const handleOpenFollowUpNotes = (recordId: string) => {
    const record = callRecords.find(r => r.id === recordId);
    if (record) {
      setSelectedRecord(record);
      setShowTranscript(true);
    }
  };

  const handleCloseFollowUoNotes = () => {
    setShowTranscript(false);
  }
    
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

    if (callStatus === "error") {
      setIsConnecting(false)
      setIsConnected(false)
    }
    
  },[callStatus])

  return (
    <div className="demo-wrapper">
      <div className="demo-top">
        <div className="demo-top-left">
          <div className="demo-logo-container">
            <NavLink to="/">
              <img
                className="demo-logo"
                src={CandlingLogo}
                alt="Candling's logo"
              />
            </NavLink>
          </div>
          <div className="demo-subtext">
            Welcome to our product demonstration, click the “Talk to Candling”
            button to start!
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
                  {isConnecting ? <span className="demo-cta-button-text">Connecting...</span> : isConnected ? 
                  <>
                    <div className="mid-call demo-cta-button-text">End Call</div>
                    <img src={MidCallIcon} alt="call to action button" />
                  </> : 
                  <>
                    <img
                    src={CtaButtonLogo}
                    alt="call to action button"
                    />
                    <div className="demo-cta-button-text">Talk to Candling</div>
                  </>}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="demo-bottom">
        <div className="demo-dashboard">
          <div className="table-scroll">
            <Table 
              records={callRecords} 
              onOpenFollowUpNotes={handleOpenFollowUpNotes}
            />
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
        <button
                onClick={() => window.open('https://forms.gle/SQDHcDD83htNhy5c7', '_blank', 'noopener')}
                className="footer-feedback-button"
              >
                <div className="footer-feedback-button-text">
                  Provide Feedback Here
                </div>
                <img
                  src={feedbackIcon}
                  alt="call to action button"
                />
              </button>
      </div>
      

      {showTranscript && (
        <NotesPanel
          record={selectedRecord || callData[0]}
          onDeleteRecord={handleDeleteRecord}
          onCloseFollowUpNotes={handleCloseFollowUoNotes} 
        />
      )}
    </div>
  );
};

export default Dashboard;
