import "./BottomNavigation.css"
import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
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

export const BottomNavigation = () => {
    const { userToken } = useContext(AuthContext)
    const { userState: { user } } = useContext(UserContext)
    const { input, createPostHanlder, show, setShow } = useContext(PostContext)

    const [showLogoutCard, setShowLogoutCard] = useState(false)
    // const handleShow = () => SetShow(true)

    const navigate = useNavigate()

    return (
        <>
            <div className="home_navigation1"  >


                <div className="sidebar1" >
                    <NavLink className="sidebarOptions1 active1 hide-text1" to="/" >
                        <AiFillHome />
                        <span>Home</span>
                    </NavLink>


                    <NavLink className="sidebarOptions1 hide-text1" to="/explore" >
                        <MdExplore />
                        <span>Explore</span>
                    </NavLink>

                    <button className="sidebarOptions1 hide-text1" onClick={() => setShow(!show)} > <AiFillPlusCircle />
                        <span>New Post</span>
                    </button>

                    <NavLink className="sidebarOptions1 hide-text1" to="/bookmarks" >
                        <BsFillBookmarksFill />
                        <span>Bookmarks</span>
                    </NavLink>


                    <div className="sidebarOptions1" onClick={() => navigate("/profile")}  >
                        <img src={user?.avatarUrl} alt="avatar" />

                    </div>



                </div>



            </div>




        </>
    )
}