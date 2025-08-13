import { NavLink } from "react-router";
import Button from "../../src/components/candle-landing/alt-components/Button";
import CandleLogo from "../assets/candle-logo.svg";
import PhoneIcon from "../../src/assets/phone-icon.svg";
import Mute from "../assets/microphone-icon.svg";
import End from "../assets/end-call-icon.svg";
import ConnectingLogo from "../assets/connecting-icon.svg";
import Arrow from "../assets/chevron.svg";
import { useEffect, useState, useRef } from "react";
import { useVapi } from "../utils/assistant/useVapi";

// Add Google types
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: { credential: string }) => void }) => void;
          renderButton: (element: HTMLElement, options: { type: string; shape: string; theme: string; text: string; size: string; logo_alignment: string; width?: string }) => void;
        };
      };
    };
  }
}

const FLOW_STATES = {
  INITIAL: "initial",
  REQUEST_MICROPHONE: "request_microphone",
  IN_CALL: "in_call",
  END_CALL: "end_call",
};

const Candle = () => {
  const [currentFlow, setCurrentFlow] = useState(FLOW_STATES.INITIAL);
  const [selectedCaller, setSelectedCaller] = useState("Olivia");
  const googleSignInRef = useRef<HTMLDivElement>(null);

  const { toggleCall, callDuration, callStatus } =
    useVapi();


  const [isConnected, setIsConnected] = useState(false);

  const handleMicrophonePermission = async () => {
    try {
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // If permission is granted, stop the stream and proceed to connecting state
      stream.getTracks().forEach(track => track.stop());
      toggleCall(selectedCaller.toLowerCase());
      setCurrentFlow(FLOW_STATES.IN_CALL);
    } catch (error) {
      console.error('Microphone permission denied:', error);
      // Stay in REQUEST_MICROPHONE state if permission is denied
      // You could also show an error message to the user here
      alert('Microphone permission is required to use this feature. Please allow microphone access and try again.');
    }
  };

  // Initialize Google Sign-In
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && googleSignInRef.current) { 
        window.google.accounts.id.initialize({
          client_id: "329414935998-e83p6opiv7j1stu5i9o0nrpu1s2vfre4.apps.googleusercontent.com",
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(googleSignInRef.current, {
          type: "standard",
          shape: "rectangular",
          theme: "outline",
          text: "signin_with",
          size: "large",
          logo_alignment: "center",
          width: "80%",
        });

        // Add custom styling to match the other button
        setTimeout(() => {
          const googleButton = googleSignInRef.current?.querySelector('div[role="button"]') as HTMLElement;
          if (googleButton) {
            googleButton.style.width = '100%';
            googleButton.style.border = '1px solid white';
            googleButton.style.borderRadius = '6px';
            googleButton.style.padding = '10px';
            googleButton.style.fontSize = '14px';
            googleButton.style.color = 'white';
            googleButton.style.backgroundColor = 'transparent';
          }
        }, 100);
      }
    };

    // Check if Google script is loaded
    if (window.google) {
      initializeGoogleSignIn();
    } else {
      // Wait for Google script to load
      const checkGoogle = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogle);
          initializeGoogleSignIn();
        }
      }, 100);
    }
  }, [currentFlow]);

  const handleCredentialResponse = (response: { credential: string }) => {
    console.log("Google Sign-In response:", response);
    // Handle the credential response here
    // You can send this to your backend for verification
  };

  useEffect(() => {
    if (callStatus === "inactive") {
      setIsConnected(false);
    }
    if (callStatus === "active") {
      setIsConnected(true);
    }
    if (callStatus === "error") {
      setIsConnected(false);
    }
  }, [callStatus]);

  const renderFlowContent = () => {
    switch (currentFlow) {
      case FLOW_STATES.INITIAL:
        return (
          <div id="1" className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100">
            <div
              id="olivia"
              className="bg-[#FF9C25] w-70 h-45 lg:w-90 lg:h-47.5 rounded-t-xl flex flex-row items-center justify-center gap-x-2"
              onClick={() => {
                setSelectedCaller("Olivia");
                setCurrentFlow(FLOW_STATES.REQUEST_MICROPHONE);
              }}
            >
              <img src={PhoneIcon} alt="Phone icon" />
              <p className="text-white text-lg font-semibold">
                {selectedCaller}
              </p>
            </div>
            <div
              id="noah"
              className="bg-[#FFD098] w-70 h-45 lg:w-90 lg:h-47.5 rounded-b-xl flex flex-row items-center justify-center gap-x-2"
              onClick={() => {
                setSelectedCaller("Noah");
                setCurrentFlow(FLOW_STATES.REQUEST_MICROPHONE);
              }}
            >
              <img src={PhoneIcon} alt="Phone icon" />
              <p className="text-white text-lg font-semibold">Noah</p>
            </div>
          </div>
        );
      case FLOW_STATES.REQUEST_MICROPHONE:
        return (
          <>
            {selectedCaller === "Olivia" && (
              <div id="2" className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100">
                <div
                  id="loading"
                  className="bg-[#FF9C25] w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-row items-center justify-center gap-x-2"
                  onClick={handleMicrophonePermission}
                >
                  <p className="text-white text-lg font-semibold px-5 text-center leading-[33px]">
                    To chat with {selectedCaller}, please allow us to use your
                    microphone (click here)
                  </p>
                </div>
              </div>)}
            {selectedCaller === "Noah" && (
              <div id="2" className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100">
                <div
                  id="loading"
                  className="bg-[#FFD098] w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-row items-center justify-center gap-x-2"
                  onClick={handleMicrophonePermission}
                >
                  <p className="text-white text-lg font-semibold px-5 text-center leading-[33px]">
                    To chat with {selectedCaller}, please allow us to use your
                    microphone (click here)
                  </p>
                </div>
              </div>)}
          </>
        );

      case FLOW_STATES.IN_CALL:
        if (!isConnected) return <div id="2" className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100">
          <div
            id="loading"
            className="bg-[#FFD098] w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-row items-center justify-center gap-x-2"
          >
            <p className="text-white text-lg font-semibold">
              Connecting to {selectedCaller}
            </p>
            <img src={ConnectingLogo} alt="Phone icon" />
          </div>
        </div>
        return (
          <div id="3" className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100">
            <div className="flex flex-col items-center">
              <h2 className="text-[#FF9C25] font-bold text-[28px] tracking-[-1px]">

                {isConnected ? (
                  <p>{selectedCaller}{" "}
                    {String(Math.floor(callDuration / 60)).padStart(2, '0')}:
                    {String(callDuration % 60).padStart(2, '0')}</p>
                ) : (
                  <p>Connecting to {selectedCaller}</p>
                )
                }

              </h2>
              <p className="text-[#A9A9A9]">by Candle</p>
            </div>
            <div className="w-40 h-40 rounded-full bg-[linear-gradient(to_bottom_right,_#ECDAC3_2%,_#FF9C25_100%)] my-16"></div>
            <div className="flex items-center bg-[#FF9C2540] px-[36px] py-[15px] w-75 place-content-around rounded-md text-[#FF9C25] font-bold tracking-[-1px]">
              <div className="flex items-center gap-[6px] cursor-pointer" onClick={() => { alert("To add feature") }}>
                <img src={Mute} alt="Mute call button" />
                <p>Mute</p>
              </div>
              <div
                className="flex items-center gap-[6px] cursor-pointer"
                onClick={() => {
                  setCurrentFlow(FLOW_STATES.END_CALL);
                }}
              >
                <img src={End} alt="End call button" />
                <p>End Call</p>
              </div>
            </div>
          </div>
        );
      case FLOW_STATES.END_CALL:
        return (
          <div id="4" className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100">
            <div
              id="login"
              className="bg-[#FF9C25] w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-col items-center justify-center gap-x-2"
            >
              <p className="text-white text-sm font-semibold text-center text-[18px] lg:text-[16px] tracking-[-0.8px] px-8 lg:px-0">
                Login for a better personalised experience
              </p>
              <p className="text-white text-sm font-light text-center text-[12px] px-12 lg:px-18 py-4 mb-6">
                Includes long-term memory, and access to longer sessions.
              </p>
              <div className="w-[80%] flex justify-center mb-4">
                <div ref={googleSignInRef} className="w-full"></div>
              </div>
              <button
                className="text-[14px] flex justify-center gap-3 items-center border-1 border-white text-white w-[80%] rounded-md py-[10px]"
                onClick={() => {
                  setCurrentFlow(FLOW_STATES.INITIAL);
                }}
              >
                <p>Start a new conversation</p>
                <img src={Arrow} alt="Start a new conversation" />
              </button>
            </div>
            <a
              href="https://forms.gle/psLTVG3JgNCsw24X8"
              className="text-[#FF9C25] text-[12px] text-center pt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Leave feedback here</u>
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="py-6 px-8 flex place-content-between">
        <NavLink to="/">
          <img src={CandleLogo} alt="Logo for Candle" />
        </NavLink>
        <Button text="Login"></Button>
      </section>
      <section className="flex flex-col items-center">
        {renderFlowContent()}
      </section>
      <div>
        <p className="text-center px-17 text-[#A9A9A9] absolute bottom-10 text-xs lg:text-md leading-5">
          By using our services, you agree to Candle’s
          <a href="#" onClick={() => alert("To be added!")}>
            <u>Privacy Policy</u>
          </a>
          <span> and</span>
          <a href="#" onClick={() => alert("To be added!")}>
            <u>Terms of Use</u>
          </a>
        </p>
      </div>
    </>
  );
};

export default Candle;
