import { useState, useEffect } from 'react'
import './App.css'
import Vapi from '@vapi-ai/web'
import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

function App() {
  const [isApiKeyValid, setIsApiKeyValid] = useState(false)
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [assistantOptions, setAssistantOptions] = useState<CreateAssistantDTO | undefined>(undefined)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [status, setStatus] = useState("Ready")
  const [volumeLevel, setVolumeLevel] = useState(0)

  useEffect(()=> {
    const API_URL = import.meta.env.VITE_PUBLIC_API_URL || ""
    console.log(API_URL)
    const fetchAssistant = async () => {
      try{
        const response = await fetch(`${API_URL}/assistant`)
          if (!response.ok) {
            throw new Error('Failed to fetch assistant data')
          }

          const data = await response.json() as CreateAssistantDTO
          setAssistantOptions(data)
      } catch (error) {
        console.error('Error fetching assistant:', error)
        setErrorMessage('Could not connect to backend server')
      }
    }

    fetchAssistant()
  }, [])

  useEffect(()=> 
  {
    const apiKey = import.meta.env.VITE_PUBLIC_VAPI_API_KEY || ""
    if (!apiKey) {
      setIsApiKeyValid(false)
      setStatus("Error")
      setErrorMessage("API key is invalid or missing")
      return
    }

    const vapi = new Vapi(apiKey)
    setVapi(vapi)
    setIsApiKeyValid(true)

    vapi.on("call-start", () => {
      console.log("call started")
      setIsConnecting(false)
      setIsConnected(true)
      setStatus("Connected")
    })
    vapi.on("call-end", () => {
      console.log("call ended")
      setIsConnecting(false)
      setIsConnected(false)
      setStatus("Call ended")
    })
    vapi.on("speech-start", () => {
      setIsSpeaking(true)
    })
    vapi.on("speech-end", () => {
      setIsSpeaking(false)
    })
    vapi.on("volume-level", (level) => {
      setVolumeLevel(level)
    })

    // clean up function
    return () => {
      if (vapi) {
        vapi.stop()
      }
    }
  }, [])

  const startCall = () => {
    if (!isApiKeyValid) {
      setErrorMessage("API key is invalid or missing")
      return
    }
    setIsConnecting(true)
    if (assistantOptions) {
      setStatus("Connecting...")
      console.log("Starting call...")
      vapi?.start(assistantOptions)
    } else {
      setErrorMessage("Assistant options are not available")
    }
  }

  const endCall = () => {
    if (vapi) {
      vapi.stop()
    }
  }


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
        <p>Status: {status}</p>

        {isConnected && (
          <div style={{ marginTop: "10px" }}>
            <p>{isSpeaking ? "Assistant is speaking" : "Assistant is listening"}</p>

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
                    backgroundColor: i / 10 < volumeLevel ? "#3ef07c" : "#444",
                    borderRadius: "2px",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {errorMessage && (
        <div
          style={{
            backgroundColor: "#f03e3e",
            padding: "15px",
            borderRadius: "5px",
            marginBottom: "20px",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <p>{errorMessage}</p>

          {errorMessage.includes("payment") && (
            <a
              href="https://dashboard.vapi.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                color: "white",
                textDecoration: "underline",
              }}
            >
              Go to Vapi Dashboard
            </a>
          )}
        </div>
      )}

      <button
        onClick={isConnected ? endCall : startCall}
        disabled={isConnecting || !isApiKeyValid}
        style={{
          backgroundColor: isConnected ? "#f03e3e" : "white",
          color: isConnected ? "white" : "black",
          border: "none",
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: isConnecting || !isApiKeyValid ? "not-allowed" : "pointer",
          opacity: isConnecting || !isApiKeyValid ? 0.7 : 1,
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
