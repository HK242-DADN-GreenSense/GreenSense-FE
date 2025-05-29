import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const Manual = ({ children, setting, setSetting, unit, valueRange }) => {
    const [min, max] = valueRange;

    const marks = [
        {
            value: setting.expectedRange,
            label: setting.expectedRange,
        },
    ];

    const handleRangeChange = (e, newRange) => {
        setSetting({ ...setting, expectedRange: newRange });
    };

    const handleWarningChange = (e) => {
        setSetting({ ...setting, warning: e.target.checked });
    };

    return (
        <>
            <div className="h-[100%] w-[100%] col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 items-center text-center"></div>
            {children}
        </>
    );
};

export default Manual;
