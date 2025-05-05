import { ToastContainer, toast } from "react-toastify";

import ManualSwitch from "./ManualSwitch";

const TempAndLigntManual = ({ setting, setSetting, name }) => {
    const handleSwitch = (e) => {
        toast.success(`Turn ${e.target.checked ? "On" : "Off"} the ${name}`);
        setSetting({
            ...setting,
            turnOn: e.target.checked,
        });
    };

    return (
        <div className="h-[100%] w-[100%] col-span-1 row-span-2 grid grid-cols-1 grid-rows-1 items-center text-center">
            <div className="flex justify-center align-items-center text-center items-center">
                <ManualSwitch
                    checked={setting.turnOn}
                    onChange={(e) => handleSwitch(e)}
                />
            </div>
            <ToastContainer />
        </div>
    );
};

export default TempAndLigntManual;
