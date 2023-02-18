import "./home.css";
import Topbar from "../../components/topbar/topbar";
import Left from "../../components/leftside/leftside";
import Right from "../../components/rightside/rightside";
import Feed from "../../components/feed/feed";
import { useEffect } from "react";

export default function home() {
  // useEffect(() => {
  //   localStorage.clear();
  //   window.location.reload();
  // });
  return (
    <div>
      <Topbar />
      <div className="homecontainer">
        <Left />
        <Feed />
        <Right />
      </div>
    </div>
  );
}
