import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if (user?.email){
        return children
    }
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    return <Navigate to="/signin" ></Navigate>
};

export default PrivateRoutes;