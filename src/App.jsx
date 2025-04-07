import "./styles/App.css";

import SoilMoistureCard from "./components/SoilMoistureCard";
import TemperatureCard from "./components/TemperatureCard";
import LightCard from "./components/LightCard";
import Calendar from "./components/Calendar";

function App() {
    return (
        <>
            <SoilMoistureCard />
            <TemperatureCard />
            <LightCard />
            <Calendar />
        </>
    );
}

export default App;
