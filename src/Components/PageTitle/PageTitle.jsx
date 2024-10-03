import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageTitle = ({title}) => {
    const Location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [location, title]);

    return null;
}