import "./share.css";

import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Cancel from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../pages/helper";

export default function share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setfile] = useState(null);
  const submithandle = async (e) => {
    e.preventDefault();
    const newpost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newpost.img = filename;
      try {
        await axios.post(`${BASE_URL}/api/upload`, data);
        console.log("saved");
      } catch (err) {
        console.log("error");
      }
    }
    try {
      await axios.post(`${BASE_URL}/api/post`, newpost);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="share">
      <div className="wraper">
        <div className="main">
          <img
            src={user.profile ? PF + user.profile : PF + "user/no-profile.jpg"}
            alt=""
            className="profileimage"
          />
          <input
            type="text"
            className="write"
            placeholder={"What on your mind? " + user.username}
            ref={desc}
          />{" "}
        </div>{" "}
        <hr className="short" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCanceling" onClick={() => setfile(null)} />
          </div>
        )}
        <form className="share2" onSubmit={submithandle}>
          <div className="options">
            <div className="option">
              <label htmlFor="file">
                <CollectionsIcon htmlColor="lightgreen" />
                <span> Photo / Video </span>{" "}
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => setfile(e.target.files[0])}
                />{" "}
              </label>{" "}
            </div>{" "}
            <div className="option">
              <VideoCameraFrontIcon htmlColor="red" />
              <span> Live Video </span>{" "}
            </div>{" "}
            <div className="option">
              <EmojiEmotionsOutlinedIcon htmlColor="yellow" />
              <span> Feeling / Activity </span>{" "}
            </div>{" "}
          </div>{" "}
          <button className="sharebutton" type="submit">
            Share{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
