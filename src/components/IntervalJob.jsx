import axios from "axios";

import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";

import garbage from "../assets/garbage-icon.svg";

const IntervalJob = ({ id, trigger_options, action_options, setRender }) => {
    const handleDelete = () => {
        const url = `${import.meta.env.VITE_HOST}/api/job/remove`;
        console.log(id);
        axios
            .delete(url, { data: { job_id: id } })
            .then((res) => {
                toast.success("Remove job successfully.");
                setRender(false);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Oh no. An error has occurred. Please try again.");
            });
    };

    const { days, weeks, hours, minutes, seconds } = trigger_options;
    const triggerOptions = [
        { value: weeks, label: "Week" },
        { value: days, label: "Day" },
        { value: hours, label: "Hour" },
        { value: minutes, label: "Minute" },
        { value: seconds, label: "Second" },
    ];
    return (
        <>
            <div className="grid grid-cols-12 items-center align-middle">
                <p className="m-2 col-span-1 text-right col-start-1">
                    Interval
                </p>
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

export default IntervalJob;
