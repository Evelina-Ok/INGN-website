import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";

export function MainLayout () {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}