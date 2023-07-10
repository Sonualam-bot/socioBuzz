import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { PostContext } from "src/frontend/context/PostContext";

export const UserContext = createContext();


export const UserContextProvider = ({ children }) => {
    const { dispatch } = useContext(PostContext)

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
            dispatch({
                type: "FOLLOW",
                payload: {
                    follows: response.data
                }
            })
            console.log(response.data)
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
            dispatch({
                type: "UNFOLLOW",
                payload: {
                    follows: response.data
                }
            })

        } catch (e) {
            console.log(e)
        }
    }




    useEffect(() => {
        fetchUserAccounts()
    }, [])

    const value = {
        followHandler,
        unfollowHandler
    }

    return (
        <>
            <UserContext.Provider value={value} >
                {children}
            </UserContext.Provider>
        </>
    )
}