import PageHeader from "@/components/core/PageHeader";
import AdvancedTable from "@/components/core/table/AdvancedTable";
import SwitchTableView from "@/components/core/table/SwitchTableView";
import { Separator } from "@/components/ui/separator";
import { useBreadcrumb } from "@/pages/breadcrumb/breadcrumbData";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomerColumn } from "@/components/core/table/columns/CustomerColumn";
import { CustomerModel } from "@/types/customer.model";

export default function ClientManagement() {
    const {clientManagementBreadcrumb} = useBreadcrumb()
    const datas: CustomerModel[] = []
    return (
        <div>
            <PageHeader breadcrumList={clientManagementBreadcrumb}/>
            <div className="px-5 sm:px-10 mt-2">
                <h3 className="font-medium text-black text-[1.5em]">567 Clients</h3>
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button className="shadow flex items-center border border-gray-200 px-2 py-[0.6em] rounded-[5px] text-[0.7em] gap-1 text-gray-600 font-light">
                            All clients
                            <Icon icon="iconamoon:arrow-down-2-light" className=" text-[1.4em]" />
                        </button>
                        <button className="shadow flex items-center border border-gray-200 px-2 py-[0.6em] rounded-[5px] text-[0.7em] gap-1 text-gray-600 font-light">
                            Create date
                            <Icon icon="iconamoon:arrow-down-2-light" className=" text-[1.4em]" />
                        </button>
                        <button className="shadow flex items-center border border-gray-200 px-2 py-[0.6em] rounded-[5px] text-[0.7em] gap-1 text-gray-600 font-light">
                            Contact owner
                            <Icon icon="iconamoon:arrow-down-2-light" className=" text-[1.4em]" />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center text-[0.7em] text-black gap-1">
                            <Icon icon="cil:columns" className=" text-[1.4em]" />
                            Manage Column
                        </button>
                        <SwitchTableView />
                        <div className="flex items-center gap-3">
                            <button className="shadow flex items-center justify-center border border-gray-200 px-4 py-[0.65em] rounded-[5px] text-[0.7em] gap-1 text-gray-600 font-light">
                                <Icon icon="solar:export-linear" className=" text-[1.4em]" />
                                Export
                            </button>
                            <Separator orientation="vertical" className="h-6" />
                            <button className="shadow flex items-center justify-center bg-[#0A69FB] text-white px-4 py-[0.7em] rounded-[5px] text-[0.7em] gap-1 text-gray-600 font-light">
                                <Icon icon="hugeicons:user-add-01" className=" text-[1.4em]" />
                                Create client
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200 rounded-[5px] mt-6">
                    <div className="flex items-center justify-between py-4 px-4 border-b border-gray-200">
                        <div className="flex items-center border border-gray-200 gap-2 px-2 rounded-[5px]">
                            <Icon icon="ri:search-line" className=" text-[1em] text-gray-500" />
                            <input type="text" className="w-[15em] outline-none py-[0.4em] placeholder:text-[0.9em] text-[0.9em]" placeholder="Recherche..." />
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <AdvancedTable data={datas} columns={CustomerColumn} />
                    </div>
                    {/* <div className="h-20">

                    </div> */}
                    
                </div>
            </div>
            {/* <div className="px-5 sm:px-10 mt-2">
                <h3 className="font-normal text-[0.85em] text-gray-600 mb-3">Statistiques clients</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                <Icon icon="flowbite:users-outline" className=" text-[1.3em] text-[#0A69FB]" />
                            </div>
                            <h3 className="font-normal text-gray-600 text-[0.95em]">5000</h3>
                        </div>
                        <p className="text-[0.8em] text-gray-500">Nombre de clients</p>
                    </div>
                    <div className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                <Icon icon="uil:invoice" className=" text-[1.3em] text-[#0A69FB]" />
                            </div>
                            <h3 className="font-normal text-gray-600 text-[0.95em]">Gestion des Factures</h3>
                        </div>
                        <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                    </div>
                    <div className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                <Icon icon="uil:invoice" className=" text-[1.3em] text-[#0A69FB]" />
                            </div>
                            <h3 className="font-normal text-gray-600 text-[0.95em]">Gestion des Factures</h3>
                        </div>
                        <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                    </div>
                    <div className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                <Icon icon="uil:invoice" className=" text-[1.3em] text-[#0A69FB]" />
                            </div>
                            <h3 className="font-normal text-gray-600 text-[0.95em]">Gestion des Factures</h3>
                        </div>
                        <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
