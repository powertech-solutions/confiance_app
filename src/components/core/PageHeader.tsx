import { BreadcrumbModel } from "@/models/breadcrumbModel";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbProps{
    breadcrumList: BreadcrumbModel[];
}

export default function PageHeader({breadcrumList}:BreadcrumbProps) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumList?.map((item) => (
                            !item.isPage?
                            <>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                            </>:
                            <BreadcrumbItem key={item.label}>
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            </BreadcrumbItem>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    )
}
