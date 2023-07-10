import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast"

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

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const userToken = localStorage.getItem("token")


    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/auth/signup`, signupInput)

            // localStorage.setItem("token", response.data.encodedToken)
            localStorage.setItem("userName", JSON.stringify(signupInput.username))
            localStorage.setItem("user", JSON.stringify(response.data.createdUser))
            toast.success("You have successfully signed up")
            navigate("/login")
            setLoginInput({
                username: signupInput.username,
                password: signupInput.password
            })

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
        if (!signupInput || !signupInput.firstName || !signupInput.lastName || !signupInput.username || !signupInput.password || !signupInput.confirmPassword) {
            toast.error("Fill in the details properly");
        } else if (signupInput.password !== signupInput.confirmPassword) {
            // setPasswordMatch(false);
            toast.error("Passwords do not match");
        } else {
            // setPasswordMatch(true);
            signupHandler(e);
            toast.success("Account created Successfully")
        }
    };


    const loginHandler = async (e) => {
        e.preventDefault()

        try {
            setIsLoggedIn(true);
            const response = await axios.post(`/api/auth/login`, loginInput)

            localStorage.setItem("user", JSON.stringify(response.data.foundUser))
            setTimeout(() => {
                localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
                localStorage.setItem("userName", JSON.stringify(loginInput?.username))
                navigate("/");
            }, 1500);

            setLoginInput({
                username: "",
                password: ""
            })
            toast.success("Logged in Successfully")
            setIsLoggedIn(false);


        } catch (e) {
            console.log("Error", e);
            toast.error("Something went wrong")
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
        setLoginInput,
        isLoggedIn


    }

    return (
        <>
            <AuthContext.Provider value={value}  >
                {children}
            </AuthContext.Provider>
        </>
    )
}