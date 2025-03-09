import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main className="h-screen" style={{ background: "linear-gradient(90deg, #01A4F7 0%, #0A69FB 100%)" }}>
            <div className="h-[inherit] pt-[3em]">
                <Outlet/>
            </div>
        </main>
    )
}
