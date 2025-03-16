import { useMainLayoutContext } from "@/providers/MainLayoutProviders";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function PlanningModule() {

    const {setModule} = useMainLayoutContext()

    useEffect(() => {
        setModule("Planning");
    }, []);

    return (
        <main>
            <Outlet/>
        </main>
    )
}