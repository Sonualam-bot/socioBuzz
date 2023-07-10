import { useContext } from "react"
import { UserContext } from "src/frontend/context/UserContext"

import { Link } from "react-router-dom"

export const SearchUser = () => {
    const { userState: { searchedUser }, userProfileHandler } = useContext(UserContext)
    return (
        <>
            <div className="search-users-show">
                {searchedUser.length > 0 ? (
                    searchedUser.map(
                        ({ _id, avatarUrl, firstName, lastName, username }) => (
                            <div key={_id} className="searched-users">
                                <img src={avatarUrl} alt={username} />{" "}
                                {/* user fullName and username */}
                                <Link to="/userProfile">
                                    <div
                                        className="search-user-details"
                                        onClick={() => userProfileHandler(_id)}
                                    >
                                        <span>
                                            {firstName} {lastName}
                                        </span>
                                        <span>@{username}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    )
                ) : (
                    <div> No user found by this name.. </div>
                )}
            </div>
        </>
    )
}