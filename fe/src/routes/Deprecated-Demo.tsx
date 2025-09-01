import CandlingLogo from "../assets/candling-logo.png";
import CtaButtonLogo from "../assets/cta-button-logo.png";
import VapiDemoLogo from "../assets/vapi-demo-logo.svg";
import MidCallIcon from "../assets/mid-call-icon.svg";
import "../App.css";
import "./DeprecatedDemo.css";
import { useVapi } from "../utils/assistant/useVapi";
import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { NotesPanel } from "../components/NotesPanel";
import type { CallRecord } from "../types/conversation.type";
import { NavLink } from "react-router";

const Dashboard = () => {
  const { toggleCall, isSpeechActive, callStatus, audioLevel, callData } =
    useVapi();

  const [callRecords, setCallRecords] = useState<CallRecord[]>(callData);

  const [selectedRecord, setSelectedRecord] = useState<CallRecord | null>(
    callData[0],
  );
  const [showTranscript, setShowTranscript] = useState(false);

  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  useEffect(() => {
    const filteredCallData = callData.filter(
      (record) => !deletedIds.includes(record.id),
    );

    setCallRecords(filteredCallData);
  }, [callData, deletedIds]);

  const handleDeleteRecord = (recordId: string) => {
    setDeletedIds((prev) => [...prev, recordId]);

    setCallRecords((prevRecords) =>
      prevRecords.filter((record) => record.id !== recordId),
    );
    if (selectedRecord?.id === recordId) {
      setSelectedRecord(null);
    }
  };

  const handleOpenFollowUpNotes = (recordId: string) => {
    const record = callRecords.find((r) => r.id === recordId);

    if (record) {
      setSelectedRecord(record);
      setShowTranscript(true);
    }
  };

  const handleCloseFollowUoNotes = () => {
    setShowTranscript(false);
  };

  useEffect(() => {
    if (callStatus === "inactive") {
      setIsConnecting(false);
      setIsConnected(false);
    }

    if (callStatus === "loading") {
      setIsConnecting(true);
    }

    if (callStatus === "active") {
      setIsConnecting(false);
      setIsConnected(true);
    }

    if (callStatus === "error") {
      setIsConnecting(false);
      setIsConnected(false);
    }
  }, [callStatus]);

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
              {isConnected ? (
                isConnecting ? (
                  <p className="text-center">Connecting to Candling...</p>
                ) : (
                  <p className="text-center">Connected to Candling</p>
                )
              ) : (
                <></>
              )}

              {isConnected && (
                <div className="mt-2.5">
                  <p className="text-center">
                    {isSpeechActive
                      ? "Assistant is speaking"
                      : "Assistant is listening"}
                  </p>

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
                  onClick={() => toggleCall("helpline")}
                  disabled={isConnecting}
                  className="demo-cta-button"
                >
                  {isConnecting ? (
                    <span className="demo-cta-button-text">Connecting...</span>
                  ) : isConnected ? (
                    <>
                      <div className="mid-call demo-cta-button-text">
                        End Call
                      </div>
                      <img src={MidCallIcon} alt="call to action button" />
                    </>
                  ) : (
                    <>
                      <img src={CtaButtonLogo} alt="call to action button" />
                      <div className="demo-cta-button-text">
                        Talk to Candling
                      </div>
                    </>
                  )}
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
          <button
            onClick={() =>
              window.open(
                "https://forms.gle/SQDHcDD83htNhy5c7",
                "_blank",
                "noopener",
              )
            }
            className="demo-feedback-button"
          >
            Provide Feedback Here
          </button>
          <div className="scroll-icon">⇆</div>
        </div>
      </div>

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

      {showTranscript && selectedRecord && (
        <NotesPanel
          record={selectedRecord}
          onDeleteRecord={handleDeleteRecord}
          onCloseFollowUpNotes={handleCloseFollowUoNotes}
        />
      )}
    </div>
  );
};

export default Dashboard;
