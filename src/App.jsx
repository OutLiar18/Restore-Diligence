import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";

import AnnouncementBar from "./components/AnnouncementBar";
import MobileActionBar from "./components/MobileActionBar";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";

import "./App.css";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ChristmasDrivePage = lazy(() => import("./pages/ChristmasDrivePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

function App() {
  const location = useLocation();
  const isGivingDrive = location.pathname.startsWith("/christmas-drive");

  return (
    <div className={`site ${isGivingDrive ? "site--drive" : "site--store"}`}>
      <ScrollToTop />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <AnnouncementBar />
      <SiteHeader />

      <main id="main-content" tabIndex="-1">
        <Suspense
          fallback={
            <div className="route-loading" role="status" aria-live="polite">
              Preparing the page…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/christmas-drive" element={<ChristmasDrivePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}

export default App;
