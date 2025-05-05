import temperature from "../assets/temperature-control.svg";
import icon from "../assets/temperature-icon.svg";

import Control from "./Control";
import TemperatureAutomatic from "./TemperatureAutomatic";
import TemperatureSchedule from "./TemperatureSchedule";
import TemperatureManual from "./TemperatureManual";

const TemperatureControl = () => {
    const title = "TEMPERATURE CONTROL";
    const color = "#FD7F2C";
    const image = temperature;
    const valueRange = [0, 60];
    const currentMeasure = {
        icon: icon,
        title: "Current Temperature",
        unit: "°C",
        api: "" || 60, // call API to get current measure
    };
    const actions = {
        automatic: <TemperatureAutomatic valueRange={valueRange} />,
        scheduled: <TemperatureSchedule valueRange={valueRange} />,
        manual: <TemperatureManual valueRange={valueRange} />,
    };
    return (
        <Control
            title={title}
            color={color}
            image={image}
            currentMeasure={currentMeasure}
            actions={actions}
        />
    );
};

export default TemperatureControl;
