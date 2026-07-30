import { Link } from "react-router";
import PageMeta from "../components/PageMeta";
import "./Pages.css";

function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found | Restore Diligence"
        description="The requested page could not be found."
        noIndex
      />

      <section className="not-found-page">
        <div className="container not-found-page__inner">
          <p className="eyebrow">404 — wrong turn</p>
          <h1>This page has left the kitchen.</h1>
          <p>Return home or head straight to the menu.</p>
          <div>
            <Link to="/">Go home</Link>
            <Link to="/menu">View menu</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
