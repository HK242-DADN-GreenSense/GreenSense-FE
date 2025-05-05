import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import Manual from "./Manual";
import useDebounce from "../hooks/useDebounce";
import TempAndLigntManual from "./TempAndLightManual";

const LightingManual = ({ valueRange }) => {
    const unit = "W/m²";

    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("lightingManualSetting")) || {
            expectedRange: [300, 500],
            turnOn: true,
            warning: true,
        }
    );

    const debouncedSetting = useDebounce(setting, 1000);

    useEffect(() => {
        localStorage.setItem(
            "lightingManualSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Lighting manual setting updated");
    }, [debouncedSetting]);

    return (
        <>
            <Manual
                setting={setting}
                setSetting={setSetting}
                unit={unit}
                valueRange={valueRange}
            >
                <TempAndLigntManual
                    setting={setting}
                    setSetting={setSetting}
                    name={"Led"}
                />
            </Manual>
            <ToastContainer />
        </>
    );
};

export default LightingManual;
