import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Fish from "../pages/Fish";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Cooking from "../pages/Cooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'fish',
        element: <Fish></Fish>
      },
      {
        path: 'cooking',
        element: <Cooking></Cooking>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
    ]
  },

]);