import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// import './index.css'
import App from "./App.tsx";
import Dashboard from "./routes/Demo.tsx";
import Candle from "./routes/Candle.tsx";
// import DemoLanding from "./routes/DemoLanding.tsx"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/DemoLanding" element={<DemoLanding />} /> */}
        <Route path="/DemoLanding/Demo" element={<Dashboard />} />
        <Route path="/Candle" element={<Candle />} />
        <Route path="/test" element={<div>Test route working!</div>} /> {/* Add this */}
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
