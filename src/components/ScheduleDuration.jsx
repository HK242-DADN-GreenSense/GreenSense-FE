import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";

import garbage from "../assets/garbage-icon.svg";

const ScheduleDuration = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[30%] p-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="Time" />
                </LocalizationProvider>
            </div>
            <div className="w-[20%]">
                <TextField
                    label="Duration (s)"
                    variant="outlined"
                    type="number"
                />
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

export default ScheduleDuration;
