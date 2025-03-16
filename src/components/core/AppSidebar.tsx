import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    // SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import confiance from "../../assets/images/confiance/icon-confiance-blue-gradient.png"
import { Icon } from "@iconify/react/dist/iconify.js"
import { sidebarRoutes } from "@/routes/Sitemap"
import { useMainLayoutContext } from "@/providers/MainLayoutProviders"
import { useNavigate } from "react-router-dom"
   
export function AppSidebar() {

    const {module} = useMainLayoutContext()

    const routes = sidebarRoutes.find((item) => item.moduleName === module)?.routes

    const navigate = useNavigate()
    
    return (
        <Sidebar>
            <SidebarHeader>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="outline-none">
                        <button className="flex items-center justify-between hover:bg-gray-100 p-1 rounded-[8px]">
                            <div className="flex gap-2 items-start pt-1">
                                <img src={confiance} alt="confiance logo" className="w-[35px] h-[35px]" />
                                <div className="flex flex-col leading-[1.1em] mt-[0.1em] text-left">
                                    <h3 className="font-bold text-[0.8em]">Powertech Solutions</h3>
                                    <p className="text-[0.7em] font-medium text-gray-400">Entreprise</p>
                                </div>
                            </div>
                            <Icon icon="uil:arrow" className="rotate-[90deg] text-gray-800" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-60" align="start">
                        <DropdownMenuLabel>
                            <h4 className="font-semibold text-[0.8em] text-gray-600">Modules</h4>
                        </DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="text-[0.85em]" onClick={()=>navigate("/modules/client")}>
                                <div className="w-[1.9em] h-[1.9em] border rounded-[3px] flex items-center justify-center">
                                    <Icon icon="tabler:receipt-dollar" className=" text-[0.7em]" />
                                </div>
                                Clients et Ventes
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[0.85em]" onClick={()=>navigate("/modules/supply")}>
                                <div className="w-[1.9em] h-[1.9em] border rounded-[3px] flex items-center justify-center">
                                    <Icon icon="tabler:basket-plus" className=" text-[0.7em]" />
                                </div>
                                Approvisionnements
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[0.85em]" onClick={()=>navigate("/modules/planning")}>
                                <div className="w-[1.9em] h-[1.9em] border rounded-[3px] flex items-center justify-center">
                                    <Icon icon="icon-park-outline:plan" className=" text-[0.7em]" />
                                </div>
                                Planification
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[0.85em]" onClick={()=>navigate("/modules/finance")}>
                        <       div className="w-[1.9em] h-[1.9em] border rounded-[3px] flex items-center justify-center">
                                    <Icon icon="famicons:calculator-outline" className=" text-[0.7em]" />
                                </div>
                                Finance et comptabilité
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[0.85em]" onClick={()=>navigate("/modules/documents")}>
                                <div className="w-[1.9em] h-[1.9em] border rounded-[3px] flex items-center justify-center">
                                    <Icon icon="hugeicons:legal-document-02" className=" text-[0.7em]" />
                                </div>
                                Documents et Fiscalité
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {routes?.map((item) => (
                            <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton asChild>
                                <a href={item.pathName}>
                                <Icon icon={item.iconName} />
                                <span>{item.label}</span>
                                </a>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                
            </ SidebarFooter>
        </Sidebar>
    )
}