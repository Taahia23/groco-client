import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Fish from "../pages/Fish";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Cooking from "../pages/Cooking";
import Oil from "../pages/Oil";
import Rice from "../pages/Rice";
import Chicken from "../pages/Chicken";
import DetailModal from "../components/DetailModal";
import ZoomImage from "../components/Image/ZoomImage";
import PrivateRoute from "./PrivateRoute";
import UserAdminDashboard from "../layout/UserAdminDashboard";
import MyCart from "../pages/UserAdminDashboard/MyCart";
import UserProfile from "../pages/UserAdminDashboard/UserProfile";
import AboutUs from "../pages/AboutUs/AboutUs";

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
        path: 'oil',
        element: <Oil></Oil>
      },
      {
        path: 'rice',
        element: <Rice></Rice>
      },
      {
        path: 'chicken',
        element: <Chicken></Chicken>
      },
      {
        path: 'aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/detail/:id',
        element: <PrivateRoute><DetailModal></DetailModal></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/foodItem/${params.id}`)
      },
      {
       
        element: <ZoomImage></ZoomImage>,
        loader: ({ params }) => fetch(`http://localhost:5000/foodItem/${params.id}`)
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
  {
    path: 'dashboard',
    element: <UserAdminDashboard></UserAdminDashboard>,
    children: [
      {
        path: 'cart',
        element: <MyCart></MyCart>
      },
      {
        path: 'userHome',
        element: <UserProfile></UserProfile>
      },
    ]
  }

]);