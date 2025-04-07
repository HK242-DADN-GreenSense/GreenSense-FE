import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const LightCard = ({ xAxis, yAxis, latest }) => {
    const timeData = xAxis ? xAxis : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const moistureData = yAxis
        ? yAxis
        : [10, 20, 30, 10, 30, 50, 30, 40, 60, 80];

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md w-full m-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Light
                </h2>
                <span className="text-xs sm:text-sm md:text-base text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {latest ? latest : 30} W/m²
                </span>
            </div>

            <div className="w-full overflow-x-auto">
                <LineChart
                    xAxis={[{ data: timeData, label: "Time" }]}
                    series={[
                        {
                            data: moistureData,
                            label: "Light (W/m²)",
                            color: "#1C9B00",
                            area: true,
                        },
                    ]}
                    height={150} // Base height for mobile
                    width={undefined}
                    margin={{ top: 10, bottom: 50, left: 40, right: 10 }}
                    sx={{
                        // Responsive height using CSS media queries
                        "& .MuiCharts-root": {
                            height: { xs: "200px", sm: "250px", md: "300px" },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default LightCard;
