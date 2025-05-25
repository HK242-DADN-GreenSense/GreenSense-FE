import React, { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

import SoilMoistureCard from "./SoilMoistureCard";
import TemperatureCard from "./TemperatureCard";
import LightCard from "./LightCard";
import Calendar from "./Calendar";
import Notification from "./Notification";
import { useEffect } from "react";

const Statistics = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
    const [soilMoisture, setSoilMoisture] = useState({
        xAxis: [],
        yAxis: [],
        latest: 0,
    });
    const [temperature, setTemperature] = useState({
        xAxis: [],
        yAxis: [],
        latest: 0,
    });
    const [light, setLight] = useState({
        xAxis: [],
        yAxis: [],
        latest: 0,
    });
    const year = selectedDate.$d.getFullYear();
    const month = selectedDate.$d.getMonth() + 1;
    const date = selectedDate.$d.getDate();
    useEffect(() => {
        const url = `${
            import.meta.env.VITE_HOST
        }/api/sensor_data/humid?year=${year}&month=${month}&date=${date}`;
        axios
            .get(url)
            .then((res) => {
                const humidData = res.data.data;
                const xAxis = humidData.map((data) => {
                    const time = new Date(data.time.$date);
                    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
                });
                const yAxis = humidData.map((data) => data.data);
                setSoilMoisture((prev) => ({ ...prev, xAxis, yAxis }));
            })
            .catch((err) => console.log(err));
    }, [selectedDate]);
    useEffect(() => {
        const url = `${
            import.meta.env.VITE_HOST
        }/api/sensor_data/temperature?year=${year}&month=${month}&date=${date}`;
        axios
            .get(url)
            .then((res) => {
                const temperatureData = res.data.data;
                const xAxis = temperatureData.map((data) => {
                    const time = new Date(data.time.$date);
                    console.log(time);
                    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
                });
                const yAxis = temperatureData.map((data) => data.data);
                console.log(xAxis, yAxis);
                setTemperature((prev) => ({ ...prev, xAxis, yAxis }));
            })
            .catch((err) => console.log(err));
    }, [selectedDate]);
    useEffect(() => {
        const url = `${
            import.meta.env.VITE_HOST
        }/api/sensor_data/light?year=${year}&month=${month}&date=${date}`;
        axios
            .get(url)
            .then((res) => {
                const lightData = res.data.data;
                const xAxis = lightData.map((data) => {
                    const time = new Date(data.time.$date);
                    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
                });
                const yAxis = lightData.map((data) => data.data);
                setLight((prev) => ({ ...prev, xAxis, yAxis }));
            })
            .catch((err) => console.log(err));
    }, [selectedDate]);
    return (
        <div className="h-[90vh] w-[80vw] p-4 grid grid-cols-1 md:grid-cols-8 grid-rows-6 gap-4">
            {/* Charts Container */}
            <div className="md:col-span-6 row-span-6 grid grid-cols-1 grid-rows-6 gap-4 bg-gray-100 p-4">
                <SoilMoistureCard
                    xAxis={soilMoisture.xAxis}
                    yAxis={soilMoisture.yAxis}
                    latest={soilMoisture.latest}
                />
                <TemperatureCard
                    xAxis={temperature.xAxis}
                    yAxis={temperature.yAxis}
                    latest={temperature.latest}
                />
                <LightCard
                    xAxis={light.xAxis}
                    yAxis={light.yAxis}
                    latest={light.latest}
                />
            </div>
            {/* Calendar */}
            <div className="col-span-2 row-span-6 grid grid-cols-1 grid-rows-12 shadow-md">
                <Calendar setSelectedDate={setSelectedDate} />
                <Notification />
            </div>
        </div>
    );
};

export default Statistics;
