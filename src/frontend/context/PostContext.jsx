import axios from "axios"
import { createContext, useState, useEffect, useReducer, useContext } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import { AuthContext } from "src/frontend/context/AuthContext"
import { postreducer, initialData } from "src/reducer/postreducer"


export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(postreducer, initialData)
    const navigate = useNavigate()

    const [input, setInput] = useState({
        content: "",
        contentUrl: "",
    })

    const [updatedPost, setUpdatedPost] = useState({ content: "", contentUrl: "" })
    const [showEditdialog, setShowEditDialog] = useState(false)
    const [editPostId, setEditPostId] = useState()
    const { userToken } = useContext(AuthContext)

    const [show, setShow] = useState(false)

    const [isPosting, setIsPosting] = useState(false)

    const [showEditAction, setShowEditAction] = useState(false)




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
            toast.success("Added To Bookmark")
        } catch (e) {
            console.log(e)
        }
    }

    const allBookMarks = async (token) => {
        try {
            const response = await axios.get(`/api/users/bookmark/`, {
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
            toast.success("Removed From Bookmark")

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
            toast.success("Post Liked")

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
            toast.success("Post Disliked")
        } catch (e) {
            console.log(e)
        }

    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
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

            setInput({ content: "" })

            dispatch({
                type: "CREATE_POST",
                payload: {
                    posts: response.data.posts
                }
            })
            toast.success("New Post Created Successfully")
            setIsPosting(false)
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
            toast.success("Post Deleted")
        } catch (e) {
            console.log(e)
        }
    }

    const editUserPost = async (postId, updatedPost, token) => {
        try {
            const response = await axios.post(`/api/posts/edit/${postId}`, {
                postData: updatedPost
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

            setShowEditDialog(false)
            setEditPostId(null)

        } catch (e) {
            console.log(e)
        }
    }

    const editButtonHandler = (_id, updatedPost) => {
        setUpdatedPost({ ...updatedPost })
        setShowEditDialog(true)
        setEditPostId(_id)
    }


    useEffect(() => {
        getAllPosts()

    }, [])

    const value = {
        homeFeed: state.posts,
        bookmarks: state.bookmarks,
        users: state.users,
        userFollows: state.userFollows,
        sortBy: state.sortBy,
        content: state.content,
        singlePost: state.singlePost,
        userByUsername: state.searchByUsername,
        individualUserData: state.individualUserData,
        loggedInUser: state.loggedInUser,
        dispatch,
        addPostToBookmark,
        addPostToUserLikes,
        removePostFromBookmark,
        removePostFromUserLikes,
        createPostHanlder,
        input,
        setInput,
        handleInput,
        singlePostById,
        searchByUserName,
        deleteUserPost,
        editUserPost,
        updatedPost,
        setUpdatedPost,
        showEditdialog,
        setShowEditDialog,
        editPostId,
        setEditPostId,
        editButtonHandler,
        allBookMarks,
        show,
        setShow,
        isPosting,
        setIsPosting,
        showEditAction,
        setShowEditAction

    }


    return (
        <>
            <PostContext.Provider value={value} >
                {children}
            </PostContext.Provider>

        </>
    )
}