import "./rightside.css";
import { Users } from "../../data";
import Online from "../../components/online/online";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authcontext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { BASE_URL } from "../../pages/helper";

export default function rightside({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setfriends] = useState([]);
  const { user: currentuser, dispatch } = useContext(AuthContext);
  const [followed, setfollowed] = useState(
    currentuser.follower.includes(user?.id)
  );
  useEffect(() => {
    const getfriends = async () => {
      try {
        const friendlist = await axios.get(
          `${BASE_URL}/api/users/friends/` + user._id
        );
        setfriends(friendlist.data);
      } catch (err) {
        console.log(err);
      }
    };
    getfriends();
  }, [user]);
  const followhandle = async () => {
    try {
      if (followed) {
        await axios.put(
          `${BASE_URL}//api/users/` + currentuser._id + "/unfollow",
          { userId: user._id }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(
          `${BASE_URL}/api/users/` + currentuser._id + "/follow",
          { userId: user._id }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setfollowed(!followed);
  };
  const Homerightside = () => {
    return (
      <>
        <div className="headin">
          <h3 className="headingtext">Birthdays</h3>
        </div>
        <div className="gitcontainr">
          <img src="/assests/gift.png" alt="" className="gift" />
          <span className="textare">
            <b>Pankhuri</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <hr />
        <div>
          <div>
            {" "}
            <h3>Contacts</h3>
          </div>
          <div className="icons"></div>
        </div>
        <ul>
          {Users.map((c) => (
            <Online key={c.id} user={c} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRight = () => {
    return (
      <>
        {user.username !== currentuser.username && (
          <button className="buttoncontainer" onClick={followhandle}>
            {followed ? "Unfollow" : "follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <div className="profilerightcontainer">
          <div className="intro">
            <h2>Intro</h2>
            <div className="lives">
              <span>Lives in </span>
              <span> {user.city}</span>
            </div>
            <div className="lives">
              <span>From </span>
              <span> {user.city}</span>
            </div>
            <div className="lives">
              <span>Relationship </span>
              <span>
                {" "}
                {user.relationship === 1
                  ? "Single"
                  : user.relationship === 1
                  ? "Married"
                  : "-"}
              </span>
            </div>
          </div>
          <br />
          <div className="userfirend">
            <h2>Friends</h2>
            <div className="rightbarfollowings">
              <div className="rightbarfollowing">
                <img
                  src={PF + "user/no-profile.jpg"}
                  alt=""
                  className="useroo"
                />
                <span>{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightwrapper">
        {user ? <ProfileRight /> : <Homerightside />}
      </div>
    </div>
  );
}
