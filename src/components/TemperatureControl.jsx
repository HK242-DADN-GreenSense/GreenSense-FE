import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import temperature from "../assets/temperature-control.svg";
import icon from "../assets/temperature-icon.svg";

import Control from "./Control";
import Loading from "./Loading";

const TemperatureControl = () => {
    const [mode, setMode] = useState();
    const [options, setOptions] = useState();

    const title = "TEMPERATURE CONTROL";
    const color = "#FD7F2C";
    const image = temperature;
    const currentMeasure = {
        icon: icon,
        title: "Current Temperature",
        unit: "°C",
        channel: "sensor_temperature",
    };
    useEffect(() => {
        (async () => {
            try {
                const url = `${import.meta.env.VITE_HOST}/api/mode/get`;
                const response = await axios.get(url);
                const data = response.data;
                setMode(data.servo.mode);
                if (data.servo.mode == "automatic") {
                    setOptions(data.servo.automatic_options);
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

export default TemperatureControl;
