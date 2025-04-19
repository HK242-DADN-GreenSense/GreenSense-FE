import { useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import garbage from "../assets/garbage-icon.svg";

const ScheduleAction = () => {
    const [action, setAction] = useState(1);
    return (
        <div className="flex justify-center items-center">
            <div className="w-[30%] p-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="Time" />
                </LocalizationProvider>
            </div>
            <div className="w-[20%]">
                <FormControl sx={{ width: 100 }}>
                    <Select
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                    >
                        <MenuItem value={1}>Open</MenuItem>
                        <MenuItem value={0}>Close</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="max-h-[10%] max-w-[10%] inline-block m-4">
                <img
                    src={garbage}
                    className="h-[50%] w-[50%] inline-block hover:cursor-pointer"
                ></img>
            </div>
        </div>
    );
};

export default ScheduleAction;
