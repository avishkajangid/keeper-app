import React from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import AllNotes from "./components/AllNotes";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CreateArea />} />
        <Route path="/all" element={<AllNotes />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
