import "./Main.css";

import axios from "axios";
import { useState } from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  const [input, setInput] = useState("");
  const [onSent, setOnSent] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input, 
    setInput,

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target.userComment.value;
    setInput(comment);
    console.log(comment);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/test-ai?prompt=${comment}`
      );
      console.log(data?.reply);
      setOnSent(data?.reply);
    } catch (error) {
      console.log(error);
    }
  };

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
        <div>
          <p>{userChat ? userChat : null}</p>
        </div>

        {/* Main bottom */}

        <div className="main-bottom">
          <div className="search-box">
            <form onSubmit={handleSubmit}>
              <input
                name="userComment"
                type="text"
                placeholder="Enter a prompt here"
              />
            </form>
            <div>
              <img src={assets?.gallery_icon} alt="" />
              <img src={assets?.mic_icon} alt="" />
              <img src={assets?.send_icon} alt="" />
            </div>
          </div>

          <p className="bottom-info">
            Nime may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Nime Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
