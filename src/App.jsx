import './App.css'
import "src/frontend/component/Header.css"
import { Routes, Route } from "react-router-dom"
import { Explore } from "./frontend/pages/explore/Explore"
import { Bookmarks } from "./frontend/pages/bookmarks/Bookmarks"
import { Home } from "./frontend/pages/home/Home"
import { Profile } from "/src/frontend/pages/Profile/Profile"
import { Login } from "./frontend/pages/login/Login"
import { Signup } from "src/frontend/pages/login/Signup"


import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Logout } from "src/frontend/pages/login/Logout"
import { SinglePost } from "src/frontend/pages/singlePost/SinglePost"


import MockMan from 'mockman-js'
import MockAPI from "src/Mockman/MockApi"

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

  return (
    <>
      <ToastContainer position="bottom-right" autoClose="500" closeOnClick="true" pauseOnHover="true" draggable="true" />
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
      </Routes>
    </>
  )
}

export default App
