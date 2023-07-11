import { useContext } from "react"
import { BsTrash3 } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { PostContext } from "src/frontend/context/PostContext"

export const EditDelete = ({ post, deleteUserPost, handleEditButtonClick, _id, userToken, content, contentUrl }) => {
    const { editButtonHandler, showEditdialog } = useContext(PostContext)

    return (
        <div className="edit_and_delete_show" >
            <FiEdit onClick={() => editButtonHandler(_id, post)} />
            <BsTrash3 className="trash" onClick={() => deleteUserPost(_id, userToken)} />


        </div >
    )
}