import { Link } from "react-router-dom";

import "./backLink.scss";

const BackLink = () => {
  return (
    <Link to="/cards/list" className="link">
      {"< Back To Cards List"}
    </Link>
  );
};

export default BackLink;
