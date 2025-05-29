import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";

const TemperatureManual = () => {
    const [angle, setAngle] = useState(90);

    const handleAngleChange = (e) => {
        setAngle(e.target.value);
    };

    const handleOpenServo = (e) => {
        const url = `${import.meta.env.VITE_HOST}/api/adafruit/servo`;
        axios
            .post(url, { angle: angle })
            .then((res) => {
                angle != 0
                    ? toast.success(`Servo will be opened to ${angle}°`)
                    : toast.success(`Servo will be closed.`);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Oh no. An error has occurred. Please try again.");
            });
    };

    useEffect(() => {
        const url = `${import.meta.env.VITE_HOST}/api/mode/servo/manual`;
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
                        label="Angle (°)"
                        variant="outlined"
                        type="number"
                        value={angle}
                        onChange={(e) => handleAngleChange(e)}
                    />
                </div>
            </div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <button
                        onClick={(e) => handleOpenServo(e)}
                        className="bg-[#008000] px-16 py-2 rounded-4xl text-white max-w-[100%] hover:cursor-pointer font-mono"
                    >
                        Open
                    </button>
                </div>
            </div>
        </>
    );
};

export default TemperatureManual;
