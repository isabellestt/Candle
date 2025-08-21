import { NavLink } from "react-router";
import Button from "../../src/components/candle-landing/alt-components/Button";
import CandleLogo from "../assets/candle-logo.svg";
import PhoneIcon from "../../src/assets/phone-icon.svg";
import MuteOlivia from "../assets/microphone-icon-olivia.svg";
import EndOlivia from "../assets/end-call-icon-olivia.svg";
import MuteNoah from "../assets/microphone-icon-noah.svg";
import EndNoah from "../assets/end-call-icon-noah.svg";
import ConnectingLogo from "../assets/connecting-icon.svg";
import GoogleLogo from "../assets/google-logo.svg";
import PlayButton from "../assets/play-button.png";
import StopButton from "../assets/stop-button.png";
import { MultiStepProfileForm } from "../components/candle-landing/alt-components/SignUp";
import { useEffect, useState } from "react";
import { useVapi } from "../utils/assistant/useVapi";

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
  CONNECTING: "connecting",
  IN_CALL: "in_call",
  END_CALL: "end_call",
  SIGN_UP: "sign_up",
};

type Caller = "Olivia" | "Noah";

const Candle = () => {
  const [currentFlow, setCurrentFlow] = useState(FLOW_STATES.INITIAL);
  const [selectedCaller, setSelectedCaller] = useState("Olivia");
  const [previewStatus, setPreviewStatus] = useState<{
    [key in Caller]: boolean;
  }>({
    Olivia: false,
    Noah: false,
  });
  const [isConnected, setIsConnected] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleProfileComplete = (profile: {
    name: string;
    dob: string;
    gender: string;
  }) => {
    console.log("Collected profile:", profile);
    // TODO: send to your backend here
    setLoggedIn(true);
    setCurrentFlow(FLOW_STATES.INITIAL);
  };

  useEffect(() => {
    const initializeGoogleSignIn = () => {
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

  const { toggleCall, callDuration, callStatus, triggerPeanuts } =
    useVapi();

  useEffect(() => {
    if (callStatus === "inactive") {
      if (currentFlow === FLOW_STATES.IN_CALL) {
        setCurrentFlow(FLOW_STATES.END_CALL);
      }
      setIsConnected(false);
    }
    if (callStatus === "active") {
      setIsConnected(true);
    }
    if (callStatus === "error") {
      setIsConnected(false);
      setCurrentFlow(FLOW_STATES.END_CALL);
    }
  }, [callStatus]);

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

  const getFormData = (formData: FormData): void => {
    const submitted = Object.fromEntries(formData);
    console.log(submitted);
  };

  const getSGTimeOfDay = (date = new Date()) => {
    const hour = Number(
      new Intl.DateTimeFormat("en-SG", {
        hour: "numeric",
        hour12: false,
        timeZone: "Asia/Singapore",
      }).format(date),
    );

    if (hour >= 5 && hour < 12) return "Morning";
    if (hour >= 12 && hour < 18) return "Afternoon";
    return "Evening";
  };

  const playPreview = (caller: string) => {
    alert(`insert preview for ${caller}`);
  };

  const handleCardClick = (caller: string) => {
    setSelectedCaller(caller);
    setCurrentFlow(FLOW_STATES.REQUEST_MICROPHONE);
  };

  const handlePreviewClick = (e: React.MouseEvent, caller: Caller) => {
    e.stopPropagation();
    setPreviewStatus((prev) => ({
      ...prev,
      [caller]: !prev[caller],
    }));
    playPreview(caller);
  };

  const renderFlowContent = () => {
    switch (currentFlow) {
      case FLOW_STATES.INITIAL:
        return (
          <div
            id="1"
            className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100"
          >
            {loggedIn && (
              <>
                <p className="text-black text-sm font-semibold text-center text-[20px] lg:text-[24px] tracking-[-0.8px] px-8 lg:px-8 mb-2">
                  {getSGTimeOfDay()}, (SSO username)
                </p>
              </>
            )}
            <div
              id="olivia"
              className="bg-[#14B8A6] w-[280px] h-[180px] lg:w-[360px] lg:h-[190px] rounded-t-xl flex items-center justify-center px-4"
              onClick={() => {
                handleCardClick("Olivia");
              }}
            >
              <div className="flex w-[80%] h-full items-center justify-between">
                <div className="flex flex-col items-start justify-center text-left gap-1 w-[95%]">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={PhoneIcon} alt="Phone icon" />
                    <p className="text-white text-lg font-semibold">Olivia</p>
                  </div>
                  <p className="text-white opacity-80 text-sm font-medium w-[90%] lg:w-[85%]">
                    Talk it out, keep it light, tiny, next step.
                  </p>
                </div>

                <button
                  className="flex items-center"
                  onClick={(e) => handlePreviewClick(e, "Olivia")}
                >
                  {!previewStatus.Olivia && (
                    <img
                      src={PlayButton}
                      alt="Play audio preview for Olivia"
                      className="pointer-events-none"
                    />
                  )}
                  {previewStatus.Olivia && (
                    <img
                      src={StopButton}
                      alt="Pause audio preview for Olivia"
                      className="pointer-events-none"
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="bg-[#63CDF1] h-[2px] w-[280px] lg:w-[360px]"></div>
            <div
              id="noah"
              className="bg-[#6366F1] w-[280px] h-[180px] lg:w-[360px] lg:h-[190px] rounded-b-xl flex items-center justify-center px-4"
              onClick={() => {
                handleCardClick("Noah");
              }}
            >
              <div className="flex w-[80%] h-full items-center justify-between">
                <div className="flex flex-col items-start justify-center text-left gap-1 w-[95%]">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={PhoneIcon} alt="Phone icon" />
                    <p className="text-white text-lg font-semibold">Noah</p>
                  </div>
                  <p className="text-white opacity-80 text-sm font-medium w-[90%] lg:w-[85%]">
                    Make a plan, move one step, find the right help.
                  </p>
                </div>

                <button
                  className="flex items-center"
                  onClick={(e) => handlePreviewClick(e, "Noah")}
                >
                  {!previewStatus.Noah && (
                    <img
                      src={PlayButton}
                      alt="Play audio preview for Noah"
                      className="pointer-events-none"
                    />
                  )}
                  {previewStatus.Noah && (
                    <img
                      src={StopButton}
                      alt="Pause audio preview for Noah"
                      className="pointer-events-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      case FLOW_STATES.REQUEST_MICROPHONE:
        return (
          <>
            {selectedCaller === "Olivia" && (
              <div
                id="2"
                className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100"
              >
                <div
                  id="loading"
                  className="bg-[#14B8A6] w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-row items-center justify-center gap-x-2"
                  onClick={handleMicrophonePermission}
                >
                  <p className="text-white text-lg font-semibold px-5 text-center leading-[33px]">
                    To chat with {selectedCaller}, please allow us to use your
                    microphone (click here)
                  </p>
                </div>
              </div>
            )}
            {selectedCaller === "Noah" && (
              <div
                id="2"
                className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100"
              >
                <div
                  id="loading"
                  className="bg-[#6366F1] w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-row items-center justify-center gap-x-2"
                  onClick={handleMicrophonePermission}
                >
                  <p className="text-white text-lg font-semibold px-5 text-center leading-[33px]">
                    To chat with {selectedCaller}, please allow us to use your
                    microphone (click here)
                  </p>
                </div>
              </div>
            )}
          </>
        );
      case FLOW_STATES.IN_CALL:
        if (!isConnected) return <div id="2" className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100">
          <div
            id="loading"
            className={`${selectedCaller === "Olivia" ? "bg-[#14B8A6]" : "bg-[#6366F1]"} w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-row items-center justify-center gap-x-2`}
          >
            <p className="text-white text-lg font-semibold">
              Connecting to {selectedCaller}
            </p>
            <img src={ConnectingLogo} alt="Phone icon" />
          </div>
        </div>
        return (
          <div
            id="3"
            className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-[#14B8A6] font-bold text-[28px] tracking-[-1px]">
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
            <div
              className="w-40 aspect-square rounded-full my-16
                bg-gradient-to-br from-[#14B8A6] to-[rgba(20,184,166,0.25)]"
            />
            <div className="flex items-center bg-[#14B8A640] px-[36px] py-[15px] w-75 place-content-around rounded-md text-[#14B8A6] font-bold tracking-[-1px]">
              <button className="flex items-center gap-[6px] cursor-pointer" onClick={triggerPeanuts}>Peanuts</button>
              <div
                className="flex items-center gap-[6px] cursor-pointer"
                onClick={() => {
                  alert("To add feature");
                }}
              >
                {selectedCaller === "Olivia" && (
                  <img src={MuteOlivia} alt="Mute call button" />
                )}
                {selectedCaller === "Noah" && (
                  <img src={MuteNoah} alt="Mute call button" />
                )}
                <p>Mute</p>
              </div>
              <div
                className="flex items-center gap-[6px] cursor-pointer"
                onClick={() => {
                  if (loggedIn) {
                    setCurrentFlow(FLOW_STATES.INITIAL);
                    // maybe add a call review flow here
                    return;
                  }
                  if (callStatus === "active") {
                    // end call
                    toggleCall(selectedCaller.toLowerCase());
                  }
                  setCurrentFlow(FLOW_STATES.END_CALL);
                }}
              >
                {selectedCaller === "Olivia" && (
                  <img src={EndOlivia} alt="End call button" />
                )}
                {selectedCaller === "Noah" && (
                  <img src={EndNoah} alt="End call button" />
                )}
                <p>End Call</p>
              </div>
            </div>
          </div>
        );
      case FLOW_STATES.END_CALL:
        return (
          <div
            id="4"
            className="py-10 lg:py-40 flex flex-col items-center scale-95 lg:scale-100"
          >
            <div
              id="login"
              className="w-70 lg:w-90 h-90 lg:95 rounded-xl flex flex-col items-center justify-center gap-x-2"
            >
              <p className="text-black text-sm font-semibold text-center text-[20px] lg:text-[24px] tracking-[-0.8px] px-8 lg:px-8">
                Sign up for a personalised experience
              </p>
              <p className="text-gray-400 text-sm font-light text-center text-[14px] lg:text-[16px] px-10 lg:px-4 py-4 mb-6">
                Long-term memory, access to longer sessions, and free, with no
                card required.
              </p>
              <div className="flex flex-col items-center gap-3 w-[100%]">
                <button
                  onClick={() => {
                    alert("to add sso");
                    setLoggedIn(!loggedIn);
                    setCurrentFlow(FLOW_STATES.INITIAL);
                  }}
                  className="w-full h-12 inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] active:shadow-[0_2px_6px_rgba(0,0,0,0.10)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 transition
"
                >
                  <img src={GoogleLogo} alt="Sign up with Google" />
                  <p className="text-black">Continue with Google</p>
                </button>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-30 lg:w-40 bg-gray-200"></div>
                  <div className="text-gray-400 font-medium text-xs py-4">
                    OR
                  </div>
                  <div className="h-0.5 w-30 lg:w-40 bg-gray-200"></div>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!email.trim()) {
                      setEmailError("Email is required");
                      return;
                    }
                    setEmailError("");
                    const formData = new FormData(e.currentTarget);
                    getFormData(formData);
                    setCurrentFlow(FLOW_STATES.SIGN_UP);
                  }}
                  className="flex flex-col gap-2 mt-[-6px] w-[100%]"
                >
                  <fieldset>
                    <legend className="text-sm mb-1">Email address</legend>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      placeholder="you@example.com"
                      className="border border-gray-200 rounded-2xl py-3 px-4 text-[#A9A9A9] text-sm w-[100%]"
                    />
                    {emailError && (
                      <p className="text-red-500 font-medium text-sm mt-1">
                        {emailError}
                      </p>
                    )}
                  </fieldset>
                  <button className="bg-[#FF9C25] text-white text-sm py-2 px-4 w-[100%]w-full h-12 inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-20 shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] active:shadow-[0_2px_6px_rgba(0,0,0,0.10)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 transition">
                    Continue with email
                  </button>
                </form>
                <p
                  className="text-[#A9A9A9] text-[12px] text-center underline mt-2"
                  onClick={() => {
                    setCurrentFlow(FLOW_STATES.INITIAL);
                  }}
                >
                  Chat without an account
                </p>
              </div>
            </div>
          </div>
        );
      case FLOW_STATES.SIGN_UP:
        return (
          <div className="py-10 lg:py-20 flex flex-col items-center">
            <div className="w-full max-w-lg">
              <MultiStepProfileForm
                onComplete={handleProfileComplete}
                onCancel={() => setCurrentFlow(FLOW_STATES.END_CALL)}
              />
            </div>
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
        {currentFlow !== FLOW_STATES.SIGN_UP && (
          <Button
            text={loggedIn ? "Logout" : "Login"}
            onClick={() => {
              setLoggedIn(!loggedIn)
              if (!loggedIn) {
                setCurrentFlow(FLOW_STATES.INITIAL)
              }
            }}
          />
        )}
      </section>
      <section className="flex flex-col items-center">
        {renderFlowContent()}
      </section>
      <div className="flex justify-center">
        <p
          className="
    text-center px-6 text-[#A9A9A9] text-[10px] lg:text-md leading-5
    absolute bottom-10 [@media(max-height:650px)]:static [@media(max-height:650px)]:pb-10 [@media(max-height:650px)]:mt-6
  "
        >
          Not for emergencies. If you’re in immediate danger in Singapore, call
          999 or 995. By using our services, you agree to Candle’s
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
