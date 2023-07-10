import "../home/Home.css"
import { useContext, useEffect } from "react"
import { Header } from "src/frontend/component/Header";
import { AuthContext } from "src/frontend/context/AuthContext";
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext";
import { Post } from "src/frontend/pages/post/Post";

import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router";

export const Bookmarks = () => {
    const { bookmarks, homeFeed, users, allBookMarks } = useContext(PostContext);
    const { userToken } = useContext(AuthContext)
    const { userState: { user } } = useContext(UserContext)

    const navigate = useNavigate()

    const userBookMarks = homeFeed.filter(({ _id }) => bookmarks.includes(_id))


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
    const userId = (username) => {
        return users?.find((userFollowing) => userFollowing.username === username)._id
    }

    useEffect(() => {
        allBookMarks(userToken)
    }, [])

    return (
        <>


            <div className="bookmark_section" >
                <div className="feed_header">
                    <div className="feed_header_special">
                        <AiOutlineArrowLeft className="left-arrow" onClick={() => navigate(-1)} />
                        <h2>Bookmarks</h2>
                    </div>

                </div>
                {userBookMarks?.map((post) => {
                    const { username } = post;



                    const avatarUrl = getAvatarUrl(username)
                    const isUserFollowed = isFollowingUser(username);
                    const isCurrentUser = username === user?.username;
                    const isUserId = userId(username)
                    return (
                        <Post key={post?._id} post={post} isCurrentUser={isCurrentUser} isUserFollowed={isUserFollowed} avatarUrl={avatarUrl} isUserId={isUserId} bookmark />

                    )
                })}
            </div>
        </>
    )
}