import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Header } from "src/frontend/component/Header"
import { AuthContext } from "src/frontend/context/AuthContext"

export const Signup = () => {
    const { signupInput, signupHandler, handleSignupInput, handleCreateAccount, passwordMatch } = useContext(AuthContext)



    return (
        <>

            <form onSubmit={signupHandler} >
                <div className="signup-card" >

                    <label htmlFor="firstName" >Enter First Name</label>
                    <input type="text" placeholder="Enter first name" name="firstName" value={signupInput?.firstName} onChange={handleSignupInput} />

                    <label>Enter last name</label>
                    <input type="text" placeholder="Enter last name" name="lastName" value={signupInput?.lastName} onChange={handleSignupInput} />

                    <label>Enter Username </label>
                    <input type="text" placeholder="Enter username Here" name="username" value={signupInput?.username} onChange={handleSignupInput} />

                    <label> Enter Password</label>
                    <input type="password" placeholder="Enter password" name="password" value={signupInput?.password} onChange={handleSignupInput} />

                    <lable>Confirm Password</lable>
                    <input type="password" placeholder="Confirm password" name="confirmPassword" value={signupInput?.confirmPassword} onChange={handleSignupInput} />
                    {passwordMatch ? "" : <p> Passwords Do Not Match </p>}
                    <button onClick={handleCreateAccount} >Create Account</button>

                    <p>Already have an account ? <NavLink to="/login" >Login</NavLink>  </p>


                </div>


            </form >
        </>
    )
}