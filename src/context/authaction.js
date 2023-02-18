export const Loginstart = (userCredential) => ({
    type: "Login_start",
});
export const LoginSucess = (user) => ({
    type: "Login_Sucess",
    payload: user,
});
export const LoginFailure = () => ({
    type: "Login_Failure",
});

export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
});

export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
});