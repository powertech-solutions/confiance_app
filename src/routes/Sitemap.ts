
export const ROLES = {
    ADMIN: "ADMIN", 
};

export interface RouteItems {
    label: string;
    pathName?: string;
    active?: boolean;
    iconName: string;
    allowedRoles?: string[];
    onClick?: () => void; 
}

export const routes: RouteItems[] = [
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
    {
        label: 'Gestion des clients',
        pathName: '/general-secretariat',
        active: true,
        iconName: "flowbite:users-outline",
        allowedRoles: [ROLES.ADMIN],
    },
    {
        label: 'Structures sous tutelle',
        pathName: '/affiliated-entities',
        active: true,
        iconName: "",
        allowedRoles: [ROLES.ADMIN],
    },
    {
        label: 'Actualités',
        pathName: '/news',
        active: true,
        iconName: "",
        allowedRoles: [ROLES.ADMIN],
    },
    {
        label: 'Ressources',
        pathName: '/resource',
        active: true,
        iconName: "",
        allowedRoles: [ROLES.ADMIN],
    },
    {
        label: 'Services',
        pathName: '/service',
        active: true,
        iconName: "",
        allowedRoles: [ROLES.ADMIN],
    },
    {
        label: 'FQA',
        pathName: '/faq',
        active: true,
        iconName: "",
        allowedRoles: [ROLES.ADMIN],
    },
    {
        label: 'Comptes',
        pathName: '/account',
        active: true,
        iconName: "",
        allowedRoles: [ROLES.ADMIN],
    },
]