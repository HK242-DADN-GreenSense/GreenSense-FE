import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import irrigation from "../assets/irrigation-control.svg";
import icon from "../assets/irrigation-icon.svg";

import Control from "./Control";
import Loading from "./Loading";

const IrrigationControl = () => {
    const [mode, setMode] = useState();
    const [options, setOptions] = useState();

    const title = "IRRIGATION CONTROL";
    const color = "#7ad7f0";
    const image = irrigation;
    const currentMeasure = {
        icon: icon,
        title: "Current Humid",
        unit: "ml/m³",
        api: "" || 60, // call API to get current measure
    };
    useEffect(() => {
        (async () => {
            try {
                const url = `${import.meta.env.VITE_HOST}/api/mode/get`;
                const response = await axios.get(url);
                const data = response.data;
                setMode(data.pump.mode);
                if (data.pump.mode == "automatic") {
                    setOptions(data.pump.automatic_options);
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

export default IrrigationControl;
