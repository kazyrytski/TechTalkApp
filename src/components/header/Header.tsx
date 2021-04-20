import { Link, useLocation } from "react-router-dom";

import { BackLink } from "components";

import "./header.scss";

export default function Header() {
  let location = useLocation();
  return (
    <header className="header">
      <h3 className="header_title">Tech Talks App</h3>
      {location.pathname === "/cards/list" ? (
        <Link to="/cards/add" className="link">
          {"Add Card"}
        </Link>
      ) : (
        <BackLink />
      )}
    </header>
  );
}
