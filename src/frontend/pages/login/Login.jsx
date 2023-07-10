import { NavLink } from "react-router-dom"
import { Header } from "src/frontend/component/Header"
import "./Form.css"
import { useContext } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"


export const Login = () => {
    const { loginHandler, loginInput, handleLoginInput, guestLogin } = useContext(AuthContext)
    return (
        <>
            <Header />

            <form className="login-form" onSubmit={loginHandler} >
                <div className="login-card">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" value={loginInput.username} placeholder="Enter Email" onChange={handleLoginInput} />

                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" value={loginInput.password} placeholder="Enter Password here" onChange={handleLoginInput} />

                    <button type="submit" >Log In</button>
                    <button onClick={guestLogin} >Login As A Guest</button>
                    <p>Don't  have an account? <NavLink to="/signup">Sign up</NavLink>  </p>
                </div>

            </form>


        </>
    )
}