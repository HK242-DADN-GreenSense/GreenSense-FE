import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";

const LightingManual = () => {
    const [intensity, setIntensity] = useState(1);

    const handleIntensityChange = (e) => {
        setIntensity(e.target.value);
    };

    const handleOpenLight = (e) => {
        const url = `${import.meta.env.VITE_HOST}/api/adafruit/light`;
        axios
            .post(url, { intensity: intensity })
            .then((res) => {
                intensity != 0
                    ? toast.success(`System will open ${intensity} lights.`)
                    : toast.success(`System will close all lights.`);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Oh no. An error has occurred. Please try again.");
            });
    };

    useEffect(() => {
        const url = `${import.meta.env.VITE_HOST}/api/mode/light/manual`;
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
                        label="Intensity"
                        variant="outlined"
                        type="number"
                        value={intensity}
                        onChange={(e) => handleIntensityChange(e)}
                    />
                </div>
            </div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <button
                        onClick={(e) => handleOpenLight(e)}
                        className="bg-[#008000] px-16 py-2 rounded-4xl text-white max-w-[100%] hover:cursor-pointer font-mono"
                    >
                        Open
                    </button>
                </div>
            </div>
        </>
    );
};

export default LightingManual;
