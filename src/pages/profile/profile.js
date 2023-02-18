import Navbar from "../../components/topbar/topbar";
import "./profile.css";
import Right from "../../components/rightside/rightside";
import Feed from "../../components/feed/feed";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../helper";

export default function profile() {
  const [user, setuser] = useState({});
  const { username } = useParams();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const fetchuser = async () => {
      const ret = await axios.get(`${BASE_URL}/api/users?username=${username}`);
      setuser(ret.data);
    };
    fetchuser();
  }, [username]);
  console.log(user);
  return (
    <div>
      <div>
        <Navbar />
        <center>
          <div className="profilewrpper">
            <div>
              <img
                src={
                  user.coverprofile
                    ? PF + user.coverprofile
                    : PF + "user/nocover.png"
                }
                alt=""
                className="cover"
              ></img>
            </div>
            <div className="dp">
              <div className="ok">
                <div>
                  <img
                    src={
                      user.profile
                        ? PF + user.profile
                        : PF + "user/no-profile.jpg"
                    }
                    alt=""
                    className="userdp"
                  />
                </div>
                <div className="area">
                  <span className="textarea">{user.username}</span>
                  <br />
                  <span>{user.desc}</span>
                </div>
              </div>
              <div>
                <button>add story</button>
                <button>edit post</button>
              </div>
            </div>
            <hr />
            <div className="main">
              <div className="side">
                <Right user={user} />
              </div>
              <div className="lside">
                <Feed username={username} />
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
    // <div></div>
  );
}
