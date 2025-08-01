// import { NavLink } from 'react-router'
import { Header } from "./components/landing/header/Header";
import { Hero } from "./components/landing/hero/Hero";
import { Marquee } from "./components/landing/marquee/Marquee";
import { AudienceSegments } from "./components/landing/segment/AudienceSegments";
import { CandlingInsights } from "./components/landing/insights/CandlingInsights";
import { Vapi } from "./components/landing/vapi/Vapi";
import { Footer } from "./components/landing/footer/Footer";
import { CandleHeader } from "./components/candle-landing/Candle-Header";

function App() {
  return (
    <>
      <div className="main-app">
        <Header />
        <Hero />
        <Marquee />
        <AudienceSegments />
        <CandlingInsights />
        <Vapi />
        <Footer />
      </div>
      <CandleHeader />
    </>
    // <div className="flex flex-col items-center justify-center">
    //   cooking
    //   <NavLink
    //     to="/Demo"
    //     className={({ isActive, isPending, isTransitioning }) =>
    //       [
    //         isPending ? "pending" : "",
    //         isActive ? "active" : "",
    //         isTransitioning ? "transitioning" : ""
    //       ].join(" ")
    //     }>
    //       Go to Dashboard
    //   </NavLink>
    // </div>
  );
}

export default App;
