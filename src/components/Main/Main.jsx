import "./Main.css";

import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      {/* NavBar */}
      <div className="nav">
        <p>Nime</p>
        <img src={assets?.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            {" "}
            <span>Hello, Dev..</span>{" "}
          </p>
          <p>How can I help you today</p>
        </div>

        {/* All cards */}
        <div className="cards">
          <div className="card">
            <p>Recommend a scenic destination for my next road trip.</p>
            <img src={assets?.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>What's a must-visit place for an adventurous road trip?</p>
            <img src={assets?.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest a hidden gem to explore on a weekend drive.</p>
            <img src={assets?.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets?.code_icon} alt="" />
          </div>
        </div>

        {/* Main bottom */}

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
            <img src={assets?.gallery_icon} alt="" />
            <img src={assets?.mic_icon} alt="" />
            <img src={assets?.send_icon} alt="" />
            </div>
          </div>

          <p className="bottom-info">
          Nime may display inaccurate info, including about people, so double-check its responses. Your privacy and Nime Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
