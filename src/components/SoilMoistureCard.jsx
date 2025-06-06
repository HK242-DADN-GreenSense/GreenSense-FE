import React from "react";
import Card from "./Card";

const SoilMoistureCard = ({ xAxis, yAxis, latest }) => {
    // const timeData = xAxis.length
    //     ? xAxis
    //     : Array.from({ length: 24 }, (_, i) => i);
    // const lightData = yAxis.length
    //     ? yAxis
    //     : Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
    const timeData = xAxis;
    const lightData = yAxis;
    const latestValue = latest ? latest : 37;

    return (
        <Card
            xAxis={timeData}
            yAxis={lightData}
            latest={latestValue}
            chartInfo={{
                title: "Humid",
                unit: "ml/m³",
                colorOfChart: "#1B41FF",
            }}
        />
    );
};

export default SoilMoistureCard;

// return (
//     <div className="p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md m-8">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-4">
//             <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
//                 Soil Moisture
//             </h2>
//             <span className="text-xs sm:text-sm md:text-base text-gray-600 bg-gray-100 px-2 py-1 rounded">
//                 {latest ? latest : 37} ml/m³
//             </span>
//         </div>

//         <div className="w-full overflow-x-auto">
//             <LineChart
//                 xAxis={[{ data: timeData, label: "Time" }]}
//                 series={[
//                     {
//                         data: soilMoistureData,
//                         color: "#1B41FF",
//                         area: true,
//                     },
//                 ]}
//                 height={150} // Base height for mobile
//                 width={undefined}
//                 margin={{ top: 10, bottom: 50, left: 40, right: 10 }}
//                 sx={{
//                     // Responsive height using CSS media queries
//                     "& .MuiCharts-root": {
//                         height: { xs: "200px", sm: "250px", md: "300px" },
//                     },
//                 }}
//             />
//         </div>
//     </div>
// );
