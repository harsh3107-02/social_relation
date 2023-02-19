import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helper";
// BASE_URL

export default function login() {
  const username = useRef();
  const emails = useRef();
  const passwords = useRef();
  const confirmPassword = useRef();
  const handleclick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== passwords.current.value) {
      alert("Password don't match!");
    } else {
      const users = {
        username: username.current.value,
        email: emails.current.value,
        password: passwords.current.value,
      };
      try {
        await axios.post(`${BASE_URL}/api/auths/register`, users);
        window.location.reload();
        alert("successfully Register");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="loginwrapper">
      <div className="loginWrapper">
        <div className="logo">
          <h2>logps</h2>
        </div>
        <form className="right" onSubmit={handleclick}>
          <input
            type="email"
            placeholder="Email "
            className="text"
            required
            ref={emails}
          />
          <input
            type="text"
            placeholder="Username"
            className="text"
            required
            ref={username}
          />
          <input
            type="password"
            placeholder="Password"
            className="text"
            required
            minLength={6}
            ref={passwords}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="text"
            required
            minLength={6}
            ref={confirmPassword}
          />
          <button className="login" type="submit">
            Sign Up
          </button>
          <center></center>
          <center>
            <Link to="/login">
              <button className="register">Log in</button>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
}
