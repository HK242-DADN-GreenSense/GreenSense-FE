import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Slider from "@mui/material/Slider";

const Automatic = ({ valueRange, options, setting, setSetting }) => {
    const [min, max] = valueRange;
    const handleChangeOption = (e) => {
        setSetting({ ...setting, option: e.target.value });
    };

    const handleChangeRange = (e, newRange) => {
        setSetting({ ...setting, range: newRange });
    };

    return (
        <div className="h-[100%] w-[100%] col-span-1 row-span-4 grid grid-cols-1 grid-rows-5 gap-y-20 items-center text-center mt-10">
            <div className="col-span-1 row-span-4 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <FormControl>
                        <RadioGroup
                            value={setting.option}
                            onChange={(e) => handleChangeOption(e)}
                        >
                            {options.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
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
                    {setting.option && setting.option === "custom" && (
                        <>
                            <div className="col-span-5 row-span-1 col-start-4 grid grid-cols-1 grid-rows-1 items-center text-center mt-2">
                                <div>
                                    <Slider
                                        sx={{
                                            width: 300,
                                            margin: "8 auto",
                                        }}
                                        min={min}
                                        max={max}
                                        value={setting.range}
                                        onChange={(e, newRange) =>
                                            handleChangeRange(e, newRange)
                                        }
                                        valueLabelDisplay="on"
                                    />
                                </div>
                            </div>
                            {/* <div className="col-span-1 row-span-1 col-start-8">
                                <button className="border-2 px-8 py-2 rounded-lg bg-[#030391] text-white font-mono hover:cursor-pointer hover:opacity-50">
                                    Save
                                </button>
                            </div> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Automatic;
