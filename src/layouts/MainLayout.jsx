import { ToastContainer } from "react-toastify";
import src from "../assets/farm-icon.svg";
import { Outlet, NavLink } from "react-router";

const MainLayout = () => {
    const features = [
        "Statistics",
        "Irrigation Control",
        "Temperature Control",
        "Lighting Control",
    ];

    const routeTo = {
        Statistics: "statistics",
        "Irrigation Control": "irrigation",
        "Temperature Control": "temperature",
        "Lighting Control": "lighting",
    };

    return (
        <>
            <div className="grid grid-cols-12 w-[100vw] h-[100vh]">
                <div className="col-span-2 bg-[#a7f1a7] flex flex-col items-center align-middle">
                    <img src={src} className="p-8" />
                    {features.map((feat, index) => (
                        <NavLink
                            to={routeTo[feat]}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? "w-[100%] text-center p-4 text-[1.3rem] bg-[#0BDA51] opacity-80 text-amber-800 font-mono font-bold hover:cursor-pointer"
                                    : "w-[100%] text-center p-4 text-[1.3rem] text-black font-mono font-bold hover:cursor-pointer"
                            }
                        >
                            {feat}
                        </NavLink>
                    ))}
                </div>
                <div className="col-span-10 grid grid-cols-1 grid-rows-1 items-center align-middle">
                    <Outlet />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default MainLayout;
