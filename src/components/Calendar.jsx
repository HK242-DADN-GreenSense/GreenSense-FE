import React, { useState } from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import useDebounce from "../hooks/useDebounce";

const Calendar = ({ setSelectedDate }) => {
    const [value, setValue] = useState(dayjs(new Date()));
    return (
        <div className="shadow-md row-span-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    value={value}
                    onChange={(value) => {
                        setValue(value);
                        setSelectedDate(value);
                    }}
                    sx={{ backgroundColor: "#fff" }}
                    slotProps={{
                        calendarHeader: {
                            sx: { color: "#000" },
                        },
                    }}
                />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;
