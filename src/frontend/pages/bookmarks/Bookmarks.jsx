import { useContext } from "react"
import { Header } from "src/frontend/component/Header";
import { AuthContext } from "src/frontend/context/AuthContext";
import { PostContext } from "src/frontend/context/PostContext"

export const Bookmarks = () => {
    const { bookmarks, homeFeed, addPostToUserLikes, removePostFromBookmark } = useContext(PostContext);
    const { userToken } = useContext(AuthContext)

    const userBookMarks = homeFeed.filter(({ _id }) => bookmarks.includes(_id))
    // console.log("userBookMarks", userBookMarks)

    return (
        <>
            <Header />
            <p>This is bookmarks</p>
            {userBookMarks?.map((bookmark) => {
                const { _id, content, likes: { likeCount, likedBy, dislikedBy } } = bookmark
                return (
                    <li key={_id} >
                        <p> {content} </p>
                        <button onClick={() => removePostFromBookmark(_id, userToken)} >Remove From Bookmarks</button>
                        <button onClick={() => addPostToUserLikes(_id, userToken)} > Like {likeCount} </button>
                    </li>
                )
            })}
        </>
    )
}