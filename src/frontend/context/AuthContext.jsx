import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

    const [signupInput, setSignupInput] = useState({
        avatarUrl:
            "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-400-205577532.jpg",
        bannerUrl:
            "https://i.imgur.com/V68oGpt.jpeg",
        website: "LaxmiCheatFund.com",
        bio: "Hey! I'm BloomVerse user",
    })
    const [passwordMatch, setPasswordMatch] = useState(true)

    const [loginInput, setLoginInput] = useState({
        username: "",
        password: ""
    })

    // const [loginLoader, setLoginLoader] = useState(false)

    const navigate = useNavigate();

    const userToken = localStorage.getItem("token")


    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/auth/signup`, signupInput)

            localStorage.setItem("token", response.data.encodedToken)
            localStorage.setItem("userName", JSON.stringify(signupInput.username))
            localStorage.setItem("user", JSON.stringify(response.data.createdUser))
            toast.success("You have successfully signed up")
            setLoginInput({
                username: signupInput.username,
                password: signupInput.password
            })
            loginHandler()
            navigate("/")
        } catch (e) {
            console.log(e)
        }
    }

    const handleSignupInput = (e) => {
        const { name, value } = e.target;
        setSignupInput({ ...signupInput, [name]: value })
    }

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (signupInput.firstName.trim() === "" || signupInput.lastName.trim() === "" || signupInput.username.trim() === "" || signupInput.password.trim() === "" || signupInput.confirmPassword.trim() === "") {
            toast.error("Fill In the details properly")
        } else if (signupInput.password !== signupInput.confirmPassword) {
            setPasswordMatch(false)
            toast.error("Passwords Do Not Match")
        } else {
            setPasswordMatch(true)
            signupHandler(e);
            // setLoginLoader(false)
        }
    }

    const loginHandler = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`/api/auth/login`, loginInput)

            localStorage.setItem("token", JSON.stringify(response.data.encodedToken))
            localStorage.setItem("user", JSON.stringify(response.data.foundUser))
            navigate("/")

            localStorage.setItem("userName", JSON.stringify(loginInput?.username))
            setLoginInput({
                username: "",
                password: ""
            })

            toast.success("Log in Successfull")
        } catch (e) {
            console.log(e)
        }
    }




    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user")
        navigate("/login")
        setLoginInput({
            email: "",
            password: ""
        })
    }


    const value = {
        signupInput,
        signupHandler,
        handleSignupInput,
        handleCreateAccount,
        loginInput,
        loginHandler,
        logoutHandler,
        passwordMatch,
        userToken,
        setLoginInput


    }

    return (
        <>
            <AuthContext.Provider value={value}  >
                {children}
            </AuthContext.Provider>
        </>
    )
}