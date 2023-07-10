import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    posts: [],
    avatarUrl: "https://wizarddojo.files.wordpress.com/2015/03/cinderella1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // {
  //   _id: "2",createdAt: formatDate(),
  //   firstName: "Adarsh",
  //   lastName: "Balika",
  //   username: "adarshbalika",
  //   password: "adarshBalika123",
  //   bio: "Be yourself!",
  //   bookmarks: [],
  //   avatarUrl:
  //     "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
  //   website: "https://romabulani.netlify.app/",
  //   createdAt: "2022-01-01T10:55:06+05:30",
  //   updatedAt: formatDate(),
  // },
  {
    _id: "1",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    bio: "Hello World",
    bookmarks: [],
    posts: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
    website: "https://google.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2",
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    password: "janedoe123",
    bio: "Whats in bio?",
    bookmarks: [],
    posts: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp",
    website: "https://romabulani.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    bio: "Whats in bio?",
    bookmarks: [],
    posts: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    website: "https://romabulani.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Roma",
    lastName: "Bulani",
    username: "romabulani",
    password: "romabulani123",
    bio: "Aspiring Frontend Engineer",
    bookmarks: [],
    posts: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525370/socialmedia/avatars/roma.webp",
    website: "https://romabulani.hashnode.dev/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Alex",
    lastName: "Maxwell",
    username: "alexmaxwell",
    password: "alexmaxwell123",
    bio: "What's up?",
    bookmarks: [],
    posts: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Sophia",
    lastName: "Jones",
    username: "sophiajones",
    password: "sophiajones123",
    bio: "Frontend Engineer",
    bookmarks: [],
    posts: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525510/socialmedia/avatars/sophia-jones.webp",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
