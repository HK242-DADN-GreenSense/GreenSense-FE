import { ToastContainer } from "react-toastify";
import src from "../assets/farm-icon.svg";
import { Outlet, NavLink } from "react-router";
import { useEffect } from "react";
import { socket } from "../external/socket";

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

    const onNotification = (value) => {
        console.log(value);
    };

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        });
        socket.on("sensor_humid", onNotification);
        socket.on("sensor_temperature", onNotification);
        socket.on("sensor_light-sensor", onNotification);
        socket.on("sensor_gadget_type", onNotification);
        return () => {
            socket.off("sensor_humid", onNotification);
            socket.off("sensor_temperature", onNotification);
            socket.off("sensor_light-sensor", onNotification);
            socket.off("sensor_gadget_type", onNotification);
        };
    }, []);

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
