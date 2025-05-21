import { useState, useEffect } from 'react'
import './App.css'
import { useVapi } from './utils/assistant/useVapi';

function App() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  // const [status, setStatus] = useState("Ready")

  const { toggleCall, isSpeechActive, callStatus, audioLevel } =
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Emergency Helpline</h1>

      <div style={{ marginBottom: "20px" }}>
        <p>Status: {callStatus}</p>

        {isConnected && (
          <div style={{ marginTop: "10px" }}>
            <p>{isSpeechActive ? "Assistant is speaking" : "Assistant is listening"}</p>

            {/* Simple volume indicator */}
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                marginBottom: "10px",
                gap: "3px",
              }}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    width: "15px",
                    height: "15px",
                    backgroundColor: i / 10 < audioLevel ? "#3ef07c" : "#444",
                    borderRadius: "2px",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>


      <button
        onClick={toggleCall}
        disabled={isConnecting}
        style={{
          backgroundColor: isConnected ? "#f03e3e" : "white",
          color: isConnected ? "white" : "black",
          border: "none",
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: isConnecting ? "not-allowed" : "pointer",
          opacity: isConnecting ? 0.7 : 1,
        }}
      >
        {isConnecting ? "Connecting..." : isConnected ? "End Call" : "Call Emergency Assistant"}
      </button>

      <a
        href="https://docs.vapi.ai"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          top: "25px",
          right: "25px",
          padding: "5px 10px",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        return to docs
      </a>
    </div>
  )
}

export default App
