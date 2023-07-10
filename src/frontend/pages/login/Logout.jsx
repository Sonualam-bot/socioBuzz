import { useContext } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"

export const Logout = () => {
    const { logoutHandler } = useContext(AuthContext)
    return (
        <>
            <button onClick={logoutHandler} >Log Out</button>
        </>
    )
}