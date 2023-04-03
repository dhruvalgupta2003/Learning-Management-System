import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

/**import all components */
import Username from "./components/Username.js";
import Reset from "./components/Reset.js";
import Register from "./components/Register.js";
import Profile from "./components/Profile.js";
import Recovery from "./components/Recovery.js";
import Password from "./components/Password.js";
import PageNotFound from "./components/PageNotFound.js";
import Topbar from './components/Topbar.jsx';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth.js'

/**root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/register',
        element : <Register></Register>
    },
    {
        path: '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path: '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path: '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path: '/reset',
        element : <Reset></Reset>
    },
    {
        path: '/admin',
        element : <Topbar></Topbar>
    },
    {
        path: '*',
        element : <PageNotFound></PageNotFound>
    }
])
export default function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  )
};  
