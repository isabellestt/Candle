import { useState, useEffect } from 'react'
import './App.css'
import { useVapi } from './utils/assistant/useVapi';
import { MessageList } from './components/messages/MessageList';

function Dashboard() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  // const [status, setStatus] = useState("Ready")

  const { toggleCall, isSpeechActive, callStatus, audioLevel, messages, activeTranscript, functionCall } =
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
    <div className="flex flex-row items-center justify-center ">
      <div className="flex flex-col items-center justify-center min-h-screen p-5 text-white">
        <h1 className="mb-8">Emergency Helpline</h1>

        <div className="mb-5">
          <p>Status: {callStatus}</p>

          {isConnected && (
            <div className="mt-2.5">
              <p>{isSpeechActive ? "Assistant is speaking" : "Assistant is listening"}</p>

              {/* Simple volume indicator */}
              <div
                className="flex mt-2.5 mb-2.5 gap-[3px]"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-[15px] h-[15px] ${i / 10 < audioLevel ? "bg-[#3ef07c]" : "bg-neutral-600"} rounded-[2px]`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={toggleCall}
          disabled={isConnecting}
          style={{ backgroundColor: isConnected ? "#dc2626" : "white" }}
          className={`
            ${isConnected ? "text-white" : "text-black"}
            rounded-lg py-3 px-6 text-base font-medium border-0
            ${isConnecting ? "cursor-not-allowed opacity-70" : "cursor-pointer opacity-100"}
          `}
        >
          {isConnecting ? "Connecting..." : isConnected ? "End Call" : "Call Emergency Assistant"}
        </button>

        <div className="flex flex-col items-center justify-center w-full max-w-2xl mt-8">
          <MessageList
            messages={messages}
            activeTranscript={activeTranscript}
          />
        </div>

        <a
          href="https://docs.vapi.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-6 right-6 p-2.5 text-white no-underline rounded shadow-md"
        >
          return to docs
        </a>
      </div>

      <div>
        {functionCall && (
          <div className="fixed bottom-0 left-0 right-0 z-10 p-4 bg-gray-800 text-white">
            <h2 className="text-lg font-bold">Function Call Result</h2>
            <p>{String(functionCall.functionCallResult.result)}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
