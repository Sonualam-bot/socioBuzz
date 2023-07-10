import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
    contentUrl: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-3278215.jpg&fm=jpg",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        comment:
          "Nice!",
        fullName: "John doe",
        username: "johndoe",

        profileAvatar:
          "https://picsum.photos/id/1005/150",
        createdAt: "2023-05-29T16:13:08+05:30",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment:
          "Wow!",
        fullName: "Jane Doe",
        username: "janedoe",
        profileAvatar:
          "https://picsum.photos/id/1012/150",
        createdAt: "2023-05-25T16:13:08+05:30",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2023-05-24T16:13:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "When Chuck Norris looks in a mirror, the mirror shatters. Because not even glass is dumb enough to get in between Chuck Norris and Chuck Norris.",
    contentUrl: "https://www.freakytravel.com/wp-content/uploads/hiker-ocean-extreme.jpg",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "johndoe",
    createdAt: "2023-06-02T16:13:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Chuck Norris used to beat up his shadow because it was following to close. It now stands 15 feet behind him.",
    contentUrl: "https://images.news18.com/ibnlive/uploads/2022/06/solo-travel-16573504513x2.png",
    likes: {
      likeCount: 30,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janedoe",
    createdAt: "2023-04-20T16:13:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Chuck Norris used to beat up his shadow because it was following to close. It now stands 15 feet behind him.",
    contentUrl: "https://www.contiki.com/media/fude2hqz/three-people-in-a-paddle-boat-on-lake-in-madrid-spain-lg-3149eurs2022.jpg?center=0.5485906668194704%2C0.600250626566416&format=webp&mode=crop&width=1920&height=620&quality=80",
    likes: {
      likeCount: 70,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2023-05-15T16:13:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.",
    contentUrl: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/pexels-ibadah-mimpi-4633842.jpg",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alexmaxwell",
    createdAt: "2023-06-02T16:13:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
    contentUrl: "https://curlytales.com/wp-content/uploads/2022/07/Also-read-Aviation-Minister-Jyotiraditya-Scindia-To-2022-07-04T175416.870.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiajones",
    createdAt: "2023-03-22T16:13:08+05:30",
    updatedAt: formatDate(),
  }
];
