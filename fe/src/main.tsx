import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Dashboard from "./routes/Deprecated-Demo.tsx";
import Demo from "./routes/Demo.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/deprecateddemo" element={<Dashboard />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
