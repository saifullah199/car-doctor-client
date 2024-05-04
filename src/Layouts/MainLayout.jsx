import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Pages/HomePage/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="h-28 ">
                <Navbar/>
            </div>
            <div className="">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;