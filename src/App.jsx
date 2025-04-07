import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import SoilMoistureCard from "./components/SoilMoistureCard";
import TemperatureCard from "./components/TemperatureCard";

function App() {
    return (
        <>
            <SoilMoistureCard />
            <TemperatureCard />
            <SoilMoistureCard />
        </>
    );
}

export default App;
