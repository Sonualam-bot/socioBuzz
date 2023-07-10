import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { Header } from "src/frontend/component/Header"
import { PostContext } from "src/frontend/context/PostContext"

import "./Home.css"
import { AuthContext } from "src/frontend/context/AuthContext"
import { Users } from "src/frontend/pages/users/Users"




export const Home = () => {
    const { homeFeed, addPostToBookmark, bookmarks, addPostToUserLikes, removePostFromBookmark, removePostFromUserLikes, createPostHanlder, singlePostById, deleteUserPost, editUserPost } = useContext(PostContext)
    const { userToken } = useContext(AuthContext)


    const [input, setInput] = useState({
        content: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        console.log({ ...input, [name]: value })
        setInput({ ...input, [name]: value })
    }


    return (
        <>
            <Header />

            <div className="inputContainer" >
                <input type="text" placeholder="Create A post" name="content" value={input.content} onChange={handleInput} />
                <button onClick={() => createPostHanlder(input, userToken)} >Post</button>
            </div>



            <div className="home-container" >
                <div>
                    <NavLink to="/bookmarks" >BookMarks Arr</NavLink>
                </div>
                <div>
                    {homeFeed?.map((feed) => {
                        return (
                            <li style={{ listStyle: "none", width: "750px", margin: "2rem auto" }} >
                                <p onClick={() => singlePostById(feed._id)} >
                                    {feed.content}
                                </p>


                                {bookmarks?.includes(feed._id) ? <button onClick={() => removePostFromBookmark(feed._id, userToken)} >Remove From Bookmarks</button> : <button onClick={() => addPostToBookmark(feed._id, userToken)} > Bookmark </button>}

                                {feed?.likes?.likeCount >= 1 ? <button onClick={() => removePostFromUserLikes(feed._id, userToken)} >Dislike  </button> : <button onClick={() => addPostToUserLikes(feed._id, userToken)} >Like  </button>}{feed?.likes?.likeCount}


                                <button onClick={() => deleteUserPost(feed._id, userToken)} >Delete</button>
                                <button onClick={() => editUserPost(feed._id, userToken)}  >Edit</button>

                            </li>
                        )
                    })}
                </div>
            </div>
            <div className="users_list" >
                <Users />
            </div>

        </>
    )
}