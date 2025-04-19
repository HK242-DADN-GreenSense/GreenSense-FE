import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Slider from "@mui/material/Slider";

const valuetext = (value) => `${value}°C`;

const AutomaticControl = () => {
    const labels = ["🌵 Dry", "🌻 Average", "🌾 Wet", "⚙️ Custom"];
    const values = ["dry", "average", "wet", "custom"];

    const [range, setRange] = useState([20, 80]);

    const [value, setValue] = useState(
        values[Math.floor(Math.random() * values.length)]
    );

    return (
        <div className="h-[100%] w-[100%] col-span-1 row-span-4 grid grid-cols-1 grid-rows-5 gap-y-20 items-center text-center mt-10">
            <div className="col-span-1 row-span-4 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <FormControl>
                        <RadioGroup
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                console.log(e.target.value);
                            }}
                        >
                            {values.map((v, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={v}
                                    control={<Radio />}
                                    label={labels[index]}
                                    sx={{
                                        margin: 2,
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 30,
                                        },
                                        "& .MuiTypography-root": {
                                            fontSize: 30,
                                            fontFamily: "mono",
                                        },
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className="col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div className="grid grid-cols-10 grid-rows-1">
                    {value === "custom" && (
                        <>
                            <div className="col-span-5 row-span-1 col-start-3 grid grid-cols-1 grid-rows-1 items-center text-center mt-2">
                                <div>
                                    <Slider
                                        sx={{
                                            width: 300,
                                            margin: "8 auto",
                                        }}
                                        getAriaLabel={() => "Moisture range"}
                                        value={range}
                                        onChange={(e, newRange) => {
                                            setRange(newRange);
                                            console.log(newRange);
                                        }}
                                        valueLabelDisplay="on"
                                        getAriaValueText={valuetext}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 col-start-8">
                                <button className="border-2 px-8 py-2 rounded-lg bg-[#030391] text-white font-mono hover:cursor-pointer">
                                    Save
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AutomaticControl;
