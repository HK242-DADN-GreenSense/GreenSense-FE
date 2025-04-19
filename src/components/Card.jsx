import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Card = ({ xAxis, yAxis, latest, chartInfo }) => {
    const { title, unit, colorOfChart } = chartInfo || {
        title: null,
        unit: null,
        colorOfChart: null,
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md m-2">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {title ? title : "Title of the chart"}
                </h2>
                <span className="text-xs sm:text-sm md:text-base text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {latest ? latest : "###"} {unit ? unit : "Unit of measure"}
                </span>
            </div>

            <div className="w-full overflow-x-auto">
                <LineChart
                    xAxis={[{ data: xAxis, label: "Time" }]}
                    series={[
                        {
                            data: yAxis,
                            color: colorOfChart || "#000000",
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

export default Card;
