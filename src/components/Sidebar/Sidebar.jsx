import { assets } from "../../assets/assets";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
        {/* top section */}
      <div className="top">
        <img className="menu" src={assets?.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets?.plus_icon} alt="" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets?.message_icon} alt="" />
            <p>What is react ...</p>
          </div>
        </div>
      </div>


       {/* Bottom section */}

      <div className="bottom">

        <div className="bottom-item recent-entry">
        <img src={assets?.question_icon} alt="" />
        <p>Help </p>
        </div>
        <div className="bottom-item recent-entry">
        <img src={assets?.history_icon} alt="" />
        <p>Activity </p>
        </div>
        <div className="bottom-item recent-entry">
        <img src={assets?.setting_icon} alt="" />
        <p>Settings </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
