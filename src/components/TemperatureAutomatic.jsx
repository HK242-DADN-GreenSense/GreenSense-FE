import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import Automatic from "./Automatic";
import useDebounce from "../hooks/useDebounce";

const TemperatureAutomatic = ({ valueRange }) => {
    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("temperatureAutomaticSetting")) || {
            option: "custom",
            range: [20, 40],
        }
    );

    const debouncedSetting = useDebounce(setting, 1000);

    const options = [
        { label: "🔥 Hot", value: "hot" },
        { label: "🌤️ Average", value: "average" },
        { label: "❄️ Cold", value: "cold" },
        { label: "⚙️ Custom", value: "custom" },
    ];

    useEffect(() => {
        localStorage.setItem(
            "temperatureAutomaticSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Temperature automatic setting updated");
    }, [debouncedSetting]);

    return (
        <>
            <Automatic
                valueRange={valueRange}
                options={options}
                setting={setting}
                setSetting={setSetting}
            />
            <ToastContainer />
        </>
    );
};

export default TemperatureAutomatic;
