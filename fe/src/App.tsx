// import { NavLink } from 'react-router'

import { CandleHeader } from "./components/candle-landing/Candle-Header";

function App() {
  return (
    <>
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
