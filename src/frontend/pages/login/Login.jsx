import { NavLink } from "react-router-dom"
import { Header } from "src/frontend/component/Header"
import "./Login.css"
import { useContext } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"
import { Toaster } from "react-hot-toast"


export const Login = () => {
    const { loginHandler, loginInput, setLoginInput, isLoggedIn } = useContext(AuthContext)

    const guestLogin = () => {
        setLoginInput({
            username: "adarshbalika",
            password: "adarshBalika123"
        })
    }

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value })
    }



    return (
        <>

            <Toaster
                position="bottom-right"
                reverseOrder={false}
                containerStyle={{
                    bottom: "3rem",
                    right: "3rem",
                }}
                toastOptions={{
                    duration: 3000,
                }}
            />


            <div className="login" >
                <div className="card" >
                    <div className="left" >
                        <h1>Socio Wave</h1>
                        <p>
                            Connecting minds, shaping conversations, and embracing the power of brevity. Welcome to our vibrant social sphere!
                        </p>
                        <span>Don't have an account?</span>
                        <NavLink className="NavLink" to="/signup">Signup</NavLink>
                    </div>
                    <div className="right" >
                        <h1>Login</h1>
                        <form onSubmit={loginHandler}>
                            <input type="text" name="username" value={loginInput.username} placeholder="Username" onChange={handleLoginInput} />
                            <input type="password" name="password" value={loginInput.password} placeholder="Password" onChange={handleLoginInput} />
                            <button type="submit" >Login</button>
                            <button onClick={guestLogin} >Guest Login</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}