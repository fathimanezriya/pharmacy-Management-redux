import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MedicineListPage from "./pages/MedicineListPage";
import MedicineFormPage from "./pages/MedicineFormPage";
import EntryPage from "./pages/EntryPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Pharmacy</Link>
          <div>
            <Link className="btn btn-sm btn-outline-light" to="/medicines">
              Medicines
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/medicines" element={<MedicineListPage />} />
        <Route path="/add" element={<MedicineFormPage />} />
        <Route path="/edit/:id" element={<MedicineFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
