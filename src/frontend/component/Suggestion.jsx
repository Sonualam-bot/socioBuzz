import "../../App.css"
import "./Suggestion.css"
import { useContext } from "react"
import { PostContext } from "src/frontend/context/PostContext"
import { Users } from "src/frontend/pages/users/Users"


import { UserContext } from "src/frontend/context/UserContext"

import { Search } from "src/frontend/pages/search/Search"
import { SearchUser } from "src/frontend/component/SearchUser"

export const Suggestion = () => {
    const { handleSortByDate, searchByUserName } = useContext(PostContext)
    const { showSearchModal } = useContext(UserContext)


    return (
        <>
            {/* <div> */}
            <div className="home_rightSide">


                <Search />

                {showSearchModal && (
                    <SearchUser />
                )}



                <Users />
            </div>
        </>
    )
}