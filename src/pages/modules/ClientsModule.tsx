import UnauthorizedComponent from "@/components/core/errorComponents/UnauthorizedComponent";
import { useMainLayoutContext } from "@/providers/MainLayoutProviders";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function ClientModule() {
    const {setModule} = useMainLayoutContext()

    const authorized = true

    useEffect(() => {
        setModule("Client");
    }, []);

    if (!authorized) {
        return <UnauthorizedComponent/>
    }
    return (
        <main>
            <Outlet/>
        </main>
    )
}