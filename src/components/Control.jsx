import React, { useState, useEffect } from "react";

function Control(props) {
    const listOfButtons = ["Automatic", "Scheduled", "Manual"];
    const listModes = ["automatic", "scheduled", "manual"];

    const { title, color, actions, image, currentMeasure } = props;

    const [latestValueMeasured, setLatestValueMeasured] = useState(0);

    const [mode, setMode] = useState(
        listModes[Math.floor(Math.random() * listModes.length)]
    );

    useEffect(() => {
        setLatestValueMeasured(60);
    }, []);

    return (
        <div className="h-[90vh] w-[80vw] grid grid-cols-4 grid-rows-6 gap-4 p-4 items-center">
            {/* TITLE */}
            <h1
                className="h-[100%] w-[100%] col-span-4 row-span-1 grid grid-cols-1 grid-rows-1 items-center font-mono text-center text-[3em] font-bold"
                style={{ color: color }}
            >
                {title}
            </h1>
            {/* BUTTON */}
            <div className="h-[100%] w-[100%] col-span-2 row-span-1 col-start-2 flex justify-between items-center">
                {listOfButtons.map((button, index) => (
                    <button
                        key={index}
                        style={{ backgroundColor: color }}
                        className={
                            mode === button.toLowerCase()
                                ? "text-black rounded-2xl border-2 p-4 m-8 w-[30%] text-[1em] text-center font-mono hover:cursor-pointer hover:opacity-50"
                                : "text-black rounded-2xl p-4 m-8 w-[30%] text-[1em] text-center font-mono hover:cursor-pointer hover:opacity-50"
                        }
                        onClick={() => setMode(button.toLowerCase())}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <div className="h-[100%] w-[100%] col-span-4 row-span-4 grid grid-cols-2 grid-rows-6 gap-4 p-4 items-center">
                {/* IMAGE */}
                <img
                    src={image}
                    className="h-[100%] w-[100%] col-span-1 row-span-6 grid grid-cols-1 grid-rows-1 items-center text-center"
                ></img>
                {/* CONTROL */}
                <div className="h-[100%] w-[100%] col-span-1 row-span-8 items-center grid grid-cols-1 grid-rows-6 gap-4 p-4">
                    {/* CURRENT MEASURE */}
                    <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                        <div className="flex justify-center items-center">
                            <div className="max-h-[50%] max-w-[50%] inline-block m-4">
                                <img
                                    src={currentMeasure.icon}
                                    className="h-[60%] w-[100%] inline-block"
                                ></img>
                            </div>
                            <p className="text-3xl font-mono m-4">
                                {currentMeasure.title}:{" "}
                                <span>{latestValueMeasured}</span>{" "}
                                {currentMeasure.unit}
                            </p>
                        </div>
                    </div>
                    {/* CONTROL SECTION */}
                    {actions[mode]}
                </div>
            </div>
        </div>
    );
}

export default Control;
