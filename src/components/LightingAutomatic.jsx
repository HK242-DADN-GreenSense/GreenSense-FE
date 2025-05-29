import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import TextField from "@mui/material/TextField";

import useDebounce from "../hooks/useDebounce";

const LightingAutomatic = ({ options }) => {
    const [lights, setLights] = useState(options.lights);
    const [intensities, setIntensities] = useState(options.intensities);
    const [initial, setInitial] = useState(true);

    const debouncedLights = useDebounce(lights, 1000);
    const debouncedIntensities = useDebounce(intensities, 1000);

    const handleLightsChange = (e, index) => {
        setLights((prev) =>
            prev.map((light, id) =>
                id == index ? parseInt(e.target.value) : light
            )
        );
        setInitial(false);
    };
    const handleIntensitiesChange = (e, index) => {
        setIntensities((prev) =>
            prev.map((intensity, id) =>
                id == index ? parseInt(e.target.value) : intensity
            )
        );
        setInitial(false);
    };
    useEffect(() => {
        (async () => {
            try {
                const url = `${
                    import.meta.env.VITE_HOST
                }/api/mode/light/automation`;
                const payload = {
                    automatic_options: {
                        lights,
                        intensities,
                    },
                };
                await axios.post(url, payload);
                if (!initial)
                    toast.success("Lighting control setting updated!");
            } catch (err) {
                console.log(err);
                toast.error(
                    "An error occurs while updating lighting control setting."
                );
            }
        })();
    }, [debouncedLights, debouncedIntensities]);

    return (
        <>
            <div className="h-[100%] w-[100%] grid grid-cols-1 items-center text-center">
                {lights.map((light, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center p-2"
                    >
                        <div className="w-[30%] p-2 font-mono font-bold">
                            {/* <TextField
                                value={light}
                                onChange={(e) => handleLightsChange(e, index)}
                                label="Light"
                                variant="outlined"
                                type="number"
                            /> */}
                            Open {light} light:
                        </div>
                        <div className="w-[20%] p-2">
                            <TextField
                                value={intensities[index]}
                                onChange={(e) =>
                                    handleIntensitiesChange(e, index)
                                }
                                label="Intensity"
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

export default LightingAutomatic;
