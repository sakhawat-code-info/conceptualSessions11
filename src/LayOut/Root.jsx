import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h>Navbar</h>
            <div className="h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
            <h>Footer</h>
        </div>
    );
};

export default Root;