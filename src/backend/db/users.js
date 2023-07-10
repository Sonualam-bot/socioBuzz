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
    bio: "Full Stack Developer",
    bookmarks: [],
    posts: [],
    avatarUrl: "https://wizarddojo.files.wordpress.com/2015/03/cinderella1.jpg",
    bannerUrl: "https://quotefancy.com/media/wallpaper/3840x2160/18846-Anonymous-Quote-Work-hard-in-silence-let-your-success-be-your.jpg",
    website: "https://google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
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
    bannerUrl:
      "https://hips.hearstapps.com/hmg-prod/images/smile-quotes-1518106970.jpg?crop=1xw:0.8018531717747683xh;center,top&resize=1200:*",
    website: "https://google.com",
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
    bannerUrl: "https://hips.hearstapps.com/hmg-prod/images/home-quotes-v2-1659710227.jpg",
    website: "https://google.com",
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
    bannerUrl: "https://www.goalcast.com/wp-content/uploads/2021/01/Rapper-Quotes-1.jpg",
    website: "https://google.com",
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
    bannerUrl: "https://www.myglobalviewpoint.com/wp-content/uploads/2018/03/Best-Travel-Quotes-to-Fuel-Your-Wanderlust.jpg",
    website: "https://google.com",
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
    bannerUrl: "https://www.myglobalviewpoint.com/wp-content/uploads/2018/03/Best-Travel-Quotes-to-Fuel-Your-Wanderlust.jpg",
    website: "https://google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
