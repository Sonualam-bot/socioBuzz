

export const getUserDetails = (user, username) => {
    const details = user?.following?.find(
        (userFollowing) => userFollowing?.username === username
    );
    return details || user;
};

export const getUserDetailsForExplore = (users, username) => {
    const details = users?.find(
        (userFollowing) => userFollowing?.username === username
    );
    return details;
};