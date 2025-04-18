import "./Main.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  const [allData, setAllData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target.userComment.value;

    console.log(comment);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/test-ai?prompt=${comment}`
      );
      console.log(data);
      if (data?.insertedId) {
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/response-ai`)
        .then((data) => setAllData(data?.data));

      console.log(allData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(allData);

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
          <p>How can I help you today..!</p>
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

        <div className="min-h-80 overflow-scroll">
          {allData.map((data) => (
            <>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className="chat-header font-bold text-sm">User</div>
                {<div className="chat-bubble bg-blue-300 "> {data?.prompt} </div>}
              </div>
              <div className="">
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://i.ibb.co.com/Jw5dfPy2/NImeBot.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header font-bold text-sm">Nime</div>
                  {<div className="chat-bubble bg-green-200"> {data?.reply} </div>}
                </div>
              </div>
            </>
          ))}
        </div>

        {/* Main bottom */}

        <div className="main-bottom">
          <div className="">
            <form onSubmit={handleSubmit} className="flex item-center">
              <input
                className="w-full p-2"
                name="userComment"
                type="text"
                placeholder="Enter a prompt here"
              />
              <button type="button" className=" btn p-4">
                <img className="w-12" src={assets?.send_icon} alt="" />
              </button>
            </form>
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
