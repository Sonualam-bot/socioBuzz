import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"

import { makeServer } from "./server.js";
import { AuthContextProvider } from "src/frontend/context/AuthContext.jsx"
import { PostContextProvider } from "src/frontend/context/PostContext.jsx"
import { UserContextProvider } from "src/frontend/context/UserContext.jsx"

// Call make Server
makeServer();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <PostContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </PostContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
)
