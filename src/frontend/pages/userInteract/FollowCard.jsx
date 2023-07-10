import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "src/frontend/context/AuthContext";
import { UserContext } from "src/frontend/context/UserContext";

export const FollowCard = ({ followed, following, follower, userProfile }) => {
    const { unfollowHandler, followHandler, userProfileHandler, userState } = useContext(UserContext)
    const { userToken } = useContext(AuthContext)
    const { _id, avatarUrl, firstName, lastName, username, bio } = followed;

    // console.log("this si the searched user", searchedUser)

    const isFollower = userProfile?.followers.find((userData) => userData._id === _id)
    const isFollowing = userProfile?.following.find((userData) => userData._id === _id)

    const userFollowBtnDynamic = () => {
        if (isFollower?._id === isFollowing?._id) {
            return <button className="unFollowBtn" onClick={() => unfollowHandler(_id, userToken)}></button>;
        } else {
            return <button className="followBtn" onClick={() => followHandler(_id, userToken)}></button>;
        }
    };


    return (

        <div className="following_container" >
            <div className="following_description">
                <img src={avatarUrl} alt="avatar" />
                <Link className="Link" to="/userProfile" >
                    <div className="following_headerText"
                        onClick={() => userProfileHandler(_id)}
                    >
                        <h3> {firstName} {lastName} </h3>
                        <p>@{username}</p>
                        <p>{bio}</p>
                    </div>
                </Link>
            </div>
            <div className="following_btn" >
                {following && <button className="unFollowBtn" onClick={() => unfollowHandler(_id, userToken)} ></button>}
                {follower && userFollowBtnDynamic()}
            </div>
        </div>
    )
}