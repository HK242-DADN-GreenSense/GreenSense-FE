import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import Automatic from "./Automatic";
import useDebounce from "../hooks/useDebounce";

const LightingAutomatic = ({ valueRange }) => {
    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("lightingAutomaticSetting")) || {
            option: "custom",
            range: [300, 500],
        }
    );

    const debouncedSetting = useDebounce(setting, 1000);

    const options = [
        { label: "🌞 Bright", value: "bright" },
        { label: "🌤️ Average", value: "average" },
        { label: "🌙 Dim", value: "dim" },
        { label: "⚙️ Custom", value: "custom" },
    ];

    useEffect(() => {
        localStorage.setItem(
            "lightingAutomaticSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Lighting automatic setting updated");
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

export default LightingAutomatic;
