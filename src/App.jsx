import "./styles/App.css";

import SoilMoistureCard from "./components/SoilMoistureCard";
import TemperatureCard from "./components/TemperatureCard";
import LightCard from "./components/LightCard";
import Calendar from "./components/Calendar";
import Statistics from "./components/Statistics";
import Control from "./components/Control";
import ManualSwitch from "./components/ManualSwitch";
import IrrigationControl from "./components/IrrigationControl";
import LightingControl from "./components/LightingControl";
import TemperatureControl from "./components/TemperatureControl";
function App() {
    return (
        <>
            {/* <SoilMoistureCard />
            <TemperatureCard />
            <LightCard />
            <Calendar /> */}
            <IrrigationControl />
            <TemperatureControl />
            <LightingControl />
            <Statistics />
        </>
    );
}

export default App;
