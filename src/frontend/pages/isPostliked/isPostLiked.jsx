


export const isPostLiked = (likes, loggedInUser) => {
    return likes?.likedBy?.filter(
        ({ username }) => username === loggedInUser?.username
    )?.length !== 0
        ? true
        : false;
};