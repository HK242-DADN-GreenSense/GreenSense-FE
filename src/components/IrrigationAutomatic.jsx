import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import Automatic from "./Automatic";
import useDebounce from "../hooks/useDebounce";

const IrrigationAutomatic = ({ valueRange }) => {
    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("irrigationAutomaticSetting")) || {
            option: "custom",
            range: [20, 50],
        }
    );

    const debouncedSetting = useDebounce(setting, 1000);

    const options = [
        { label: "🌵 Dry", value: "dry" },
        { label: "🌻 Average", value: "average" },
        { label: "🌾 Wet", value: "wet" },
        { label: "⚙️ Custom", value: "custom" },
    ];

    useEffect(() => {
        localStorage.setItem(
            "irrigationAutomaticSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Irrigation automatic setting updated");
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

export default IrrigationAutomatic;
