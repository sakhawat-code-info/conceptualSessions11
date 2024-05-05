import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
            <h>Footer</h>
        </div>
    );
};

export default Root;