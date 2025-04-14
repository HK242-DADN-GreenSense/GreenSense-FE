import "./styles/App.css";

import SoilMoistureCard from "./components/SoilMoistureCard";
import TemperatureCard from "./components/TemperatureCard";
import LightCard from "./components/LightCard";
import Calendar from "./components/Calendar";
import Statistics from "./layouts/Statistics";
function App() {
    return (
        <>
            {/* <SoilMoistureCard />
            <TemperatureCard />
            <LightCard />
            <Calendar /> */}
            <Statistics />
        </>
    );
}

export default App;
