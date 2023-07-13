import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "src/frontend/context/UserContext"
import { FollowCard } from "src/frontend/pages/userInteract/FollowCard"

import { AiOutlineArrowLeft } from "react-icons/ai"

export const Followers = ({ userProfile }) => {
    // const { userState: { user, getUser } } = useContext(UserContext)
    // const { username } = user;

    const navigate = useNavigate()

    // const filteredUserFollowings = username ? user?.followers : getUser?.followers;

    const getActiveStyle = ({ isActive }) => ({
        margin: "1rem 0",
        fontWeight: isActive ? "600" : "200",
        padding: isActive ? "1rem" : "0.5rem",
        color: isActive ? "var(--vacay-color)" : ""
    });
    return (
        <>
            <div className="feed_header_special">


            </div>
            {userProfile?.followers.length < 1 ?
                <div> <h3>No Followers To Display</h3> </div> :
                userProfile?.followers?.map((followers) => {
                    return (

                        <FollowCard followed={followers} userProfile={userProfile} follower />
                    )
                })}
        </>
    )
}