import { BreadcrumbModel } from "@/models/breadcrumbModel";

export function useBreadcrumb() {
    const breadcrumbs: Record<string, BreadcrumbModel[]> = {
        clientManagementBreadcrumb: [{label: "Gestion des clients",isPage:true}],
    };

    return breadcrumbs;
}