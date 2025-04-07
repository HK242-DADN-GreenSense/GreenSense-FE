import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import SoilMoistureCard from "./components/SoilMoistureCard";

function App() {
    return (
        <>
            <SoilMoistureCard />
            <SoilMoistureCard />
            <SoilMoistureCard />
        </>
    );
}

export default App;
