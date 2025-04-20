import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";

import Manual from "./Manual";
import useDebounce from "../hooks/useDebounce";

const IrrigationManual = ({ valueRange }) => {
    const unit = "ml/m³";

    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("irrigationManualSetting")) || {
            expectedRange: [20, 50],
            duration: 20,
            warning: true,
        }
    );

    const debouncedSetting = useDebounce(setting, 1000);

    const handleDurationChange = (e) => {
        setSetting({ ...setting, duration: e.target.value });
    };

    const handleIrrigateClick = (e) => {
        toast.success(`System will irrigate in ${setting.duration} seconds`);
        // Cal API to start irrigate
    };

    useEffect(() => {
        localStorage.setItem(
            "irrigationManualSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Irrigation manual setting updated");
    }, [debouncedSetting]);

    return (
        <>
            <Manual
                setting={setting}
                setSetting={setSetting}
                unit={unit}
                valueRange={valueRange}
            >
                <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                    <div>
                        <TextField
                            label="Duration (s)"
                            variant="outlined"
                            type="number"
                            value={setting.duration}
                            onChange={(e) => handleDurationChange(e)}
                        />
                    </div>
                </div>
                <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                    <div>
                        <button
                            onClick={(e) => handleIrrigateClick(e)}
                            className="bg-[#008000] px-16 py-2 rounded-4xl text-white max-w-[100%] hover:cursor-pointer font-mono"
                        >
                            Irrigate
                        </button>
                    </div>
                </div>
            </Manual>
            <ToastContainer />
        </>
    );
};

export default IrrigationManual;
