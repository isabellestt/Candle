// import { NavLink } from 'react-router'

import { LandingPage } from "./routes/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
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
