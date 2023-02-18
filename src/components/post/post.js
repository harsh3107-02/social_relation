import "./post.css";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import { Users } from "../../data";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import { BASE_URL } from "../../pages/helper";

export default function post({ post }) {
  const [user, setuser] = useState({});

  const [like, setlike] = useState(post.likes.length);
  const [islike, setislike] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentuser } = useContext(AuthContext);
  useEffect(() => {
    setislike(post.likes.includes(currentuser._id));
  }, [currentuser._id, post.likes]);
  useEffect(() => {
    const fetchuser = async () => {
      const ret = await axios.get(`${BASE_URL}/users/${post.userId}`);
      setuser(ret.data);
    };
    fetchuser();
  }, [post.userId]);
  const handlelike = () => {
    try {
      axios.put(`${BASE_URL}/api/post/` + post._id + "/likes", {
        userId: currentuser._id,
      });
    } catch (err) {}
    setlike(islike ? like - 1 : like + 1);
    setislike(!islike);
  };

  return (
    <div className="post">
      <div className="top">
        <div className="wrap">
          <div className="profile">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profile || "assests/user/" + "no-profile.jpg"}
                alt=""
                className="profilepic"
              />
            </Link>
            <span className="usename">{user.username}</span>
            <br />
            <span className="time">{format(post.createdAt)}</span>
          </div>
          <div>
            {" "}
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <div className="posttext">
          <span className="desc">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postedimg" />
        </div>
        <div className="last">
          <div className="left">
            <img src={`${PF}like.png`} alt="" onClick={handlelike} />
            <img src={`${PF}heart.png`} alt="" onClick={handlelike} />
            <span>{like}</span>
          </div>
          <div>
            <span>{post.coment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
