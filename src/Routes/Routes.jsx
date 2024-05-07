import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home";
import SignIn from "../Pages/SignUp/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut";
import Bookings from "../Pages/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/signin',
            element: <SignIn/>,
        },
        {
            path: '/signup',
            element: <SignUp/>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoutes> <CheckOut/> </PrivateRoutes>,
          loader: ({params}) => fetch(`https://car-doctor-server-gamma-brown.vercel.app/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoutes><Bookings/></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router