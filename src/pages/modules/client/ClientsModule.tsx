import { useMainLayoutContext } from "@/providers/MainLayoutProviders";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function ClientModule() {
    const {setModule} = useMainLayoutContext()
    useEffect(() => {
        setModule("Client");
    }, []);
    return (
        <main>
            <Outlet/>
        </main>
    )
}