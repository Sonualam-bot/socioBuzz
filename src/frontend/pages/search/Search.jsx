import "./Search.css"

import { useContext } from "react";
import { UserContext } from "src/frontend/context/UserContext";

import { CiSearch } from "react-icons/ci"

export const Search = () => {

    const { handleSearchUser, setShowSearchModal } = useContext(UserContext)

    const handleShowSearchUser = (e) => {
        setShowSearchModal(true);
        handleSearchUser(e.target.value)
    }

    return (
        <>
            <div className="suggestion_input" >
                <CiSearch className="search" />
                <input type="text" placeholder="search..." onChange={handleShowSearchUser} />
            </div>
        </>
    )
}