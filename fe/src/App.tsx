import './App.css'
import { NavLink } from 'react-router'

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      cooking
      <NavLink
        to="/Dashboard"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : ""
          ].join(" ")
        }>
          Go to Dashboard
      </NavLink>
    </div>
  )
}

export default App
