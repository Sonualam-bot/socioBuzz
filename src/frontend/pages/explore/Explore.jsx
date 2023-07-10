import { AuthContext } from "src/frontend/context/AuthContext"
import "./Explore.css"
import "../home/Home.css"
import { useContext } from "react"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"
import { isPostLiked } from "src/frontend/pages/isPostliked/isPostLiked"
import { Post } from "src/frontend/pages/post/Post"

import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router"

export const Explore = () => {
    const { homeFeed, users } = useContext(PostContext)

    const { userState: { user } } = useContext(UserContext)

    const navigate = useNavigate()

    const getAvatarUrl = (username) => {
        const following = users?.find((userFollowing) => userFollowing?.username === username)
        console.log("followingggg", following)
        return following?.avatarUrl;
    }

    //this will go in post page
    const isFollowingUser = (username) => {
        return user?.following?.some((userFollowing) => userFollowing?.username === username);
    }

    //this will go in post page
    // const userId = (username) => {
    //     return users?.find((userFollowing) => userFollowing.username === username)._id
    // }

    return (
        <>
            <section className="explore_section" >
                <div className="feed_header">
                    <div className="feed_header_special">
                        <AiOutlineArrowLeft className="left-arrow" onClick={() => navigate(-1)} />
                        <h2>Explore</h2>
                    </div>

                </div>
                {homeFeed?.map(post => {
                    const { username } = post;

                    const avatarUrl = getAvatarUrl(username)
                    const isUserFollowed = isFollowingUser(username);
                    const isCurrentUser = username === user?.username;


                    return (
                        username !== user?.username ?
                            <Post key={post?._id} post={post} isCurrentUser={isCurrentUser} isUserFollowed={isUserFollowed} avatarUrl={avatarUrl} explore />

                            : ""
                    )

                }
                )}
            </section>
        </>
    )
}