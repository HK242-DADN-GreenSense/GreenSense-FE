import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const Manual = ({ children, setting, setSetting, unit, valueRange }) => {
    const [min, max] = valueRange;

    const marks = setting.expectedRange.map((value) => ({
        value: value,
        label: value,
    }));

    const handleRangeChange = (e, newRange) => {
        setSetting({ ...setting, expectedRange: newRange });
    };

    const handleWarningChange = (e) => {
        setSetting({ ...setting, warning: e.target.checked });
    };

    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div>
                    <Typography sx={{ fontFamily: "mono" }} gutterBottom>
                        Expected range ({unit})
                    </Typography>
                    <Slider
                        sx={{
                            width: 300,
                            margin: "8 auto",
                        }}
                        value={setting.expectedRange}
                        onChange={(e, newRange) =>
                            handleRangeChange(e, newRange)
                        }
                        min={min}
                        max={max}
                        marks={marks}
                        aria-label="Always visible"
                    />
                </div>
            </div>
            {children}
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center">
                <div className="flex justify-center align-items-center text-center items-center">
                    <Checkbox
                        checked={setting.warning}
                        onChange={(e) => handleWarningChange(e)}
                    />
                    <p className="align-middle font-mono">Warning to user</p>
                </div>
            </div>
        </>
    );
};

export default Manual;
