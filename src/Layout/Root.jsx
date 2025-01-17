import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    const location = useLocation();
    const footer = location.pathname === "/join-us" || location.pathname.includes('/dashboard')? false : true;
    return (
        <>
            <Header />
            <div className="pt-14"><Outlet /></div>
            {footer && <Footer />}
        </>
    );
};

export default Root;