import React, { useState } from "react";
import dayjs from "dayjs";

import SoilMoistureCard from "./SoilMoistureCard";
import TemperatureCard from "./TemperatureCard";
import LightCard from "./LightCard";
import Calendar from "./Calendar";
import Notification from "./Notification";

const Statistics = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
    return (
        <div className="h-[90vh] w-[80vw] p-4 grid grid-cols-1 md:grid-cols-8 grid-rows-6 gap-4">
            {/* Charts Container */}
            <div className="md:col-span-6 row-span-6 grid grid-cols-1 grid-rows-6 gap-4 bg-gray-100 p-4">
                <SoilMoistureCard />
                <TemperatureCard />
                <LightCard />
            </div>
            {/* Calendar */}
            <div className="col-span-2 row-span-6 grid grid-cols-1 grid-rows-12 shadow-md">
                <Calendar />
                <Notification />
            </div>
        </div>
    );
};

export default Statistics;
