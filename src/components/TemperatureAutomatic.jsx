import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import TextField from "@mui/material/TextField";

import useDebounce from "../hooks/useDebounce";

const TemperatureAutomatic = ({ options }) => {
    const [temperatures, setTemperatures] = useState(
        options ? options.temperatures : [30, 40, 50, 60]
    );
    const [angles, setAngles] = useState(
        options ? options.angles : [45, 90, 135, 180]
    );
    const [initial, setInitial] = useState(true);

    const debouncedTemperatures = useDebounce(temperatures, 1000);
    const debouncedAngles = useDebounce(angles, 1000);

    const handleTemperatureChange = (e, index) => {
        setTemperatures((prev) =>
            prev.map((temperature, id) =>
                id == index ? parseInt(e.target.value) : temperature
            )
        );
        setInitial(false);
    };
    const handleAngleChange = (e, index) => {
        setAngles((prev) =>
            prev.map((angle, id) =>
                id == index ? parseInt(e.target.value) : angle
            )
        );
        setInitial(false);
    };

    useEffect(() => {
        (async () => {
            try {
                const url = `${
                    import.meta.env.VITE_HOST
                }/api/mode/servo/automation`;
                const payload = {
                    automatic_options: {
                        temperatures,
                        angles,
                    },
                };
                await axios.post(url, payload);
                if (!initial)
                    toast.success("Temperature control setting updated!");
            } catch (err) {
                console.log(err);
                toast.error(
                    "An error occurs while updating temperature control setting."
                );
            }
        })();
    }, [debouncedTemperatures, debouncedAngles]);

    return (
        <>
            <div className="h-[100%] w-[100%] grid grid-cols-1 items-center text-center">
                {temperatures.map((temperature, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center p-2"
                    >
                        <div className="w-[20%] p-2">
                            <TextField
                                value={temperature}
                                onChange={(e) =>
                                    handleTemperatureChange(e, index)
                                }
                                label="Temperature"
                                variant="outlined"
                                type="number"
                            />
                        </div>
                        <div className="w-[20%] p-2">
                            <TextField
                                value={angles[index]}
                                onChange={(e) => handleAngleChange(e, index)}
                                label="Angle"
                                variant="outlined"
                                type="number"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TemperatureAutomatic;
