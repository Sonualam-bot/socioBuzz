import "./EditPost.css"


import { useContext, useState } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"

import { RxCross1 } from "react-icons/rx"
import { BsFillImageFill } from 'react-icons/bs'

import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSunglasses } from 'react-icons/bs'
import { toast } from "react-hot-toast"

export const EditPost = () => {
    const { updatedPost,
        setUpdatedPost,
        editPostId,
        editUserPost, setShowEditAction, setShowEditDialog } = useContext(PostContext)
    const { userToken } = useContext(AuthContext)
    const { userState: { user } } = useContext(UserContext)

    const [editPostImagePreview, setEditPostImagePreview] = useState(false)
    const [chooseEditImage, setChooseEditImage] = useState(null)

    const [showPickerInEdit, setShowPickerInEdit] = useState(false);

    const [edittedPost, setEdittedPost] = useState(false)


    // const handleUpdateUserPost = () => {
    //     editUserPost(editPostId, updatedPost, userToken)
    // }
    const CLOUDINARY_UPLOAD_PRESET = 'avatarimages';
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/djdmyvtm8/image/upload";


    const uploadImageFileEditPost = () => {
        const file = chooseEditImage;
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", "avatarimages");

        setShowEditDialog(false)
        // setShowEditAction(false)

        fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {

                return editUserPost(editPostId, {
                    ...updatedPost,
                    contentUrl: data.url,
                }, userToken);
            })
            .catch((err) => console.error("error from catch", err));
    };


    const handleUpdateUserPost = () => {
        if (chooseEditImage) {
            uploadImageFileEditPost()
            // setEdittedPost(true)
        } else if (updatedPost?.content.trim() === "") {
            toast.error("write something or choose an image")
        } else {
            editUserPost(editPostId, updatedPost, userToken)
            toast.success("Post Updated")
            setEdittedPost(true)

        }

    }




    const handleEditPostImageUpload = (e) => {
        const file = e.target.files[0];
        setChooseEditImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setEditPostImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setEditPostImagePreview(null);
        }
    };


    const RemovePostImageClickHandler = () => {
        setChooseEditImage(null);
        setUpdatedPost({ ...updatedPost, contentUrl: "" });
    };


    const handleEditEmojiClick = (emojiObject, event) => {
        event.stopPropagation();
        setUpdatedPost({
            ...updatedPost,
            content: updatedPost.content + emojiObject.emoji,
        });
    };


    return (
        <>
            <div className="edit_post_container" >
                <div className="edit_action_btns" >
                    <div>
                        <span
                            className="followerCard_closeBtn"
                            onClick={() => setShowEditDialog(false)}
                        >
                            &times;
                        </span>
                    </div>

                    <button className="updateBtn" onClick={handleUpdateUserPost} >Update</button>
                </div>


                <div className="edit_user_profile_content">

                    <img className="img" src={user?.avatarUrl} alt="avatar" />


                    <div className="textarea_div">
                        <div className="edit_textarea">
                            <textarea value={updatedPost.content} onChange={(e) => setUpdatedPost({ ...updatedPost, content: e.target.value })} />
                        </div>



                        <div className="contentUrl">

                            {editPostImagePreview && updatedPost.contentUrl ?
                                (
                                    <img src={editPostImagePreview} alt="postPreview" />
                                ) : editPostImagePreview || updatedPost.contentUrl ?
                                    (
                                        <img src={editPostImagePreview || updatedPost.contentUrl} alt="" />
                                    ) :
                                    null
                            }

                            {editPostImagePreview || updatedPost.contentUrl ? (
                                <RxCross1 className="crossSvg" onClick={RemovePostImageClickHandler} />
                            ) : null}

                            <div className="edit_post_image_upload_input">
                                <label htmlFor="editPostImage">
                                    <BsFillImageFill />
                                </label>
                                <input className="upload_postImg" id="editPostImage" type="file" name="photo" accept="image/*" placeholder="choose img" onChange={handleEditPostImageUpload} />


                                {/* <div className="post_emoji" > */}
                                <label htmlFor="editPostEmoji">
                                    <BsEmojiSunglasses onClick={() => setShowPickerInEdit(!showPickerInEdit)} />
                                </label>

                                <div className="emojiPicker">
                                    {showPickerInEdit && <EmojiPicker
                                        onEmojiClick={handleEditEmojiClick}
                                        searchDisabled={true}
                                        width={350}
                                        height={300}
                                        size={10}
                                        previewConfig={{ showPreview: false }}
                                        fontSize=".25rem"
                                    />}
                                </div>

                                {/* </div> */}


                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </>
    )
}