import { Link } from "react-router";
import { siteConfig } from "../config/site";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__inner">
        <span className="announcement-bar__spark" aria-hidden="true">
          ✦
        </span>
        <p>
          <strong>{siteConfig.christmasDrive.year} Christmas Giving Drive</strong>
          <span> — clothes, food hampers and care items welcomed.</span>
        </p>
        <Link to="/christmas-drive">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default AnnouncementBar;
