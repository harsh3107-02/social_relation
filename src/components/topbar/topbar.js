import "./topbara.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import { Link } from "react-router-dom";
export default function topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="container">
      <div className="leftcontainer">
        <span className="logo">logo</span>
      </div>
      <div className="searchbar">
        <SearchIcon className="searchIcon" />
        <input
          type="text"
          className="searchInput"
          placeholder="Search for friend Post"
        />
      </div>

      <div className="middlecontainer">
        <HomeIcon />
        <TimelineIcon />
      </div>
      <div className="rightcontainer">
        <div className="topbarincon">
          <div className="icon">
            <NotificationsIcon className="icons" />
            <span className="topbarbadges">1</span>
          </div>
          <div className="icon">
            <MessageIcon className="icons" />
            <span className="topbarbadges">2</span>
          </div>
          <div className="icon">
            <AppsIcon className="icons" />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profile ? PF + user.profile : PF + "user/no-profile.jpg"}
            alt=""
            className="profileimage"
          />
        </Link>
      </div>
    </div>
  );
}
