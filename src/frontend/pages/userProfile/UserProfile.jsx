import { useContext } from "react"
import { UserContext } from "src/frontend/context/UserContext"
import { SingleUserProfile } from "src/frontend/pages/Profile/SingleUserProfile"

export const UserProfile = () => {
    const { userState: { getUser } } = useContext(UserContext)

    return (
        <>
            <SingleUserProfile userProfile={getUser} />
        </>
    )
}