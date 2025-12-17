import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

/* ================= ABOUT ================= */

// Rename AboutOverview.jsx → CompanyProfile.jsx
import CompanyProfile from "./pages/About/CompanyProfile";
import MissionVision from "./pages/About/MissionVision";
import Board from "./pages/About/Board";
import SectionHeads from "./pages/About/SectionHeads";
import HumanResources from "./pages/About/HumanResources";
import Objectives from "./pages/About/Objectives";
import QualityPolicies from "./pages/About/QualityPolicies";
import Milestones from "./pages/About/Milestones";
import Activities from "./pages/About/Activities";

/* ================= PRODUCTS ================= */

import AllProducts from "./pages/Products/AllProducts";
import Milk from "./pages/Products/Milk";
import Curd from "./pages/Products/Curd";
import Ghee from "./pages/Products/Ghee";
import Butter from "./pages/Products/Butter";
import Paneer from "./pages/Products/Paneer";

/* ================= OTHER ================= */

import Units from "./pages/Units";
import News from "./pages/News";
import Notifications from "./pages/Notifications";
import Contact from "./pages/Contact";

/* ================= LEGAL ================= */

import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import Refund from "./pages/Legal/Refund";

export default function AppRouter() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* ABOUT (MYMUL STRUCTURE) */}
      <Route path="/about/company-profile" element={<CompanyProfile />} />
      <Route path="/about/mission-vision" element={<MissionVision />} />
      <Route path="/about/board" element={<Board />} />
      <Route path="/about/section-heads" element={<SectionHeads />} />
      <Route path="/about/human-resources" element={<HumanResources />} />
      <Route path="/about/objectives" element={<Objectives />} />
      <Route path="/about/quality-policies" element={<QualityPolicies />} />
      <Route path="/about/milestones" element={<Milestones />} />
      <Route path="/about/activities" element={<Activities />} />

      {/* PRODUCTS */}
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/milk" element={<Milk />} />
      <Route path="/products/curd" element={<Curd />} />
      <Route path="/products/ghee" element={<Ghee />} />
      <Route path="/products/butter" element={<Butter />} />
      <Route path="/products/paneer" element={<Paneer />} />

      {/* OTHER */}
      <Route path="/units" element={<Units />} />
      <Route path="/news" element={<News />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/contact" element={<Contact />} />

      {/* LEGAL */}
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/refund-policy" element={<Refund />} />
    </Routes>
  );
}
