import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import SoilMoistureCard from "./components/SoilMoistureCard";
import TemperatureCard from "./components/TemperatureCard";
import LightCard from "./components/LightCard";

function App() {
    return (
        <>
            <SoilMoistureCard />
            <TemperatureCard />
            <LightCard />
        </>
    );
}

export default App;
