import { useMainLayoutContext } from "@/providers/MainLayoutProviders";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function DocuementsModule() {

    const {setModule} = useMainLayoutContext()

    useEffect(() => {
        setModule("Documents");
    }, []);

    return (
        <main>
            <Outlet/>
        </main>
    )
}