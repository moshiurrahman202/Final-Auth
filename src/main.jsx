import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from './Laout/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
import Profile from "./Components/Profile/Profile";
import PrivateRoute from "./P_router/PrivateRoute";
import Dashbord from "./Components/Dashbprd/Dashbord";





const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "login",
        Component: Login
      },
      {
        path: "signup",
        Component: Signup
      },
      {
        path:"profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "dashbord",
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
