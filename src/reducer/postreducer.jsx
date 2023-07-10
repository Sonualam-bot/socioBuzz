

export const initialData = { posts: [], bookmarks: [], users: [], followings: [], content: "", singlePost: [], searchByUsername: [] }


export const postreducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ALL_POSTS":
            return { ...state, posts: payload.posts }
        case "ADD_TO_BOOKMARK":
            return { ...state, bookmarks: payload.bookmarks }
        case "USER_ACCOUNTS":
            return { ...state, users: payload.user, searchByUsername: payload.user }
        case "FOLLOW":
            const updatedUser = state.users.filter((user) => user._id !== payload.follows.followUser._id)
            return { ...state, users: updatedUser, followings: [...payload.follows.user.following] }
        case "UNFOLLOW":
            const updatedFollowings = state.followings.filter((user) => user._id !== payload.follows.followUser._id)
            return { ...state, followings: updatedFollowings, users: [...state.users, payload.follows.followUser] }
        case "CREATE_POST":
            return { ...state, posts: payload.posts }
        case "DELETE_USER_POST":
            return { ...state, posts: payload.delete }
        case "EDIT_POST":
            console.log("EDIT_POST", payload)
            return { ...state, posts: payload.edit }
        case "SINGLE_POST":
            return { ...state, singlePost: payload.singlePost }
        case "SEARCH_BY_USERNAME":
            return { ...state, posts: payload.searchUser }



        default:
            throw new Error(`Unknown action type ${type} `)
    }

}