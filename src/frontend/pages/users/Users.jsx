import { useContext } from "react"
import "./Users.css"
import { PostContext } from "src/frontend/context/PostContext"
import { AuthContext } from "src/frontend/context/AuthContext"
import { UserContext } from "src/frontend/context/UserContext"

export const Users = () => {
    const { users, userByUsername } = useContext(PostContext)
    const { userToken } = useContext(AuthContext)
    const { followHandler } = useContext(UserContext)

    console.log("Seacrched by user", userByUsername)

    return (
        <>
            {users?.map((user) => {
                return (
                    <li style={{ listStyle: "none" }} >
                        <img src={user?.avatarUrl} alt="user" width="80px" height="80px" />
                        <p> {user?.username} </p>
                        {/* 
                        {user.following.map((ok) => <li> {ok._id} </li>)}
                        {console.log(user.following?.some((followedUser) => followedUser.id === user.id))} */}
                        {/* 
                        {users[0].following?.find(({ _id }) => user._id === _id) ? <button onClick={() => unfollowHandler(user._id, userToken)} >UnFollow</button> : <button onClick={() => followHandler(user._id, userToken)} > Follow </button>} */}

                        <button onClick={() => followHandler(user._id, userToken)} > Follow </button>

                    </li>
                )
            })}

        </>
    )
}


