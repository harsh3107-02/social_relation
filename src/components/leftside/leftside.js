import "./leftside.css";

import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";

export default function leftside() {
  return (
    <div className="leftbar">
      <div className="wrapper">
        <ul className="sidelist">
          <li className="listitem">
            <PeopleIcon className="icons" />
            <span>Friends</span>
          </li>
          <li className="listitem">
            <GroupsIcon className="icons" />
            <span>Groups</span>
          </li>
          <li className="listitem">
            <StorefrontIcon className="icons" />
            <span>Marketplace</span>
          </li>
          <li className="listitem">
            <LiveTvIcon className="icons" />
            <span>Watch</span>
          </li>
          <li className="listitem">
            <WatchLaterOutlinedIcon className="icons" />
            <span>Memories</span>
          </li>
          <li className="listitem">
            <BookmarkOutlinedIcon className="icons" />
            <span>Saved</span>
          </li>
          <li className="listitem">
            <FlagOutlinedIcon className="icons" />
            <span>Pages</span>
          </li>
          <li className="listitem">
            <EventIcon className="icons" />
            <span>Events</span>
          </li>
          <li>
            <button>+</button>
            <span>see more</span>
          </li>
          <br />
          <li className="logout">
            <LogoutIcon />
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
