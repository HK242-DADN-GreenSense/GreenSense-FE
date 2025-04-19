import React from "react";

import SoilMoistureCard from "./SoilMoistureCard";
import TemperatureCard from "./TemperatureCard";
import LightCard from "./LightCard";
import Calendar from "./Calendar";

const Statistics = () => {
    return (
        <div className="h-[90vh] w-[80vw] p-4 grid grid-cols-1 md:grid-cols-8 gap-4">
            {/* Charts Container */}
            <div className="md:col-span-6 grid grid-cols-1 gap-4 bg-gray-100 p-4">
                <SoilMoistureCard />
                <TemperatureCard />
                <LightCard />
            </div>
            {/* Calendar */}
            <div className="col-span-2 bg-white shadow-md">
                <Calendar />
                {/* <Notification /> */}
            </div>
        </div>
    );
};

export default Statistics;
