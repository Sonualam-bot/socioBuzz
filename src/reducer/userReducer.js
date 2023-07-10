export const userInititalState = { user: "", searchedUser: [], getUser: "" }


export const userReducer = (userState, action) => {

    const { type, payload } = action;
    switch (type) {

        case "SET_USER":
            // const updatedUser = { ...userState.user, ...payload.setUser };
            // localStorage.setItem("user", JSON.stringify(updatedUser));
            return { ...userState, user: payload.setUser };



        case "FOLLOW":
            return { ...userState, user: payload.follows }

        case "UNFOLLOW":
            return { ...userState, user: payload.unfollows }

        case "EDIT_USER_PROFILE":
            console.log("this is coming from editprofileHandler", payload);
            return {
                ...userState,
                user: { ...userState.user, ...payload.editUserProfile },
            };


        case "SEARCHED_USERS":
            return { ...userState, searchedUser: payload.searchedUser }

        case "GET_USER":
            console.log("GET_USER", payload.getUser)
            return { ...userState, getUser: payload.getUser }


        default:
            throw new Error(`Unknown action type ${action.type}`)
    }

}