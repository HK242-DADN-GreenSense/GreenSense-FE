import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
    return (
        <div className="h-[90vh] w-[80vw] grid grid-cols-1 grid-rows-1 p-4 items-center align-middle">
            <div className="flex justify-center">
                <CircularProgress />
            </div>
        </div>
    );
};

export default Loading;
