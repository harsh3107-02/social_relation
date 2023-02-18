import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
// import { posts } from "../../data";
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/authcontext";
import { BASE_URL } from "../../pages/helper";

export default function feed({ username }) {
  const [posts, setpost] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchout = async () => {
      const res = username
        ? await axios.get(`${BASE_URL}/api/post/profile/` + username)
        : await axios.get(`${BASE_URL}/api/post/timeline/` + user._id);
      setpost(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchout();
  }, [username, user._id]);
  return (
    <div className="feedbar">
      <div className="feed">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
