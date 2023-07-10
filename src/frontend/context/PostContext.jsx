import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "src/frontend/context/AuthContext"
import { postreducer, initialData } from "src/reducer/postreducer"


export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(postreducer, initialData)
    const navigate = useNavigate()


    const getAllPosts = async () => {
        try {
            const response = await axios.get(`/api/posts`)
            dispatch({
                type: "ALL_POSTS",
                payload: {
                    posts: response.data.posts
                }
            })

        } catch (e) {
            console.log(e)
        }
    }

    const addPostToBookmark = async (postId, token) => {
        try {
            const response = await axios.post(`/api/users/bookmark/${postId}`, {}, {
                headers: {
                    authorization: token
                }
            })
            dispatch({
                type: "ADD_TO_BOOKMARK",
                payload: {
                    bookmarks: response.data.bookmarks
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const removePostFromBookmark = async (postId, token) => {
        try {
            const response = await axios.post(`/api/users/remove-bookmark/${postId}`, {}, {
                headers: {
                    authorization: token
                }
            })
            dispatch({
                type: "ADD_TO_BOOKMARK",
                payload: {
                    bookmarks: response.data.bookmarks
                }
            })

        } catch (e) {
            console.log(e)
        }
    }

    const addPostToUserLikes = async (postId, token) => {
        try {
            const response = await axios.post(`/api/posts/like/${postId}`, {}, {
                headers: {
                    authorization: token
                }
            })
            dispatch({
                type: "ALL_POSTS",
                payload: {
                    posts: response.data.posts
                }
            })
        } catch (e) {
            console.log(e)
        }
    }


    const removePostFromUserLikes = async (postId, token) => {
        try {
            const response = await axios.post(`/api/posts/dislike/${postId}`, {}, {
                headers: {
                    authorization: token
                }
            })

            dispatch({
                type: "ALL_POSTS",
                payload: {
                    posts: response.data.posts
                }
            })

        } catch (e) {
            console.log(e)
        }

    }

    const createPostHanlder = async (post, token) => {
        try {
            const response = await axios.post(`/api/posts/`, {
                postData: post
            }, {
                headers: {
                    authorization: token
                }
            })

            console.log("createdPost", response.data)

            dispatch({
                type: "CREATE_POST",
                payload: {
                    posts: response.data.posts
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const singlePostById = async (postId) => {
        try {
            const response = await axios.get(`/api/posts/${postId}`)

            dispatch({
                type: "SINGLE_POST",
                payload: {
                    singlePost: response.data.post
                }
            })
            navigate("/singlepage")

        } catch (e) {
            console.log(e)
        }
    }

    const searchByUserName = async (username) => {
        try {
            const response = await axios.get(`/api/posts/user/${username}`)
            dispatch({
                type: "SEARCH_BY_USERNAME",
                payload: {
                    searchUser: response.data.posts
                }
            })
        } catch (e) {
            console.log(e)
        }
    }


    const deleteUserPost = async (postId, token) => {
        try {
            const response = await axios.delete(`/api/posts/${postId}`, {
                headers: {
                    authorization: token
                }
            })

            dispatch({
                type: "DELETE_USER_POST",
                payload: {
                    delete: response.data.posts
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const editUserPost = async (postId, postData, token) => {
        try {
            const response = await axios.post(`/api/posts/edit/${postId}`, {
                postData
            }, {
                headers: {
                    authorization: token
                }
            })

            dispatch({
                type: "EDIT_POST",
                payload: {
                    edit: response.data.posts
                }
            })

        } catch (e) {
            console.log(e)
        }
    }



    useEffect(() => {
        getAllPosts()
    }, [])

    const value = {
        homeFeed: state.posts,
        bookmarks: state.bookmarks,
        users: state.users,
        userFollows: state.userFollows,
        followings: state.followings,
        content: state.content,
        singlePost: state.singlePost,
        userByUsername: state.searchByUsername,
        dispatch,
        addPostToBookmark,
        addPostToUserLikes,
        removePostFromBookmark,
        removePostFromUserLikes,
        createPostHanlder,
        singlePostById,
        searchByUserName,
        deleteUserPost,
        editUserPost
    }


    return (
        <>
            <PostContext.Provider value={value} >
                {children}
            </PostContext.Provider>

        </>
    )
}