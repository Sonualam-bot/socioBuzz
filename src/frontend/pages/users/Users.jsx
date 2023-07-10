import { useContext } from "react"
import "./Users.css"
import { PostContext } from "src/frontend/context/PostContext"
import { AuthContext } from "src/frontend/context/AuthContext"
import { UserContext } from "src/frontend/context/UserContext"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export const Users = () => {
    const { users, loginInput } = useContext(PostContext)
    const { userToken } = useContext(AuthContext)
    const { followHandler, userState: { user }, userProfileHandler } = useContext(UserContext)
    const { userFromDb, loggedInUser } = useContext(UserContext)
    const navigate = useNavigate()


    //so that the followed account should get filtered aka removed from the suggestion view
    const filteredUser = users?.filter((userInUsers) => {
        const isFollowing = user?.following?.some(
            (userinUserFollowing) =>
                userinUserFollowing.username === userInUsers.username
        );
        return !isFollowing;
    });

    return (
        <>
            <div className="suggestion_to_follow" >
                <div className="user_suggestion_heading">
                    <h2>Suggestions For You</h2>
                </div>



                {filteredUser?.map(({ _id, avatarUrl, firstName, lastName, username }) =>
                    username !== loggedInUser?.username ?
                        <li style={{ listStyle: "none" }} key={_id} >
                            <div className="user_suggestion_container" >
                                <div className="user_suggestion_cred" >
                                    <img src={avatarUrl} alt="user"

                                    />
                                    <Link className="suggestion_view_link" to="/userProfile">
                                        <div className="user_suggestion_name" onClick={() => userProfileHandler(_id)} >
                                            <p> {firstName} </p>
                                            <p> @{username} </p>
                                        </div>
                                    </Link>
                                </div>


                                <div className="user_follow_button" >
                                    <button onClick={() => followHandler(_id, userToken)} > Follow </button>
                                </div>


                            </div>
                            <hr className="user_hr" />


                        </li> : ""


                )}
            </div>

        </>
    )
}


