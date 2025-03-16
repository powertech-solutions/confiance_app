import { AppSidebar } from "@/components/core/AppSidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function ContainerLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <main>
                    
                    <Outlet/>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
