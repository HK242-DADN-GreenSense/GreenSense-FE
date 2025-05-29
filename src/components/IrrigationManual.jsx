import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";

import axios from "axios";

const IrrigationManual = () => {
    const [disable, setDisable] = useState(false);
    const [duration, setDuration] = useState(5);
    const [initial, setInitial] = useState(true);

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    const handleIrrigateClick = (e) => {
        if (disable) return;
        toast.success(`System will irrigate in ${duration} seconds`);
        setDisable(true);
        setTimeout(() => {
            setDisable(false);
        }, (duration + 1) * 1000);
        // Cal API to start irrigate
        const url = `${import.meta.env.VITE_HOST}/api/adafruit/pump/on`;
        axios.post(url, { duration: duration }).catch((err) => {
            console.log(err);
            toast.error("Oh no. An error has occurred. Please try again.");
        });
    };

    useEffect(() => {
        const url = `${import.meta.env.VITE_HOST}/api/mode/pump/manual`;
        axios.post(url).catch((err) => {
            console.log(err);
            toast.error("Oh no. An error has occurred. Please try again.");
        });
    }, []);

    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center"></div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <TextField
                        label="Duration (s)"
                        variant="outlined"
                        type="number"
                        value={duration}
                        onChange={(e) => handleDurationChange(e)}
                    />
                </div>
            </div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <button
                        onClick={(e) => handleIrrigateClick(e)}
                        className={
                            !disable
                                ? "bg-[#008000] px-16 py-2 rounded-4xl text-white max-w-[100%] hover:cursor-pointer font-mono"
                                : "bg-[#008000] px-16 py-2 rounded-4xl text-white max-w-[100%] opacity-50 font-mono"
                        }
                    >
                        Irrigate
                    </button>
                </div>
            </div>
        </>
    );
};

export default IrrigationManual;
