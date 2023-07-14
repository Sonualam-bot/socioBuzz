import { useContext } from "react"
import { Header } from "src/frontend/component/Header"
import { AuthContext } from "src/frontend/context/AuthContext"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"
import { ShowEditModal } from "src/frontend/pages/Profile/ShowEditModal"
import { Followings } from "src/frontend/pages/userInteract/Followings"

export const Profile = () => {

    const { loggedInUser, editProfileHandler, userState: { user } } = useContext(UserContext)



    return (
        <>

            <div className="users_list" >


                <ShowEditModal />


            </div>

        </>
    )
}