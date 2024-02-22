import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Main/App.jsx'
import Error from "./pages/Error/Error.jsx"
import './index.css'
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import {SignIn} from "./pages/SignIn/SignIn.jsx";
import {Default} from "./pages/Default/Default.jsx";
import {Dashboard} from "./pages/Dashboard/Dashboard.jsx";
import {Signup} from "./pages/SignUp/Signup.jsx";
let router=createBrowserRouter([
    {
        path: "/",
        element: <Default/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/zaloguj",
                element: <SignIn/>,
            },
            {
                path: "/Dashboard",
                element: <Dashboard/>,
            },
            {
                path: "/SignUp",
                element: <Signup/>,
            }
        ]
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}/>
)
