import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

    const [signupInput, setSignupInput] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
    })
    const [passwordMatch, setPasswordMatch] = useState(true)

    const [loginInput, setLoginInput] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    const userToken = localStorage.getItem("token")


    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/auth/signup`, signupInput)

            if (response.status === 201) {
                localStorage.setItem("token", response.data.encodedToken)
            }

            toast.success("You have successfully signed up")
            navigate("/login")
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
        }
    }

    const loginHandler = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`/api/auth/login`, loginInput)
            if (response.status === 200) {
                localStorage.setItem("token", JSON.stringify(response.data.encodedToken))
                navigate("/")
            }

            toast.success("Log in Successfull")
        } catch (e) {
            console.log(e)
        }
    }

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value })
    }

    const guestLogin = () => {
        setLoginInput({
            username: "adarshbalika",
            password: "adarshBalika123"
        })
    }

    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("isLoggedIn");
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
        guestLogin,
        logoutHandler,
        handleLoginInput,
        passwordMatch,
        userToken


    }

    return (
        <>
            <AuthContext.Provider value={value}  >
                {children}
            </AuthContext.Provider>
        </>
    )
}