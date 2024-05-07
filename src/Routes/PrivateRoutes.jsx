import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)

    if (user?.email){
        return children
    }
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    return <Navigate state={location.pathname}  to="/signin" ></Navigate>
};

export default PrivateRoutes;