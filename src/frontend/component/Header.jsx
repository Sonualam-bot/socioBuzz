import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "src/frontend/context/AuthContext"
import { PostContext } from "src/frontend/context/PostContext"

export const Header = () => {
    const { userToken } = useContext(AuthContext)
    const { searchByUserName } = useContext(PostContext)
    return (
        <>
            <div className="navlink-container" >
                <h3> SocioBuzz </h3>
                <div className="navbar_input" >
                    <input type="text" placeholder="search" onChange={(e) => searchByUserName(e.target.value)} />
                </div>
                <div>
                    <NavLink to="/" > Home </NavLink>
                    {/* <NavLink to="/profile" > Profile </NavLink> */}
                </div>
            </div>
        </>
    )
}