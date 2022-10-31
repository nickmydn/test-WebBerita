import Navbar from "./pages/Navbar";
import { useState, useEffect } from "react";
import TrendingList from "./pages/TrendingList";
import BisnisList from "./pages/BisnisList";
import KesehatanList from "./pages/KesehatanList";
import OlahragaList from "./pages/OlahragaList";
import SainsList from "./pages/SainsList";
import TeknologiList from "./pages/TeknologiList";
import { Routes, Route } from "react-router-dom";
import HiburanList from "./pages/HiburanList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TrendingList />} />
      </Routes>

      <Routes>
        <Route path="/hiburan" element={<HiburanList />} />
      </Routes>
      <Routes>
        <Route path="/bisnis" element={<BisnisList />} />
      </Routes>
      <Routes>
        <Route path="/olahraga" element={<OlahragaList />} />
      </Routes>
      <Routes>
        <Route path="/kesehatan" element={<KesehatanList />} />
      </Routes>
      <Routes>
        <Route path="/sains" element={<SainsList />} />
      </Routes>
      <Routes>
        <Route path="/teknologi" element={<TeknologiList />} />
      </Routes>
    </>
  );
}

export default App;
