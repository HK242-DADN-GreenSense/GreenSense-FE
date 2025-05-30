import axios from "axios";

import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";

import garbage from "../assets/garbage-icon.svg";

const CronJob = ({ id, trigger_options, action_options, setRender }) => {
    const handleDelete = () => {
        const url = `${import.meta.env.VITE_HOST}/api/job/remove`;
        axios
            .delete(url, { data: { job_id: id } })
            .then((res) => {
                toast.success("Remove job successfully.");
                setRender(false);
            })
            .catch((err) => {
                toast.error("Oh no. An error has occurred. Please try again.");
            });
    };

    const { year, month, day, week, day_of_week, hour, minute, second } =
        trigger_options;
    const triggerOptions = [
        { value: year, label: "Year" },
        { value: month, label: "Month" },
        { value: day, label: "Day" },
        { value: week, label: "Week" },
        { value: day_of_week, label: "Day of Week" },
        { value: hour, label: "Hour" },
        { value: minute, label: "Minute" },
        { value: second, label: "Second" },
    ];
    return (
        <>
            <div className="grid grid-cols-12 items-center align-middle">
                <p className="m-2 text-right col-span-1 col-start-1">Cron</p>
                <div className="col-start-2 col-span-8 flex justify-center items-center">
                    {triggerOptions.map((option, index) =>
                        option.value ? (
                            <div key={index} className="m-1">
                                <TextField
                                    value={option.value}
                                    label={option.label}
                                    variant="outlined"
                                    type="number"
                                    disable
                                />
                            </div>
                        ) : (
                            <></>
                        )
                    )}
                </div>
                <div className="col-start-10 col-span-2">
                    <div className="m-1">
                        <TextField
                            value={Object.values(action_options)[0]}
                            label={
                                Object.keys(
                                    action_options
                                )[0][0].toUpperCase() +
                                Object.keys(action_options)[0].slice(1)
                            }
                            variant="outlined"
                            type="number"
                            disable
                        />
                    </div>
                </div>
                <div className="col-start-12 inline-block m-4">
                    <img
                        onClick={() => handleDelete()}
                        src={garbage}
                        className="h-[50%] w-[50%] inline-block hover:cursor-pointer"
                    ></img>
                </div>
            </div>
        </>
    );
};

export default CronJob;
