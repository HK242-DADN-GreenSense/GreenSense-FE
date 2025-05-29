import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import Schedule from "./Schedule";
import ScheduleDuration from "./ScheduleDuration";
import useDebounce from "../hooks/useDebounce";

const IrrigationSchedule = () => {
    const min = 0;
    const max = 60;
    const valueRange = [min, max];
    const [setting, setSetting] = useState(
        JSON.parse(localStorage.getItem("irrigationScheduleSetting")) || {
            expectedRange: [20, 50],
            currentAction: "init",
            action: "warning",
            schedule: [{ time: new Date(), duration: 20 }],
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
            "irrigationScheduleSetting",
            JSON.stringify(debouncedSetting)
        );
        toast.success("Irrigation schedule setting updated");
    }, [debouncedSetting]);

    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <Typography sx={{ fontFamily: "mono" }} gutterBottom>
                        Expected range (ml/m³)
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
                    <ScheduleDuration
                        key={index}
                        setting={setting}
                        setSetting={setSetting}
                        index={index}
                    />
                ))}
            </Schedule>
        </>
    );
};

export default IrrigationSchedule;
