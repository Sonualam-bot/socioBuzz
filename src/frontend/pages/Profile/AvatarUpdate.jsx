import { FaCameraRetro } from "react-icons/fa";
import { useState } from "react";
import "./Profile.css";

export const AvatarUpdate = ({ user, setAvatarImage, setavatarUpdateCard, previewImage, handleImageChange, setPreviewImage }) => {


    const randomAvatars = [
        // { id: 1, url: "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" },
        { id: 1, url: "https://cdn3.vectorstock.com/i/1000x1000/51/87/student-avatar-user-profile-icon-vector-47025187.jpg" },
        { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgY2WJcq5Kc6dBwxsOG1d0ThNAuBifIMt7rbSMEGCaDp7TdA2_Hgw5cXLQT9cCnirO4X4&usqp=CAU" },
        { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraQqd74PWQiILjbnCfSYDPwxPxzaucoJ2XXzN9uCfhtnm-JbJLtodtN91LHMutEewcxE&usqp=CAU" },
        { id: 4, url: "https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg" },
        { id: 5, url: "https://cdn1.vectorstock.com/i/1000x1000/73/15/female-avatar-profile-icon-round-woman-face-vector-18307315.jpg" },
        { id: 6, url: "https://images.megapixl.com/4684/46846325.jpg" },
    ]



    const handleAvatarOptionClick = (image) => {
        setAvatarImage(image.url)
        setPreviewImage(image.url)
    }


    return (
        <>
            <div className="modal-wrapper2" onClick={() => setavatarUpdateCard(false)}></div>
            <div>

                <div className=" modal-container2">
                    <span
                        className="followerCard_closeBtn"
                        onClick={() => setavatarUpdateCard(false)}
                    >
                        &times;
                    </span>
                    <div className="choose_avatar" >
                        {randomAvatars.map((image) => {
                            return (
                                <div key={image.id}>
                                    <img src={image.url} alt="useravatar" onClick={() => handleAvatarOptionClick(image)} />
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </>
    );
};




