import { useContext } from "react"
import { Header } from "src/frontend/component/Header"
import { AuthContext } from "src/frontend/context/AuthContext"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"
import { ShowEditModal } from "src/frontend/pages/Profile/ShowEditModal"
import { Followings } from "src/frontend/pages/userInteract/Followings"

export const Profile = () => {
    // const { followings, individualUserData } = useContext(PostContext)
    const { loggedInUser, editProfileHandler, userState: { user } } = useContext(UserContext)
    // const { userToken } = useContext(AuthContext)
    // console.log("individualUserData", individualUserData)


    return (
        <>

            <div className="users_list" >
                {/* <div className="feed_header">
                    <h2>{user?.firstName} {user?.lastName} </h2>
                </div> */}

                {/* <Followings /> */}

                <ShowEditModal />


            </div>

        </>
    )
}