import { useContext, useEffect } from "react"
import { Header } from "src/frontend/component/Header"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"
import { Post } from "src/frontend/pages/post/Post"

import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router"

export const SinglePost = () => {
    const { singlePost, singlePostById, homeFeed } = useContext(PostContext)
    const { userState: { user } } = useContext(UserContext);

    const { _id, content, contentUrl, likes, username, comments, createdAt } = singlePost;
    const navigate = useNavigate()


    const getAvatarUrl = (username) => {
        const following = user?.following?.find((userFollowing) => userFollowing?.username === username)
        return following?.avatarUrl || user?.avatarUrl;
    }

    const isFollowingUser = (username) => {
        return user?.following?.some((userFollowing) => userFollowing?.username === username);
    }


    const avatarUrl = getAvatarUrl(username)
    const isUserFollowed = isFollowingUser(username);
    const isCurrentUser = username === user?.username;






    useEffect(() => {
        singlePostById(singlePost?._id)
    }, [homeFeed])

    return (
        <>

            <div className="feed_header" key={singlePost?._id}>
                <AiOutlineArrowLeft className="left-arrow" onClick={() => navigate(-1)} />
                <h2>{singlePost?.username} {singlePost?.lastName} </h2>
            </div>
            <Post avatarUrl={avatarUrl} post={singlePost} isCurrentUser={isCurrentUser} isUserFollowed={isUserFollowed} singlePost />
        </>
    )
}