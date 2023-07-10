import { useContext } from "react"
import { Header } from "src/frontend/component/Header"
import { PostContext } from "src/frontend/context/PostContext"

export const SinglePost = () => {
    const { singlePost } = useContext(PostContext)
    return (
        <>
            <Header />
            <h1>Single post</h1>
            {singlePost.content}
        </>
    )
}