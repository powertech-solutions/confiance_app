
export const ROLES = {
    ADMIN: "ADMIN",
    SELLER: "SELLER",
    PLANNER: "PLANNER",
    FINANCIAL: "FINANCIAL",
    SUPPLIER: "SUPPLIER",
    DOC: "DOC"
};

export interface RouteItems {
    label: string;
    pathName?: string;
    active?: boolean;
    iconName: string;
    allowedRoles?: string[];
    subRoutes?: RouteItems[];
    onClick?: () => void; 
}

export interface ModuleItems{
    moduleName: string;
    allowedRoles?: string[];
    routes: RouteItems[],
}

export const sidebarRoutes: ModuleItems[] = [
    {
        moduleName: "Client",
        allowedRoles: [ROLES.ADMIN, ROLES.SELLER],
        routes:[
            {
                label: 'Tableau de Bord',
                pathName: '/dashboard',
                active: true,
                iconName: "material-symbols:dashboard-outline-rounded",
                allowedRoles: [ROLES.ADMIN],
            },
            {
                label: 'Gestion des clients',
                pathName: '/general-secretariat',
                active: true,
                iconName: "flowbite:users-outline",
                allowedRoles: [ROLES.ADMIN],
            },
        ]
    },
    {
        moduleName: "Planning",
        allowedRoles: [ROLES.ADMIN, ROLES.PLANNER],
        routes:[
            {
                label: 'Tableau de Bord',
                pathName: '/dashboard',
                active: true,
                iconName: "material-symbols:dashboard-outline-rounded",
                allowedRoles: [ROLES.ADMIN],
            },
            {
                label: 'Planification',
                pathName: '/minister-cabinet',
                active: true,
                iconName: "icon-park-outline:plan",
                allowedRoles: [ROLES.ADMIN],
            },
        ]
    },
    {
        moduleName: "Finance",
        allowedRoles: [ROLES.ADMIN, ROLES.FINANCIAL],
        routes:[
            {
                label: 'Tableau de Bord',
                pathName: '/dashboard',
                active: true,
                iconName: "material-symbols:dashboard-outline-rounded",
                allowedRoles: [ROLES.ADMIN],
            },
            {
                label: 'Gestion des Finances',
                pathName: '/general-secretariat',
                active: true,
                iconName: "flowbite:users-outline",
                allowedRoles: [ROLES.ADMIN],
            },
        ]
    },
    {
        moduleName: "Supply",
        allowedRoles: [ROLES.ADMIN, ROLES.SUPPLIER],
        routes:[
            {
                label: 'Tableau de Bord',
                pathName: '/dashboard',
                active: true,
                iconName: "material-symbols:dashboard-outline-rounded",
                allowedRoles: [ROLES.ADMIN],
            },
            {
                label: 'Approvisionnements',
                pathName: '/general-secretariat',
                active: true,
                iconName: "flowbite:users-outline",
                allowedRoles: [ROLES.ADMIN],
            },
        ]
    },
    {
        moduleName: "Documents",
        allowedRoles: [ROLES.ADMIN, ROLES.DOC],
        routes:[
            {
                label: 'Tableau de Bord',
                pathName: '/dashboard',
                active: true,
                iconName: "material-symbols:dashboard-outline-rounded",
                allowedRoles: [ROLES.ADMIN],
            },
            {
                label: 'Gestion des clients',
                pathName: '/general-secretariat',
                active: true,
                iconName: "flowbite:users-outline",
                allowedRoles: [ROLES.ADMIN],
            },
        ]
    }
]