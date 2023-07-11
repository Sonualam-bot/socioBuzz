import { NavLink, useNavigate, useParams } from "react-router-dom"
import "../home/Home.css"
import "./Followings.css"
import { useContext } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"
import { FollowCard } from "src/frontend/pages/userInteract/FollowCard"

import { AiOutlineArrowLeft } from "react-icons/ai"

export const Followings = ({ userProfile }) => {

    // const { userState: { user, getUser } } = useContext(UserContext)
    // const { username } = user;

    // console.log("following checking", user?.following)


    const navigate = useNavigate()

    const getActiveStyle = ({ isActive }) => ({
        margin: "1rem 0",
        fontWeight: isActive ? "600" : "200",
        padding: isActive ? 1 + "rem" : .5 + "rem",
        color: isActive ? "var(--vacay-color)" : ""
    });


    return (
        <>
            <div className="feed_header_special" >

            </div>
            {userProfile?.following?.length < 1 ? <div>
                <h3> You don't follow any user yet..! </h3>
            </div> :
                userProfile?.following?.map((followed) => {
                    return (

                        <FollowCard followed={followed} key={followed?._id} following />
                    )
                })}
        </>
    )
}