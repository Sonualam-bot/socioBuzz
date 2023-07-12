import { useContext } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"
import { UserContext } from "src/frontend/context/UserContext"
import { BiMessageAlt } from "react-icons/bi"

export const Logout = () => {
    const { logoutHandler } = useContext(AuthContext)
    const { userState: { user } } = useContext(UserContext)
    return (
        <>
            <div className="user_logout_card">
                <button onClick={logoutHandler}>Log out @{user?.username}</button>
                {/* <div></div> */}
            </div>

        </>
    )
}