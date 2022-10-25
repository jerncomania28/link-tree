import { Link } from "react-router-dom";
import "./App.css";

// asset

import ProfileImg from "./assets/instagram-4.jpeg";

const LinkTemplate = ({ linkValue, id, externalLink }) => {
  return (
    <Link
      to={{ pathname: `${externalLink}` }}
      target="_blank"
      rel="noopener"
      id={id}
      className="link"
    >
      {linkValue}
    </Link>
  );
};

const App = () => {
  return (
    <div className="app">

      {/* profile container */}
      <div className="app-profile">

        {/* profile display image */}
        <div className="app-profile--img">
          <img src={ProfileImg} alt="profile-avatar" />
        </div>

        {/* profile links */}
        <div className="app-profile--links">
          <p id="twitter">@tech_optician</p>
          <p id="slack">Jeremiah</p>
        </div>
      </div>


      <LinkTemplate linkValue="test" id="test" externalLink="https://twitter.com/" />


    </div>
  );
};

export default App;
