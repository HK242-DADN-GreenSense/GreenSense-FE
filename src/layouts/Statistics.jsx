import React from "react";

import SoilMoistureCard from "../components/SoilMoistureCard";
import TemperatureCard from "../components/TemperatureCard";
import LightCard from "../components/LightCard";
import Calendar from "../components/Calendar";

const Statistics = () => {
    return (
        <div className="min-h-[100%] min-w-[100%] p-4 grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Charts Container */}
            <div className="md:col-span-4 grid grid-cols-1 gap-4 bg-gray-100">
                <SoilMoistureCard />
                <TemperatureCard />
                <LightCard />
            </div>
            {/* Calendar */}
            <div className="bg-white shadow-md">
                <Calendar />
            </div>
        </div>
    );
};

export default Statistics;
