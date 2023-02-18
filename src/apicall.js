import axios from "axios";

export const loginCall = async(userCredential, dispatch) => {
    dispatch({ type: "Login_start" });
    try {
        const res = await axios.post("http://localhost:8000/api/auths/login", userCredential);
        dispatch({ type: "Login_Sucess", payload: res.data });
    } catch (err) {
        dispatch({ type: "Login_Failure", payload: err });
    }
};