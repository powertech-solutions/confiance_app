import { useMainLayoutContext } from "@/providers/MainLayoutProviders";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function SupplyModule() {

    const {setModule} = useMainLayoutContext()

    useEffect(() => {
        setModule("Supply");
    }, []);

    return (
        <main>
            <Outlet/>
        </main>
    )
}