import "./App.css";

// asset

import ProfileImg from "./assets/Jeremiah.jpg";
import Dots from "./assets/dots.svg";
import Slack from "./assets/slack.png";
import GitHub from "./assets/github.png";

// components
import Footer from "./components/Footer";

const LinkTemplate = ({ data }) => {
  const { linkValue, id, externalLink } = data;
  return (
    <a
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className="link"
    >
      {linkValue}
    </a>
  );
};

const App = () => {
  const Links = {
    0: {
      linkValue: "Twitter Link",
      id: "twitter",
      externalLink: "https://twitter.com/tech_optician",
    },
    1: {
      linkValue: "Zuri Team",
      id: "btn__zuri",
      externalLink: "https://training.zuri.team/",
    },
    2: {
      linkValue: "Zuri Books",
      id: "books",
      externalLink: "https://books.zuri.team",
    },
    3: {
      linkValue: "Python Books",
      id: "book__python",
      externalLink: "https://books.zuri.team/python-for-beginners?ref_id=jay",
    },
    4: {
      linkValue: "Background Check For Coders",
      id: "pitch",
      externalLink: "https://background.zuri.team",
    },
    5: {
      linkValue: "Design Books",
      id: "book__design",
      externalLink: "https://books.zuri.team/design-rules",
    },
  };

  return (
    <div className="app">
      {/* share button */}
      <div className="app-share">
        <img src={Dots} alt="share-btn" />
      </div>

      {/* profile container */}
      <div className="app-profile">
        {/* profile display image */}
        <div className="app-profile--img">
          <img src={ProfileImg} alt="profile-avatar" id="profile__img" />
        </div>

        {/* profile links */}
        <div className="app-profile--links">
          <p id="twitter">@tech_optician</p>
          <p id="slack">Jeremiah Okon</p>
        </div>
      </div>

      {/* links */}
      {Object.keys(Links).map((_idx) => (
        <LinkTemplate data={Links[_idx]} key={_idx} />
      ))}

      {/* socials link  */}
      <div className="app-socials">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={Slack} alt="slack" />
        </a>
        <a
          href="https://github.com/jerncomania28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="slack" />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default App;
