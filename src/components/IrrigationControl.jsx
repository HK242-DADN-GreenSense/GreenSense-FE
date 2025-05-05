import irrigation from "../assets/irrigation-control.svg";
import icon from "../assets/irrigation-icon.svg";

import Control from "./Control";
import IrrigationAutomatic from "./IrrigationAutomatic";
import IrrigationSchedule from "./IrrigationSchedule";
import IrrigationManual from "./IrrigationManual";

const IrrigationControl = () => {
    const title = "IRRIGATION CONTROL";
    const color = "#7ad7f0";
    const image = irrigation;
    const valueRange = [0, 60];
    const currentMeasure = {
        icon: icon,
        title: "Current Moisture",
        unit: "ml/m³",
        api: "" || 60, // call API to get current measure
    };
    const actions = {
        automatic: <IrrigationAutomatic valueRange={valueRange} />,
        scheduled: <IrrigationSchedule valueRange={valueRange} />,
        manual: <IrrigationManual valueRange={valueRange} />,
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

export default IrrigationControl;
