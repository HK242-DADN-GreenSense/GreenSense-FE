import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Statistics from "../components/Statistics";
import IrrigationControl from "../components/IrrigationControl";
import TemperatureControl from "../components/TemperatureControl";
import LightingControl from "../components/LightingControl";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route
                        index
                        element={<Navigate to="/statistics" replace />}
                    />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="irrigation" element={<IrrigationControl />} />
                    <Route
                        path="temperature"
                        element={<TemperatureControl />}
                    />
                    <Route path="lighting" element={<LightingControl />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
