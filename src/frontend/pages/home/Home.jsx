import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { Header } from "src/frontend/component/Header"
import { PostContext } from "src/frontend/context/PostContext"

import "./Home.css"
import "../Profile/Profile.css"
import { AuthContext } from "src/frontend/context/AuthContext"
import { Users } from "src/frontend/pages/users/Users"
import { CreatePost } from "src/frontend/pages/createpost/CreatePost"
import { UserContext } from "src/frontend/context/UserContext"
import { EditPost } from "src/frontend/pages/editpost/EditPost"
import { Footer } from "src/frontend/pages/footer/Footer"
import { isPostLiked } from "src/frontend/pages/isPostliked/isPostLiked"
import { toast } from "react-toastify"

import { BsFillBookmarkFill } from 'react-icons/bs'
import { GoBookmarkSlashFill } from "react-icons/go"
import { Post } from "src/frontend/pages/post/Post"
import { Search } from "src/frontend/pages/search/Search"
import { PostLoader } from "src/frontend/component/postLoader/PostLoader"
import { SearchUser } from "src/frontend/component/SearchUser"



export const Home = () => {
    const { homeFeed,
        handleSortByDate, sortBy, dispatch, isPosting } = useContext(PostContext)

    const { unfollowHandler, userState: { user }, comment, handleCommentInput, postCommentHandler, getCommentHandler, showSearchModal } = useContext(UserContext)

    const getAvatarUrl = (username) => {
        const following = user?.following?.find((userFollowing) => userFollowing?.username === username)
        return following?.avatarUrl || user?.avatarUrl;
    }

    const isFollowingUser = (username) => {
        return user?.following?.some((userFollowing) => userFollowing?.username === username);
    }

    const reversedArray = [...homeFeed]?.reverse()

    const sortedPost = sortBy === "latest" ? [...homeFeed].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) : [...homeFeed].sort((a, b) => b.likes.likeCount - a.likes.likeCount)



    return (
        <>

            {/* mid section */}


            {/* <div className="home_modal"> */}


            <section className="home_mid_section" >

                <div className="feed_header">
                    <h2>Home</h2>
                    <div className="home_header_search" >
                        <Search />
                    </div>

                    <div className="showSearchedUsers" >
                        {showSearchModal && (
                            <SearchUser />
                        )}
                    </div>


                </div>
                <CreatePost />

                <div className="home_rightSide_btns" >
                    <button
                        style={{ fontWeight: sortBy === "trending" ? "700" : "500" }}
                        value="likes"
                        onClick={() => dispatch({ type: "SORT_BY", payload: "trending" })}
                    >
                        Trending
                    </button>


                    <button
                        style={{ fontWeight: sortBy === "latest" ? "700" : "500" }} value="date"
                        onClick={() => dispatch({ type: "SORT_BY", payload: "latest" })}
                    >
                        Latest
                    </button>
                </div>

                {!isPosting ? <div>

                    {sortedPost?.map(post => {
                        const { username } = post;

                        const isCurrentUser = username === user?.username;
                        const isUserFollowed = isFollowingUser(username);
                        const avatarUrl = getAvatarUrl(username);



                        if (isCurrentUser || isUserFollowed) {
                            return (

                                <Post key={post?._id} post={post} isCurrentUser={isCurrentUser} isUserFollowed={isUserFollowed} avatarUrl={avatarUrl} />

                            )
                        } else {
                            return null
                        }
                    }
                    )}

                </div> : <div> <PostLoader /> </div>
                }
            </section>
            {/* </div> */}


        </>
    )
}