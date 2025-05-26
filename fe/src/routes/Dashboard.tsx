import { useState, useEffect } from 'react'
import '../App.css'
import { useVapi } from '../utils/assistant/useVapi';
import { MessageList } from '../components/messages/MessageList';
import { Table } from '../components/dashboard/Table';

function Dashboard() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const { toggleCall, isSpeechActive, callStatus, audioLevel, messages, activeTranscript } =
    useVapi();

  // useEffect(() => {
  //   const api = import.meta.env.VITE_PUBLIC_API_URL;
  //   if (api) {
  //     fetch(`${api}/api/callLogs`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Call logs fetched:", data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching call logs:", error);
  //     })
  //   }
  // }, [])

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
    <div className="flex flex-col md:flex-row gap-6 p-5 min-h-screen w-full">
    {/* Left side - Call controls */}
    <div className="flex-1 flex flex-col items-center justify-start">
      <h1 className="text-2xl font-bold mb-8">Emergency Helpline</h1>

      <div className="w-full max-w-md mb-5">
        <p className="text-center">Status: {callStatus}</p>

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
            style={{ backgroundColor: isConnected ? "#dc2626" : "white" }}
            className={`
              ${isConnected ? "text-white" : "text-black"}
              rounded-lg py-3 px-6 text-base font-medium border-0
              ${isConnecting ? "cursor-not-allowed opacity-70" : "cursor-pointer opacity-100"}
            `}
          >
            {isConnecting ? "Connecting..." : isConnected ? "End Call" : "Call Emergency Assistant"}
          </button>
        </div>

        <div className="w-full mt-8">
          <MessageList
            messages={messages}
            activeTranscript={activeTranscript}
          />
        </div>
      </div>
    </div>

    {/* Right side - Table */}
    <div className="flex-1 mt-8 md:mt-0 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Call History</h2>
      <Table
        createdDate={new Date()}
        duration={120}
        callId="12345"
        transferred={false}
        transfer_to="N/A"
        urgent={true}
        name="John Doe"
        location="New York"
      />
    </div>
  </div>
  )
}

export default Dashboard
