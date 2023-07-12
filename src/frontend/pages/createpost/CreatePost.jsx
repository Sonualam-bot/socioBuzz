import "./CreatePost.css"
import { useContext, useState } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"
import { PostContext } from "src/frontend/context/PostContext"
import { UserContext } from "src/frontend/context/UserContext"

import { BsFillImageFill } from "react-icons/bs"
import { BsEmojiSunglasses } from 'react-icons/bs'
import { RxCross1 } from "react-icons/rx"

import EmojiPicker from 'emoji-picker-react';
import toast from "react-hot-toast"

export const CreatePost = () => {

    const { createPostHanlder, input, handleInput, setInput, setShow, updatedPost, setIsPosting } = useContext(PostContext)
    const { userToken } = useContext(AuthContext)
    const { userState: { user } } = useContext(UserContext)

    const [postImgPreview, setPostImgPreview] = useState(null)

    // const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const [image1, setImage1] = useState();

    const CLOUDINARY_UPLOAD_PRESET = 'avatarimages';
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/djdmyvtm8/image/upload";

    const uploadImageFilePost = () => {

        setIsPosting(true)

        const file = image1;
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", "avatarimages");

        setImage1(null)
        fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                return createPostHanlder({
                    ...input,
                    contentUrl: data.url,
                }, userToken);
            })
            .catch((err) => console.error("error from catch", err));
    };


    // have to be checked
    const handleUpdateBtnClickPost = () => {
        const trimmedContent = input?.content.trim();
        if (image1) {
            uploadImageFilePost()
        }

        else if (trimmedContent === "") {
            toast.error("Write caption or add image.");
        }
        else {
            createPostHanlder({ ...input, content: trimmedContent }, userToken)

        }
        setInput({ content: "" })
        setPostImgPreview(null);
        setShow(false)

    }


    // const postButtonClickHandler = () => {
    //     setIsCreatePostModalOpen(false);
    //     const trimmedContent = createPost?.content.trim();
    //     if (imageInput) {
    //         uploadPostImageFile();
    //     } else if (trimmedContent === "") {
    //         toast.error("Write caption or add image.");
    //     } else {
    //         createPostHandler({ ...createPost, content: trimmedContent }, userToken);
    //     }
    // };


    const handleEmojiClick = (emojiObject, event) => {
        event.stopPropagation();
        setInput({
            ...input,
            content: input.content + emojiObject.emoji,
        });
    };


    const handlePostImageUpload = (e) => {
        const file = e.target.files[0];
        setImage1(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPostImgPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPostImgPreview(null);
        }
    };


    return (
        <>
            <div className="inputBox" >
                <div className="form" >
                    <div className="inputContainer" >
                        <img className="input_user_avatar" src={user?.avatarUrl} alt="useravatar" />
                        <div className="input_user_posts" >
                            <div className="post_input">
                                <textarea type="text" placeholder="What's happening?" name="content" value={input.content} onChange={handleInput} />
                            </div>

                            <div className="postPreviewDiv" >
                                {postImgPreview && (
                                    <div>
                                        <img className="postImagePreview" src={postImgPreview} alt="previewPostcontent" />
                                        <RxCross1 onClick={() => setPostImgPreview(null)} />
                                    </div>
                                )

                                }
                            </div>


                            <div className="createPost_interactions" >
                                <div className="createPost_icons" >
                                    <div className="image_upload_alias">
                                        <label htmlFor="postImage">
                                            <BsFillImageFill />
                                        </label>
                                        <input className="upload_postImg" id="postImage" type="file" name="photo" accept="image/*" placeholder="choose img" onChange={handlePostImageUpload} />
                                    </div>
                                    <div className="post_emoji" >
                                        <label htmlFor="postEmoji">
                                            <BsEmojiSunglasses onClick={() => setShowPicker(!showPicker)} />
                                        </label>

                                        <div className="emojiPicker">
                                            {showPicker && <EmojiPicker
                                                onEmojiClick={handleEmojiClick}
                                                searchDisabled={true}
                                                width={350}
                                                height={300}
                                                size={10}
                                                previewConfig={{ showPreview: false }}
                                                fontSize=".25rem"
                                            />}
                                        </div>

                                    </div>



                                </div>

                                <button className="post_button" onClick={handleUpdateBtnClickPost} >Post</button>
                            </div>

                        </div>
                    </div>





                </div >
            </div>
        </>
    )
}