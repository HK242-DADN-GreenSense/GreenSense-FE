import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const ManualSwitch = styled((props) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 168, // Increased from 42px (4x)
    height: 104, // Increased from 26px (4x)
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 8, // Increased from 2px (4x)
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(64px)", // Increased from 16px (4x)
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: "#65C466",
                opacity: 1,
                border: 0,
                ...theme.applyStyles("dark", {
                    backgroundColor: "#2ECA45",
                }),
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "24px solid #fff", // Increased from 6px (4x)
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color: theme.palette.grey[100],
            ...theme.applyStyles("dark", {
                color: theme.palette.grey[600],
            }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.7,
            ...theme.applyStyles("dark", {
                opacity: 0.3,
            }),
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 88, // Increased from 22px (4x)
        height: 88, // Increased from 22px (4x)
    },
    "& .MuiSwitch-track": {
        borderRadius: 104 / 2, // Increased from 26 / 2 (4x)
        backgroundColor: "#E9E9EA",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
        ...theme.applyStyles("dark", {
            backgroundColor: "#39393D",
        }),
    },
}));

export default ManualSwitch;
