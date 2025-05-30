import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import CronJob from "./CronJob";
import IntervalJob from "./IntervalJob";
import Loading from "./Loading";

const TemperatureSchedule = () => {
    const [jobList, setJobList] = useState([]);
    const [open, setOpen] = useState(false);
    const [option, setOption] = useState("cron");
    const [render, setRender] = useState(false);
    const cronTriggerOptions = [
        { name: "year", label: "Year" },
        { name: "month", label: "Month" },
        { name: "day", label: "Day" },
        { name: "week", label: "Week" },
        { name: "dayOfWeek", label: "Day of Week" },
        { name: "hour", label: "Hour" },
        { name: "minute", label: "Minute" },
        { name: "second", label: "Second" },
    ];
    const intervalTriggerOptions = [
        { name: "week", label: "Week" },
        { name: "day", label: "Day" },
        { name: "hour", label: "Hour" },
        { name: "minute", label: "Minute" },
        { name: "second", label: "Second" },
    ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        (async () => {
            const url = `${
                import.meta.env.VITE_HOST
            }/api/job/get?device_id=servo`;
            const res = await axios.get(url);
            const jobs = res.data.job_list;
            setJobList(
                jobs.map((job) => ({
                    id: job.job_id,
                    trigger: job.trigger,
                    trigger_options: job.trigger_options,
                    action_options: job.action_options,
                }))
            );
            setRender(true);
        })();
    }, [render]);

    return render ? (
        <>
            {jobList.map((job) =>
                job.trigger == "cron" ? (
                    <CronJob
                        key={job.id}
                        id={job.id}
                        trigger_options={job.trigger_options}
                        action_options={job.action_options}
                        setRender={setRender}
                    />
                ) : (
                    <IntervalJob
                        key={job.id}
                        id={job.id}
                        trigger_options={job.trigger_options}
                        action_options={job.action_options}
                        setRender={setRender}
                    />
                )
            )}
            <Button variant="outlined" onClick={handleClickOpen}>
                Add More Jobs
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: "form",
                        onSubmit: (event) => {
                            event.preventDefault();
                            const url = `${
                                import.meta.env.VITE_HOST
                            }/api/job/add`;
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(
                                formData.entries()
                            );
                            let payload = {};
                            if (option == "cron") {
                                const {
                                    year,
                                    month,
                                    day,
                                    week,
                                    dayOfWeek,
                                    hour,
                                    minute,
                                    second,
                                    angle,
                                } = formJson;
                                payload = {
                                    device_id: "servo",
                                    trigger: "cron",
                                    trigger_options: {
                                        year: parseInt(year),
                                        month: parseInt(month),
                                        day: parseInt(day),
                                        week: parseInt(week),
                                        day_of_week: parseInt(dayOfWeek),
                                        hour: parseInt(hour),
                                        minute: parseInt(minute),
                                        second: parseInt(second),
                                    },
                                    action: "on",
                                    action_options: {
                                        angle: parseInt(angle),
                                    },
                                };
                            } else {
                                const {
                                    week,
                                    day,
                                    hour,
                                    minute,
                                    second,
                                    angle,
                                } = formJson;
                                payload = {
                                    device_id: "servo",
                                    trigger: "interval",
                                    trigger_options: {
                                        weeks: parseInt(week),
                                        days: parseInt(day),
                                        hours: parseInt(hour),
                                        minutes: parseInt(minute),
                                        seconds: parseInt(second),
                                    },
                                    action: "on",
                                    action_options: {
                                        angle: parseInt(angle),
                                    },
                                };
                            }
                            payload.trigger_options = Object.entries(
                                payload.trigger_options
                            ).reduce(
                                (acc, item) =>
                                    item[1]
                                        ? { ...acc, [item[0]]: item[1] }
                                        : acc,
                                {}
                            );
                            axios
                                .post(url, payload)
                                .then((res) => {
                                    toast.success("Add job successfully.");
                                    setRender(false);
                                    handleClose();
                                })
                                .catch((err) => {
                                    console.log(err);
                                    toast.error(
                                        "Oh no. An error has occurred. Please try again."
                                    );
                                });
                        },
                    },
                }}
            >
                <DialogTitle>Add Jobs</DialogTitle>
                <Button
                    variant="outlined"
                    onClick={() =>
                        setOption((prev) =>
                            prev == "cron" ? "interval" : "cron"
                        )
                    }
                    sx={{ margin: 2 }}
                >
                    {option}
                </Button>
                <TextField
                    required
                    margin="dense"
                    name="angle"
                    label="Angle"
                    type="number"
                    variant="outlined"
                    sx={{ margin: 2 }}
                />
                <DialogContent dividers>
                    {option == "cron" ? (
                        <>
                            {cronTriggerOptions.map((options, index) => (
                                <TextField
                                    margin="dense"
                                    name={options.name}
                                    label={options.label}
                                    type="number"
                                    variant="standard"
                                    sx={{ margin: 2 }}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {intervalTriggerOptions.map((options, index) => (
                                <TextField
                                    margin="dense"
                                    name={options.name}
                                    label={options.label}
                                    type="number"
                                    variant="standard"
                                    sx={{ margin: 2 }}
                                />
                            ))}
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Add Job</Button>
                </DialogActions>
            </Dialog>
        </>
    ) : (
        <Loading />
    );
};

export default TemperatureSchedule;
