import lighting from "../assets/lighting-control.svg";
import icon from "../assets/lighting-icon.svg";

import Control from "./Control";
import LightingAutomatic from "./LightingAutomatic";
import LightingSchedule from "./LightingSchedule";
import LightingManual from "./LightingManual";

const LightingControl = () => {
    const title = "LIGHTING CONTROL";
    const color = "#2EB62C";
    const image = lighting;
    const valueRange = [10, 1000];
    const currentMeasure = {
        icon: icon,
        title: "Current Light",
        unit: "W/m²",
        api: "" || 300, // call API to get current measure
    };
    const actions = {
        automatic: <LightingAutomatic valueRange={valueRange} />,
        scheduled: <LightingSchedule valueRange={valueRange} />,
        manual: <LightingManual valueRange={valueRange} />,
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

export default LightingControl;
