import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

import useDebounce from "../hooks/useDebounce";
import axios from "axios";

const IrrigationAutomatic = ({ options }) => {
    const min = 0;
    const max = 60;
    const unit = "ml/m³";

    const [threshold, setThreshold] = useState(
        options ? options.threshold : 30
    );
    const [duration, setDuration] = useState(options ? options.duration : 5);
    const [initial, setInitial] = useState(true);
    const marks = [{ value: threshold, label: threshold }];

    const debouncedThreshold = useDebounce(threshold, 1000);
    const debouncedDuration = useDebounce(duration, 1000);

    useEffect(() => {
        const url = `${import.meta.env.VITE_HOST}/api/mode/pump/automation`;
        axios
            .post(url, {
                automatic_options: { threshold: threshold, duration: duration },
            })
            .then((res) => {
                if (!initial)
                    toast.success("Irrigation control setting updated!");
            })
            .catch((err) => {
                console.log(err);
                toast.error(
                    "An error occurs while updating irrigation control setting."
                );
            });
    }, [debouncedThreshold, debouncedDuration]);

    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <Typography sx={{ fontFamily: "mono" }} gutterBottom>
                        Threshold {unit}
                    </Typography>
                    <Slider
                        sx={{
                            width: 300,
                            margin: "8 auto",
                        }}
                        value={threshold}
                        onChange={(e, newThreshold) => {
                            setThreshold(newThreshold);
                            setInitial(false);
                        }}
                        min={min}
                        max={max}
                        marks={marks}
                        aria-label="Always visible"
                    />
                </div>
            </div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <TextField
                        label="Duration (s)"
                        variant="outlined"
                        type="number"
                        value={duration}
                        onChange={(e) => {
                            setDuration(e.target.value);
                            setInitial(false);
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default IrrigationAutomatic;
