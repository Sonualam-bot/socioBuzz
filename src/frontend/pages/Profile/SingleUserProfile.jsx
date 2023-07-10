import { useContext, useState } from "react"
import "./Profile.css"
import { PostContext } from "src/frontend/context/PostContext"
import { Post } from "src/frontend/pages/post/Post"
import { AiOutlineLink } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "src/frontend/context/UserContext"

import { AiOutlineArrowLeft } from "react-icons/ai"
import { AuthContext } from "src/frontend/context/AuthContext"
import { Followings } from "src/frontend/pages/userInteract/Followings"
import { Followers } from "src/frontend/pages/userInteract/Followers"

export const SingleUserProfile = ({ userProfile, showEditModal, handleUserEditAction }) => {
    const { homeFeed } = useContext(PostContext)
    const { userProfileHandler, unfollowHandler, followHandler, loading, bannerLoader, userState: { user } } = useContext(UserContext)
    const { userToken } = useContext(AuthContext)

    const navigate = useNavigate()

    const [showFollowingCard, setShowFollowingCard] = useState(false)
    const [showFollowerCard, setShowFollowerCard] = useState(false)




    const userPosts = homeFeed?.filter(({ username }) => username === userProfile?.username)
    // console.log("userposts", userPosts)


    const getAvatarUrl = (username) => {
        const following = userProfile?.following?.find((userFollowing) => userFollowing?.username === username)
        return following?.avatarUrl || userProfile?.avatarUrl;
    }

    const isFollowingUser = (username) => {
        return userProfile?.following?.some((userFollowing) => userFollowing?.username === username);
    }


    const isUserFollowedByLoggedInUser = user?.following?.find((userData) => userData?._id === userProfile?._id)
    // console.log({ isUserFollowedByLoggedInUser })



    return (
        <>
            <section className="profile-section"  >
                <div className="feed_header" key={userProfile?._id}>
                    <div className="feed_header_special" >
                        <AiOutlineArrowLeft className="left-arrow" onClick={() => navigate(-1)} />
                        <h2>{userProfile?.firstName} {userProfile?.lastName} </h2>
                    </div>

                </div>
                <div className="profile-container">
                    <div className="profile_banner">
                        {bannerLoader ?
                            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjZmZ2VxMjI0ZnppMzA0YnhlcjZpNnkzZDIxeHJwa2Z4ZHM3NWR3MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/200w.gif" alt="gif" /> :
                            <img className="profile_banner" src={userProfile?.bannerUrl} alt="userProfile banner" />}
                    </div>

                    {loading ?
                        <img className="profile_picture" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjZmZ2VxMjI0ZnppMzA0YnhlcjZpNnkzZDIxeHJwa2Z4ZHM3NWR3MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/200w.gif" alt="gif" /> :
                        <img className="profile_picture" src={userProfile?.avatarUrl} alt="User Avatar" />}
                </div>




                {
                    (showEditModal || user?.username === userProfile?.username) ?
                        <button className="modal-btn" onClick={() => handleUserEditAction(userProfile)} >Edit profile</button>
                        :
                        <div>
                            {
                                isUserFollowedByLoggedInUser ?
                                    <button className="modal-btn" onClick={() => unfollowHandler(userProfile?._id, userToken)} >
                                        Unfollow
                                    </button>
                                    :
                                    <button className="modal-btn" onClick={() => followHandler(userProfile?._id, userToken)} >
                                        Follow
                                    </button>
                            }
                        </div>
                }


                <div className="profile-details" >
                    <p>
                        {userProfile?.firstName} {userProfile?.lastName}{" "}
                    </p>
                    <p>@{userProfile?.username}</p>
                    <p>{userProfile?.bio}</p>
                    <a href={userProfile?.website} target="_blank" > <AiOutlineLink /> {userProfile?.website}</a>

                </div>
                <div className="user_social" >
                    <p onClick={() => setShowFollowingCard(!showFollowingCard)} >

                        <span className="user_following_count" >
                            {userProfile?.following?.length}
                        </span>
                        <span className="user_following" >
                            Following
                        </span>


                    </p>
                    <p onClick={() => setShowFollowerCard(!showFollowerCard)} >

                        <span className="user_following_count">
                            {userProfile?.followers?.length}
                        </span>
                        <span className="user_following">
                            Followers
                        </span>

                    </p>
                </div>

                <div>
                    {showFollowerCard && (
                        <div className="followerCard_modal">
                            <div className="followerCard_content">
                                <span
                                    className="followerCard_closeBtn"
                                    onClick={() => setShowFollowerCard(false)}
                                >
                                    &times;
                                </span>
                                <Followers userProfile={userProfile} />
                            </div>
                        </div>
                    )}
                </div>

                <div >
                    {showFollowingCard && (
                        <div className="followerCard_modal">
                            <div className="followerCard_content">
                                <span
                                    className="followerCard_closeBtn"
                                    onClick={() => setShowFollowingCard(false)}
                                >
                                    &times;
                                </span>
                                <Followings userProfile={userProfile} />
                            </div>
                        </div>
                    )}
                </div>








                <div className="user_profile_postNall" >
                    {/* <p>posts</p>
                    <p>Likes</p>
                    <p>Media</p> */}
                </div>
                <div>
                    {userPosts?.map((post) => {
                        const { username } = post
                        const isCurrentUser = username === userProfile?.username;
                        const isUserFollowed = isFollowingUser(username);
                        const avatarUrl = getAvatarUrl(username)

                        return (
                            < Post key={post?._id} post={post} isCurrentUser={isCurrentUser} isUserFollowed={isUserFollowed} avatarUrl={avatarUrl} singleUserProfile />
                        )
                    }

                    )}
                </div>
            </section>

        </>
    )
}