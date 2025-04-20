import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import Manual from "./Manual";
import useDebounce from "../hooks/useDebounce";
import TempAndLigntManual from "./TempAndLightManual";

const TemperatureManual = ({ valueRange }) => {
    const unit = "°C";

    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("temperatureManualSetting")) || {
            expectedRange: [20, 40],
            turnOn: true,
            warning: true,
        }
    );

    const debouncedSetting = useDebounce(setting, 1000);

    useEffect(() => {
        localStorage.setItem(
            "temperatureManualSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Temperature manual setting updated");
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
                    name={"Servo"}
                />
            </Manual>
            <ToastContainer />
        </>
    );
};

export default TemperatureManual;
