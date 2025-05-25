import Alert from "@mui/material/Alert";

const Notification = () => {
    const notifications = [
        { message: "This is a success Alert.", type: "success" },
        { message: "This is an info Alert.", type: "info" },
        { message: "This is a warning Alert.", type: "warning" },
        { message: "This is an error Alert.", type: "error" },
    ];

    const numbers = Math.floor(Math.random() * 100 + 1);
    const arr = [];
    for (let i = 0; i < numbers; i++) {
        arr.push(
            notifications[Math.floor(Math.random() * notifications.length)]
        );
    }
    return (
        <div className="col-span-2 overflow-auto row-span-7 p-2">
            {arr.map((notification, index) => (
                <div key={index} className="p-1">
                    <Alert severity={notification.type}>
                        {notification.message}
                    </Alert>
                </div>
            ))}
        </div>
    );
};

export default Notification;
