import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Schedule = ({ setting, setSetting, children }) => {
    const actions = [
        { value: "init", label: "Select action" },
        { value: "nothing", label: "Do nothing" },
        { value: "warning", label: "Warning" },
        { value: "warningAndTakeAction", label: "Warning and Take action" },
    ];

    const handleActionChange = (e) => {
        setSetting({ ...setting, currentAction: e.target.value });
    };

    const handleAddSchedule = (e) => {
        setting.schedule.push({
            time: new Date(),
            duration: 15,
            action: 1,
        });
        setSetting({ ...setting });
    };
    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div className="flex items-center justify-center">
                    <FormControl sx={{ width: 300 }}>
                        <InputLabel id="action-select-label">Action</InputLabel>
                        <Select
                            labelId="action-selectl"
                            id="action-select"
                            value={setting.currentAction}
                            label="Action"
                            onChange={(e) => handleActionChange(e)}
                        >
                            {actions.map((action, index) => (
                                <MenuItem key={index} value={action.value}>
                                    {action.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/* <button className="px-8 py-2 bg-[#7949FF] text-white rounded-3xl hover:cursor-pointer max-w-[60%] font-mono align-middle m-4">
                        Update
                    </button> */}
                </div>
            </div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-2 text-center overflow-auto">
                {children}
            </div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center m-4">
                <div>
                    <button
                        onClick={handleAddSchedule}
                        className="px-8 py-2 bg-[#7949FF] text-white rounded-3xl hover:cursor-pointer w-[60%] font-mono"
                    >
                        Add more schedule
                    </button>
                </div>
            </div>
        </>
    );
};

export default Schedule;
