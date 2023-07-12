import { useContext, useState } from "react";
import "./Profile.css";
import { UserContext } from "src/frontend/context/UserContext";
import { AuthContext } from "src/frontend/context/AuthContext";

import { AiOutlineLink } from "react-icons/ai"
import { BiCamera } from "react-icons/bi"
import { BiUserCircle } from "react-icons/bi"
import { AvatarUpdate } from "src/frontend/pages/Profile/AvatarUpdate";
import { toast } from "react-hot-toast";

export const EditProfileModal = ({ closeModal, updateProfile, setUpdateProfile }) => {
    const { editProfileHandler, userState: { user }, setShowModal, setLoading, setBannerLoader } = useContext(UserContext);
    const { userToken } = useContext(AuthContext);

    // console.log("edit se user", user)

    const [image, setImage] = useState({ avatarUrl: "" });

    const [avatarImage, setAvatarImage] = useState(null)
    const [bannerImage, setBannerImage] = useState(null)

    const [avatarUpdateCard, setavatarUpdateCard] = useState(false)

    const [previewImage, setPreviewImage] = useState(null);
    const [previewBannerImage, setPreviewBannerImage] = useState(null);

    // const [loading, setLoading] = useState(false)



    const CLOUDINARY_UPLOAD_PRESET = 'avatarimages';
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/djdmyvtm8/image/upload";

    const userUpdatedByInput = (e) => {
        const { name, value } = e.target;
        setUpdateProfile({ ...updateProfile, [name]: value });
    };

    const uploadImageFileAvatar = async () => {
        try {
            const file = avatarImage;
            const formData = new FormData();

            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
            formData.append("folder", "avatarimages");

            setLoading(true);

            const response = await fetch(CLOUDINARY_URL, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            return data.url;
        } catch (error) {
            throw error;
        }
    };

    const uploadImageFileBanner = async () => {
        try {
            const file = bannerImage;
            const formData = new FormData();

            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
            formData.append("folder", "avatarimages");

            setBannerLoader(true);

            const response = await fetch(CLOUDINARY_URL, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            return data.url;
        } catch (error) {
            throw error;
        }
    };

    const handleUpdateBtnClick = async () => {
        try {
            let avatarUrl = updateProfile.avatarUrl;
            let bannerUrl = updateProfile.bannerUrl;

            if (avatarImage) {
                avatarUrl = await uploadImageFileAvatar();
                setShowModal(false);
            }

            if (bannerImage) {
                bannerUrl = await uploadImageFileBanner();
                setShowModal(false);
            }

            editProfileHandler(
                {
                    ...updateProfile,
                    avatarUrl,
                    bannerUrl,
                },
                userToken
            );
            toast.success("Profile Updated Successfully")

            setShowModal(false);
        } catch (error) {
            throw error;
        }
    };



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setAvatarImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };


    const handleBannerImageChange = (e) => {
        const file = e.target.files[0];
        setBannerImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewBannerImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewBannerImage(null);
        }
    };




    return (
        <>
            <div className="modal-wrapper" onClick={() => setShowModal(false)}></div>
            <div className="modal-container">

                <div className="edit_container" >

                    <div className="edit_profile_card_action" >
                        <div className="edit_p">
                            <span
                                className="followerCard_closeBtn"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </span>
                            <p>Edit Profile</p>
                        </div>

                        <button className="updateBtn" onClick={handleUpdateBtnClick} >Update</button>
                    </div>

                    <div className="edit_banner" >

                        <label htmlFor="uploadBanner" ><BiCamera className="banner_camera" />  </label>
                        <input type="file" accept="" id="uploadBanner" className="userBanner" onChange={handleBannerImageChange} />


                        {previewBannerImage ? (
                            <img className="bannerEdit" src={previewBannerImage} alt="user banner" />
                        ) : (
                            <img className="bannerEdit" src={user?.bannerUrl} alt="user banner" />
                        )}
                    </div>

                    <div className="edit_profile_image">
                        {previewImage ? (
                            <img className="profile_picture_card" src={previewImage} alt="User Avatar" />
                        ) : (
                            <img className="profile_picture_card" src={user?.avatarUrl} alt="User Avatar" />
                        )}
                        <label htmlFor="post_profile_pic">
                            <BiCamera className="profile_camera" />
                        </label>
                        <input
                            type="file"
                            name="avatarUrl"
                            className="profile_pic_alias_input"
                            id="post_profile_pic"
                            placeholder="Choose image"
                            onChange={handleImageChange}
                        />
                        {previewImage ? (
                            <img className="profile_picture_card" src={previewImage} alt="User Avatar" />
                        ) : (
                            <img className="profile_picture_card" src={user?.avatarUrl} alt="User Avatar" />
                        )}
                        <BiUserCircle className="avatarEdit" onClick={() => setavatarUpdateCard(!avatarUpdateCard)} />
                    </div>




                    <div className="edit_profile_details" >
                        <fieldset>
                            <legend>firstName</legend>
                            <input type="text" name="firstName" value={updateProfile?.firstName} onChange={userUpdatedByInput} />
                        </fieldset>

                        <fieldset>
                            <legend>lastName</legend>
                            <input type="text" name="lastName" value={updateProfile?.lastName} onChange={userUpdatedByInput} />
                        </fieldset>
                        <fieldset>
                            <legend>Bio</legend>
                            <input type="text" name="bio" value={updateProfile?.bio} onChange={userUpdatedByInput} />
                        </fieldset>
                        <fieldset>
                            <legend>website</legend>
                            <input type="text" name="website" value={updateProfile?.website} onChange={userUpdatedByInput} />
                        </fieldset>

                    </div>
                </div>





                {avatarUpdateCard && <AvatarUpdate user={user} setAvatarImage={setAvatarImage} setavatarUpdateCard={setavatarUpdateCard} previewImage={previewImage} handleImageChange={handleImageChange} setPreviewImage={setPreviewImage} />}

            </div>
        </>
    );
};
