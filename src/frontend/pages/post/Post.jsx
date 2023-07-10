import "./Post.css"
import "../userInteract/Followings.css"
import "../editpost/EditPost.css"
import { useContext, useState } from "react"
import { AuthContext } from "src/frontend/context/AuthContext";
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext";

import { GoBookmark } from 'react-icons/go'
import { GoBookmarkSlash } from "react-icons/go"
import { AiOutlineShareAlt, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

import { isPostLiked } from "src/frontend/pages/isPostliked/isPostLiked";
import { getUserDetails, getUserDetailsForExplore } from "src/backend/utils/postUtils";
import { EditDelete } from "src/frontend/pages/post/EditDelete";
import { Link } from "react-router-dom";
import { EditPost } from "src/frontend/pages/editpost/EditPost";

export const Post = ({ avatarUrl, post, isCurrentUser, isUserFollowed, explore, bookmark, singleUserProfile, singlePost }) => {
    const { _id, content, contentUrl, likes, username, comments, createdAt } = post;




    const { homeFeed,
        users,
        addPostToBookmark,
        bookmarks,
        addPostToUserLikes,
        removePostFromBookmark,
        removePostFromUserLikes,
        singlePostById, deleteUserPost,
        editButtonHandler,
        showEditdialog,
        setShowEditDialog,
        handleSortByDate,
        editPostId,
        updatedPost,
        setUpdatedPost
    } = useContext(PostContext)
    const { userToken } = useContext(AuthContext)
    const { unfollowHandler, followHandler, userState: { user }, comment, handleCommentInput, postCommentHandler, getCommentHandler, userProfileHandler } = useContext(UserContext)

    const [showEditAction, setShowEditAction] = useState(false)

    const userDetails =
        explore || bookmark || singleUserProfile || singlePost
            ? getUserDetailsForExplore(users, username)
            : getUserDetails(user, username);



    function formatDate(date) {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return date ? new Date(date).toLocaleDateString(undefined, options) : "";
    }



    return (
        <>
            <div className="post" key={_id} >
                <div className="post_avatar"  >

                    <img src={avatarUrl} alt="avatar" />
                </div>

                <div className="post_body"  >
                    <div className="post_header">
                        <div className="post_headerText" >
                            <div className="post_createdAt" >
                                {user?.username !== username && <Link className="Link" to="/userProfile">
                                    <h3 className="post_headerUsername"
                                        onClick={() => userProfileHandler(userDetails?._id)}
                                    >
                                        {userDetails?.firstName} {userDetails?.lastName}
                                        <span className="post_headerSpecial">@{username}</span>
                                    </h3>
                                </Link>}


                                {user?.username === username && <Link className="Link" to="/profile">
                                    <h3 className="post_headerUsername"
                                    // onClick={() => userProfileHandler(userDetails?._id)}
                                    >
                                        {userDetails?.firstName} {userDetails?.lastName}
                                        <span className="post_headerSpecial">@{username}</span>
                                    </h3>
                                </Link>}


                                <span>{formatDate(createdAt)} </span>
                            </div>
                            <div >
                                {
                                    isCurrentUser ?
                                        <div className="editDeleteModal">
                                            <HiOutlineDotsHorizontal onClick={() => { setShowEditAction(!showEditAction) }} />
                                            {showEditAction && <EditDelete deleteUserPost={deleteUserPost} _id={_id} userToken={userToken} content={content} contentUrl={contentUrl} post={post} />}
                                        </div>
                                        :
                                        <div  >
                                            {isUserFollowed ? (
                                                <button className="user_follow_unfollow_btns" onClick={() => unfollowHandler(userDetails?._id, userToken)}>Unfollow</button>
                                            ) : (
                                                <button className="user_follow_unfollow_btns" onClick={() => followHandler(userDetails?._id, userToken)}>Follow</button>
                                            )}
                                        </div>

                                }

                                <div>
                                    {showEditdialog &&
                                        <div>

                                            <div className="newPost-wrapper" onClick={() => {

                                                setShowEditDialog(false)
                                                setShowEditAction(false)
                                            }}></div>

                                            <div className="newPost-container">

                                                <EditPost />
                                            </div>
                                        </div>

                                    }
                                </div>



                            </div>
                        </div>
                        <div className="post_headerDescription" onClick={() => singlePostById(_id)}>
                            <p>{content}</p>
                        </div>
                    </div>
                    <img src={contentUrl} alt="" />

                    <div className="post_footer" >
                        <span>
                            {bookmarks?.includes(_id) ? <GoBookmarkSlash onClick={() => removePostFromBookmark(_id, userToken)} /> : <GoBookmark onClick={() => addPostToBookmark(_id, userToken)} />}
                        </span>

                        <span>
                            {
                                <span
                                    className="likeCount"
                                    onClick={() => {

                                        if (!isPostLiked(likes, user)) {
                                            addPostToUserLikes(_id, userToken)

                                        } else {
                                            removePostFromUserLikes(_id, userToken)
                                        }

                                    }}  >

                                    {isPostLiked(likes, user) ? <AiFillHeart /> : <AiOutlineHeart />}
                                </span>
                            }{likes?.likeCount}
                        </span>
                        <span>
                            <AiOutlineShareAlt />
                        </span>
                    </div>

                </div>




            </div>
        </>
    )
}