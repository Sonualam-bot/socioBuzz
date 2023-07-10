import "./Profile.css"
import { useContext, useState } from "react"
import { UserContext } from "src/frontend/context/UserContext"
import { EditProfileModal } from "src/frontend/pages/Profile/EditProfileModal"

import { AiOutlineLink } from "react-icons/ai"
import { Link } from "react-router-dom"
import { PostContext } from "src/frontend/context/PostContext"
import { Post } from "src/frontend/pages/post/Post"
import { SingleUserProfile } from "src/frontend/pages/Profile/SingleUserProfile"

export const ShowEditModal = () => {
    const { loggedInUser, editProfileHandler, userState: { user }, showModal, setShowModal } = useContext(UserContext)

    const [updateProfile, setUpdateProfile] = useState({
        firstName: "",
        lastName: "",
        bio: "",
        avatarUrl: "",
        website: ""
    })

    const handleUserEditAction = (user) => {
        setUpdateProfile({
            ...updateProfile,
            firstName: user?.firstName,
            lastName: user?.lastName,
            bio: user?.bio,
            avatarUrl: user?.avatarUrl,
            website: user?.website,
        })
        setShowModal(true)
        // setUserId(_id)
    }






    return (
        <>
            <SingleUserProfile userProfile={user} handleUserEditAction={handleUserEditAction} showEditModal />



            {showModal && <EditProfileModal updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} />}
        </>
    )
}