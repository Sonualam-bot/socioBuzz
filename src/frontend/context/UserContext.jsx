import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "src/frontend/context/AuthContext";
import { PostContext } from "src/frontend/context/PostContext";
import { userInititalState, userReducer } from "src/reducer/userReducer";


export const UserContext = createContext();


export const UserContextProvider = ({ children }) => {
    const { dispatch, users } = useContext(PostContext)
    const { userToken } = useContext(AuthContext)

    // const userName = JSON.parse(localStorage.getItem("userName"));

    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    // console.log("users coming fROMMM userContext", loggedInUser)

    const [userState, userDispatch] = useReducer(userReducer, userInititalState);
    // console.log("consoling while following", userState?.user)

    const [comment, setComment] = useState({
        commentData: ""
    })

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)

    const [showSearchModal, setShowSearchModal] = useState(false)

    const [loading, setLoading] = useState(false)
    const [bannerLoader, setBannerLoader] = useState(false)


    const fetchUserAccounts = async () => {
        try {
            const response = await axios.get("/api/users")
            dispatch({
                type: "USER_ACCOUNTS",
                payload: {
                    user: response.data.users
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const followHandler = async (followUserId, token) => {
        try {
            const response = await axios.post(`/api/users/follow/${followUserId}`, {}, {
                headers: {
                    authorization: token
                }
            })
            userDispatch({
                type: "FOLLOW",
                payload: {
                    follows: response.data.user
                }
            })
            console.log("following", response.data)
        } catch (e) {
            console.log(e)
        }
    }


    const unfollowHandler = async (followUserId, token) => {
        try {
            const response = await axios.post(`/api/users/unfollow/${followUserId}`, {}, {
                headers: {
                    authorization: token
                }
            })
            userDispatch({
                type: "UNFOLLOW",
                payload: {
                    unfollows: response.data.user
                }
            })
            console.log("unfollow", response.data)

        } catch (e) {
            console.log(e)
        }
    }


    const userProfileHandler = async (userId) => {
        try {
            const response = await axios.get(`/api/users/${userId}`)
            // console.log("get user from here", response.data.user)
            userDispatch({
                type: "GET_USER",
                payload: {
                    getUser: response.data.user
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const postCommentHandler = async (postId, commentData, token) => {
        try {
            const response = await axios.post(`/api/comments/add/${postId}`,
                {
                    commentData: { comment }
                }, {
                headers: {
                    authorization: token
                }
            })
            console.log("resposne", response)
        } catch (e) {
            console.log(e)
        }
    }

    const handleCommentInput = (e) => {
        const { name, value } = e.target;
        console.log({ ...comment, [name]: value })
        setComment({ ...comment, [name]: value })
    }


    const getCommentHandler = async (postId) => {
        try {
            const response = await axios.get(`/api/comments/${postId}`)
            console.log("response for all comments", response)
        } catch (e) {
            console.log(e)
        }
    }




    const editProfileHandler = async (updatedProfile, token) => {
        try {
            const response = await axios.post(`/api/users/edit`, {
                userData: updatedProfile
            }
                , {
                    headers: {
                        authorization: token
                    }
                }
            )
            userDispatch({
                type: "EDIT_USER_PROFILE",
                payload: {
                    editUserProfile: response.data.user
                }
            })
            setShowModal(false)
            setLoading(false)
            setBannerLoader(false)
        } catch (e) {
            console.log(e)
        }
    }


    const handleSearchUser = (userToFind) => {
        userToFind = userToFind.trim();
        if (userToFind !== "") {
            const searchedUser = users.filter(({ username }) => username.toLowerCase().includes(userToFind.toLowerCase()))
            userDispatch({
                type: "SEARCHED_USERS",
                payload: {
                    searchedUser: searchedUser
                }
            })
        } else {
            setShowSearchModal(false)
        }
    }



    useEffect(() => {
        fetchUserAccounts()

    }, [userState?.user])



    // here we are setting the loggedin user data inside the user object in the userReducer
    useEffect(() => {
        if (loggedInUser) {
            userDispatch({
                type: "SET_USER",
                payload: {
                    setUser: loggedInUser,
                },
            });
        }
    }, [userToken]);


    const value = {
        showModal,
        setShowModal,
        userState,
        followHandler,
        unfollowHandler,
        userProfileHandler,
        loggedInUser,
        editProfileHandler,
        postCommentHandler,
        handleCommentInput,
        comment,
        getCommentHandler,
        handleSearchUser,
        showSearchModal,
        setShowSearchModal,
        loading,
        setLoading,
        bannerLoader,
        setBannerLoader
    }

    return (
        <>
            <UserContext.Provider value={value} >
                {children}
            </UserContext.Provider>
        </>
    )
}