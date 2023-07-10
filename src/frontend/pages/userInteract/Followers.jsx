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
                {/* <div className="feed_header_HeaderText">
                    <AiOutlineArrowLeft className="left-arrow" onClick={() => navigate(-1)} />
                    <div>
                        <h2>{user?.firstName} {user?.lastName}</h2>
                        <p className="following_header_username" >@{user?.username}</p>
                    </div>

                </div> */}

                {/* <div className="following_user_special" >
                    <NavLink style={getActiveStyle} to="/profile/following" className="p">Following</NavLink>
                    <NavLink style={getActiveStyle} to="/profile/followers" className="p">Followers</NavLink>
                </div> */}

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