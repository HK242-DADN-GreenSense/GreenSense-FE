import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import Schedule from "./Schedule";
import ScheduleAction from "./ScheduleAction";
import useDebounce from "../hooks/useDebounce";

const LightingSchedule = ({ valueRange }) => {
    const [min, max] = valueRange;
    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("lightingScheduleSetting")) || {
            expectedRange: [300, 500],
            currentAction: "init",
            action: "warning",
            schedule: [{ time: new Date(), action: 1 }],
        }
    );

    const debouncedSetting = useDebounce(setting, 1000);

    const marks = setting.expectedRange.map((value) => {
        return { value: value, label: value };
    });

    const handleRangeChange = (e, newRange) => {
        setSetting({ ...setting, expectedRange: newRange });
    };

    useEffect(() => {
        localStorage.setItem(
            "lightingScheduleSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Lighting schedule setting updated");
    }, [debouncedSetting]);
    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <Typography sx={{ fontFamily: "mono" }} gutterBottom>
                        Expected range (°C)
                    </Typography>
                    <Slider
                        sx={{
                            width: 300,
                            margin: "8 auto",
                        }}
                        min={min}
                        max={max}
                        value={setting.expectedRange}
                        onChange={(e, newRange) =>
                            handleRangeChange(e, newRange)
                        }
                        marks={marks}
                        aria-label="Always visible"
                    />
                </div>
            </div>
            <Schedule setting={setting} setSetting={setSetting}>
                {setting.schedule.map((_, index) => (
                    <ScheduleAction
                        key={index}
                        setting={setting}
                        setSetting={setSetting}
                        index={index}
                    />
                ))}
            </Schedule>
            <ToastContainer />
        </>
    );
};

export default LightingSchedule;
