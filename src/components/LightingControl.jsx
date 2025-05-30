import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import lighting from "../assets/lighting-control.svg";
import icon from "../assets/lighting-icon.svg";

import Control from "./Control";
import Loading from "./Loading";

const LightingControl = () => {
    const [mode, setMode] = useState();
    const [options, setOptions] = useState();

    const title = "LIGHTING CONTROL";
    const color = "#2EB62C";
    const image = lighting;
    const currentMeasure = {
        icon: icon,
        title: "Current Intensity",
        unit: "W/m²",
        channel: "sensor_light-sensor",
    };
    useEffect(() => {
        (async () => {
            try {
                const url = `${import.meta.env.VITE_HOST}/api/mode/get`;
                const response = await axios.get(url);
                const data = response.data;
                setMode(data.light.mode);
                if (data.light.mode == "automatic") {
                    setOptions(data.light.automatic_options);
                }
            } catch (err) {
                toast.error("Oh no. An error has occurred. Please try again.");
                console.log(err);
            }
        })();
    }, []);
    return mode ? (
        <Control
            title={title}
            color={color}
            image={image}
            currentMeasure={currentMeasure}
            mode={mode}
            setMode={setMode}
            options={options}
        />
    ) : (
        <Loading />
    );
};

export default LightingControl;
