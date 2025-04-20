import TextField from "@mui/material/TextField";

const IrrigationManualAction = () => {
    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <TextField
                        label="Duration (s)"
                        variant="outlined"
                        type="number"
                    />
                </div>
            </div>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <button
                        onClick={() => console.log("click")}
                        className="bg-[#008000] px-16 py-2 rounded-4xl text-white min-w-[100%] hover:cursor-pointer font-mono"
                    >
                        Irrigate
                    </button>
                </div>
            </div>
        </>
    );
};

export default IrrigationManualAction;
