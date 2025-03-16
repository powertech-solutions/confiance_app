import { useMainLayoutContext } from "@/providers/MainLayoutProviders";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function FinanceModule() {

    const {setModule} = useMainLayoutContext()

    useEffect(() => {
        setModule("Finance");
    }, []);

    return (
        <main>
            <Outlet/>
        </main>
    )
}