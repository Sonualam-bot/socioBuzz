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
      "Lost in serenity at Pura Ulun Danu Bratan, where ancient beauty and tranquil waters intertwine. Embracing the Balinese spirit in this ethereal temple nestled amidst the mountains. #Bali #PuraUlunDanuBratan #SacredOasis #DivineJourney",
    contentUrl:
      "https://media.istockphoto.com/id/1471856897/photo/ulun-danu-beratan-temple-bali-indonesia.jpg?s=612x612&w=0&k=20&c=196Ue66vloowuDNBAJ2zMfN0bJq40oTtrae1xRkuLNU=",
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
    username: "mralam",
    createdAt: "2023-05-24T16:13:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Exploring the vibrant underwater wonderland, where every dive is a gateway to a hidden realm. Discovering the beauty beneath the surface and diving into an ocean of awe-inspiring moments. #ScubaAdventures #UnderwaterExploration #DiveIntoWonder #UnleashTheMermaidWithin",
    contentUrl:
      "https://media.istockphoto.com/id/1173897482/photo/scuba-diver-in-shallow-lagoon.webp?b=1&s=170667a&w=0&k=20&c=nsKS--Axq66KZwkXfQJEmel_xni8TvDTPYJbd_REy8I=",
    likes: {
      likeCount: 60,
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
    username: "mralam",
    createdAt: "2023-05-24T16:13:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Conquering new heights and diving into the depths of adventure! Embracing the thrill of solo travel and discovering the beauty of the world, one step at a time. #SoloAdventures #Wanderlust #UnleashingTheExplorerWithin #LivingLifeToTheFullest",
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
      "Embracing solitude and savoring the freedom of the open road. Exploring new horizons, meeting extraordinary people, and discovering my own strength along the way. #SoloTravel #Wanderlust #SelfDiscovery #UnleashingTheAdventurerWithin",
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
      "Rowing into unforgettable memories with my amazing travel companions! Sharing laughter, sunshine, and the joy of exploration on the serene waters of Madrid. #TravelBuddies #LakeLife #UnforgettableMoments #MakingMemories",
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
      "Serenity found in the embrace of nature's wonders. Connecting with the sacred tranquility of the forest, where dreams and reality intertwine. #NatureRetreat #SpiritualJourney #FindingPeace #ForestWhispers",
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

      "Seeking solace and finding inner peace amidst the serenity of the sacred temple. Embracing the tranquility and connecting with the divine energy that surrounds us all. #TempleSereneVibes #InnerPeace #SpiritualJourney #FindingBalance",
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
