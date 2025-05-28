// import { NavLink } from 'react-router'
import { Header } from './components/landing/header'
import { Hero } from './components/landing/Hero'
import { Marquee } from './components/landing/Marquee'
import { AudienceSegments } from './components/landing/AudienceSegments'
import { CandlingInsights } from './components/landing/CandlingInsights'
import { Vapi } from './components/landing/Vapi'
import { Footer } from './components/landing/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <AudienceSegments />
      <CandlingInsights />
      <Vapi />
      <Footer />
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
  )
}

export default App
