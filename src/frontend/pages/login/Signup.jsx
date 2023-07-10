import { useContext } from "react"
import { NavLink } from "react-router-dom"
import './Signup.css'
import { AuthContext } from "src/frontend/context/AuthContext"
import { Toaster } from "react-hot-toast"

export const Signup = () => {
    const { signupInput, signupHandler, handleSignupInput, handleCreateAccount, passwordMatch } = useContext(AuthContext)



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

            <div className="login2" >
                <div className="card2" >
                    <div className="left2" >
                        <h1>Socio Wave</h1>
                        <p>
                            Connecting minds, shaping conversations, and embracing the power of brevity. Welcome to our vibrant social sphere!
                        </p>
                        <span>Already have an account?</span>
                        <NavLink className="NavLink2" to="/login">Login</NavLink>
                    </div>
                    <div className="right2" >
                        <h1>Signup</h1>
                        <form onSubmit={signupHandler}>
                            <input type="text" placeholder="firstname" name="firstName" value={signupInput?.firstName} onChange={handleSignupInput} />
                            <input type="text" placeholder="lastname" name="lastName" value={signupInput?.lastName} onChange={handleSignupInput} />

                            <input type="text" placeholder="username" name="username" value={signupInput?.username} onChange={handleSignupInput} />

                            <input type="password" placeholder="Password" name="password" value={signupInput?.password} onChange={handleSignupInput} />

                            <input type="password" placeholder="Confirm password" name="confirmPassword" value={signupInput?.confirmPassword} onChange={handleSignupInput} />

                            {/* {passwordMatch ? "" : <p> Passwords Do Not Match </p>} */}

                            <button onClick={handleCreateAccount} >Create Account</button>

                        </form>
                    </div>
                </div>
            </div>







        </>
    )
}