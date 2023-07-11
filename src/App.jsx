import './App.css'
import "src/frontend/pages/home/Home.css"
import "src/frontend/component/Header.css"
import { Routes, Route, NavLink, useLocation } from "react-router-dom"
import { Explore } from "./frontend/pages/explore/Explore"
import { Bookmarks } from "./frontend/pages/bookmarks/Bookmarks"
import { Home } from "./frontend/pages/home/Home"
import { Profile } from "/src/frontend/pages/Profile/Profile"
import { Login } from "./frontend/pages/login/Login"
import { Signup } from "src/frontend/pages/login/Signup"


import 'react-toastify/dist/ReactToastify.css';
import { Logout } from "src/frontend/pages/login/Logout"
import { SinglePost } from "src/frontend/pages/singlePost/SinglePost"



import MockAPI from "src/Mockman/MockApi"
import { Header } from "src/frontend/component/Header"
import { useContext } from "react"
import { AuthContext } from "src/frontend/context/AuthContext"
import { NavigationLeft } from "src/frontend/component/NavigationLeft"
import { Suggestion } from "src/frontend/component/Suggestion"
import { Followings } from "src/frontend/pages/userInteract/Followings"
import { Followers } from "src/frontend/pages/userInteract/Followers"
import { UserProfile } from "src/frontend/pages/userProfile/UserProfile"
import { PostContext } from "src/frontend/context/PostContext"
import { CreatePost } from "src/frontend/pages/createpost/CreatePost"
import { Toaster } from "react-hot-toast"
import { BottomNavigation } from "src/frontend/component/BottomNavigation"


if (import.meta.env.DEV) {
  window.onerror = (event, source, lineno, colno, err) => {
    const ErrorOverlay = customElements.get("vite-error-overlay");
    if (!ErrorOverlay) {
      return;
    }
    const overlay = new ErrorOverlay(err);
    document.body.appendChild(overlay);
  };
}



function App() {
  const { userToken, isLoggedIn } = useContext(AuthContext)
  const { show, setShow } = useContext(PostContext)
  const location = useLocation();

  if (!userToken) {
    if (location.pathname === "/signup") {
      return <Signup />;
    } else {
      return <Login />;
    }
  }




  return (
    <>




      {!isLoggedIn && <Toaster
        position="bottom-right"
        reverseOrder={false}
        containerStyle={{
          bottom: "3rem",
          right: "3rem",
        }}
        toastOptions={{
          duration: 2000,
        }}
      />}


      {show &&
        <div>

          <div className="newPost-wrapper" onClick={() => setShow(false)}></div>

          <div className="newPost-container">
            <span
              className="followerCard_closeBtn"
              onClick={() => setShow(false)}
            >
              &times;
            </span>
            <CreatePost />
          </div>
        </div>

      }


      <div className="App">

        {/* <Header /> */}
        {/* <hr /> */}

        <div className="home_container" >
          {/* left side */}

          <div className="navigation_container" >
            <NavigationLeft />

          </div>


          {/* <hr className="home_hr" /> */}

          <div className="mid_container" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/singlepage" element={<SinglePost />} />
              <Route path="/mock" element={<MockAPI colorScheme="dark" />} />
              <Route path="/profile/following" element={<Followings />} />
              <Route path="/profile/followers" element={<Followers />} />
              <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
          </div>


          {/* <hr className="home_hr" /> */}
          <div className="suggeston_container" >
            <Suggestion />
          </div>


        </div>




        <BottomNavigation />



      </div>

    </>
  )
}

export default App
