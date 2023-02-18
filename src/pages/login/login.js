import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apicall";
import { AuthContext } from "../../context/authcontext";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../helper";

export default function login() {
  // const BASE_URL = process.env.URL;
  const emails = useRef();
  const passwords = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  // const { user: currentUser } = useContext(AuthContext);
  // const handleclick = (e) => {
  //   e.preventDefault();
  //   loginCall(
  //     { email: emails.current.value, password: passwords.current.value },
  //     dispatch
  //   );
  //   sessionStorage.setItem("email", emails.current.value);
  //   sessionStorage.setItem("password", passwords.current.value);
  // };
  const handleclick = async (e) => {
    e.preventDefault();
    const userCredential = {
      email: emails.current.value,
      password: passwords.current.value,
    };
    try {
      const res = await axios.post(
        `${BASE_URL}/api/auths/login`,
        userCredential
      );
      dispatch({ type: "Login_Sucess", payload: res.data });
    } catch (err) {
      dispatch({ type: "Login_Failure", payload: err });
    }
  };
  // useEffect(() => {
  //   localStorage.clear();
  //   window.location.reload();
  // });
  console.log(user);
  return (
    <div className="loginwrapper">
      <div className="loginWrapper">
        <div className="logo">
          <h2>logps</h2>
        </div>
        <form className="right" onSubmit={handleclick}>
          <input
            type="email"
            placeholder="Email Address or phone Number"
            className="text"
            required
            ref={emails}
          />
          <input
            type="password"
            placeholder="Password"
            className="text"
            required
            minLength={6}
            ref={passwords}
          />
          <button className="login">
            {isFetching ? (
              <CircularProgress color="inherit" width="15px" />
            ) : (
              "Log in"
            )}
          </button>
          <center>
            <p style={{ color: "#1877F2" }}>forgot password?</p>
          </center>
          <center>
            <hr className="line" />
          </center>
          <center>
            <button className="register">
              {isFetching ? (
                <CircularProgress color="inherit" />
              ) : (
                "Create New Account"
              )}
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}
