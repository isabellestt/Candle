import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// import './index.css'
import App from "./App.tsx";
import Dashboard from "./routes/Demo.tsx";
import Candle from "./routes/Candle.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Demo" element={<Dashboard />} />
        <Route path="/Candle" element={<Candle />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
