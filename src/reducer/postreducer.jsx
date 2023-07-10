export const initialData = { posts: [], bookmarks: [], users: [], content: "", singlePost: [], searchByUsername: [], individualUserData: {}, sortBy: "latest" }


export const postreducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ALL_POSTS":
            console.log("ALL_POSTS", payload)
            return { ...state, posts: payload.posts }

        case "ADD_TO_BOOKMARK":
            return { ...state, bookmarks: payload.bookmarks }

        case "USER_ACCOUNTS":
            return { ...state, users: payload.user, searchByUsername: payload.user }



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

        case "GET_USER":
            return { ...state, individualUserData: payload.getUser }

        case "SORT_BY":
            return { ...state, sortBy: payload }

        case "EDIT_USER_PROFILE":
            console.log("EDIT_USER_PROFILE", payload)
            return { ...state, users: payload.editUserProfile }



        default:
            throw new Error(`Unknown action type ${type} `)
    }

}