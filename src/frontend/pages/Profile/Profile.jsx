import { useContext } from "react"
import { Header } from "src/frontend/component/Header"
import { AuthContext } from "src/frontend/context/AuthContext"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"

export const Profile = () => {
    const { followings } = useContext(PostContext)
    const { unfollowHandler } = useContext(UserContext)
    const { userToken } = useContext(AuthContext)
    console.log("followings", followings)
    return (
        <>
            <Header />
            <div className="users_list" >
                {followings?.map((followed) => {
                    return (
                        <li style={{ listStyle: "none", margin: " 2rem  " }} >
                            <img src={followed?.avatarUrl} alt="followedUser" width="100px" height="100px" />
                            <p> {followed?.username} </p>
                            <button onClick={() => unfollowHandler(followed._id, userToken)} >UnFollow</button>
                        </li>
                    )
                })}
            </div>

        </>
    )
}