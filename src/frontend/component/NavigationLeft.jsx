import "./Navigation.css"
import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "src/frontend/context/AuthContext"
import { UserContext } from "src/frontend/context/UserContext"

import { AiFillHome, AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai"
import { MdExplore } from 'react-icons/md'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { TbLogout2 } from "react-icons/tb"
import { CgProfile } from "react-icons/cg"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { CreatePost } from "src/frontend/pages/createpost/CreatePost"
import { PostContext } from "src/frontend/context/PostContext"
import { Logout } from "src/frontend/pages/login/Logout"
import { ThemeSwitcher } from "src/frontend/pages/theme/ThemeSwitcher"

export const NavigationLeft = () => {
    const { userToken } = useContext(AuthContext)
    const { userState: { user } } = useContext(UserContext)
    const { input, createPostHanlder, show, setShow } = useContext(PostContext)

    const [showLogoutCard, setShowLogoutCard] = useState(false)
    // const handleShow = () => SetShow(true)

    return (
        <>
            <div className="home_navigation"  >


                <div className="sidebar" >
                    <NavLink className="sidebarOptions active hide-text" to="/" >
                        <AiFillHome />
                        <span>Home</span>
                    </NavLink>


                    <NavLink className="sidebarOptions hide-text" to="/explore" >
                        <MdExplore />
                        <span>Explore</span>
                    </NavLink>



                    <NavLink className="sidebarOptions hide-text" to="/bookmarks" >
                        <BsFillBookmarksFill />
                        <span>Bookmarks</span>
                    </NavLink>

                    <NavLink className="sidebarOptions hide-text" to="/profile" >
                        <CgProfile />
                        <span>Profile</span>
                    </NavLink>


                    <button className="sidebarOptions hide-text" onClick={() => setShow(!show)} > <AiFillPlusCircle />
                        <span>New Post</span>
                    </button>
                </div>


                {showLogoutCard && <Logout />}
                <div className="loggedUser_details" onClick={() => setShowLogoutCard(!showLogoutCard)} >
                    <img src={user?.avatarUrl} alt="avatar" />
                    <div className="loggedUser_header">
                        <p>{user?.firstName} {user?.lastName}</p>
                        <p>@{user?.username}</p>
                    </div>
                    <BiDotsHorizontalRounded />
                </div>
            </div>




        </>
    )
}