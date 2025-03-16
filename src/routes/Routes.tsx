import App from "@/App";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import MainLayoutProvider from "@/providers/MainLayoutProviders";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { UnProtectedRoute } from "./UnprotectedRoute";
import SignIn from "@/pages/auth/SignIn";
import EntryPoint from "@/pages/entryPoint";
import Register from "@/pages/auth/Register";
import OtpPage from "@/pages/auth/OtpPage";
import ChangePassword from "@/pages/auth/ChangePassword";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ContainerLayout from "@/layouts/containerLayout";
import ClientModule from "@/pages/modules/client/ClientsModule";
import SupplyModule from "@/pages/modules/supply/SupplyModule";
import PlanningModule from "@/pages/modules/planning/PlanningModule";
import FinanceModule from "@/pages/modules/finance/FinanceModule";
import DocuementsModule from "@/pages/modules/document/DocumentsModule";

const routes: RouteObject[] = [
    {
        element: <App/>,
        children:[
            {
                path: "/",
                element:(
                    <ProtectedRoute>
                        <MainLayoutProvider>
                            <MainLayout/>
                        </MainLayoutProvider>
                    </ProtectedRoute>
                ),
                children:[
                    {
                        path: "entry-point",
                        element: <EntryPoint/>
                    },
                    {
                        path: "modules",
                        element: (
                            <ContainerLayout/>
                        ),
                        children:[
                            {
                                index: true,
                                element: <Navigate to="/lost-page" replace />
                            },
                            {
                                path: "client",
                                element: (
                                    <ClientModule/>
                                ),
                                children:[
        
                                ]
                            },
                            {
                                path: "supply",
                                element: (
                                    <SupplyModule/>
                                ),
                                children:[
        
                                ]
                            },
                            {
                                path: "planning",
                                element: (
                                    <PlanningModule/>
                                ),
                                children:[
        
                                ]
                            },
                            {
                                path: "finance",
                                element: (
                                    <FinanceModule/>
                                ),
                                children:[
        
                                ]
                            },
                            {
                                path: "documents",
                                element: (
                                    <DocuementsModule/>
                                ),
                                children:[
        
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: "/auth/",
                element: (
                    <UnProtectedRoute>
                        <AuthLayout/>
                    </UnProtectedRoute>
                ),
                children: [
                    {
                        path: "sign-in",
                        element: <SignIn/>
                    },
                    {
                        path: "register",
                        element: <Register/>
                    },
                    {
                        path: "confirmation",
                        element: <OtpPage/>
                    },
                    {
                        path: "change-password",
                        element: <ChangePassword/>
                    },
                    {
                        path: "forget-password",
                        element: <ForgotPassword/>
                    }
                ]
            },
            {
                path: "/lost-page",
                element: "I'm lost"
            },
            {
                path: "/error/",
                children:[
                    {
                        index: true,
                        element: <Navigate to="/lost-page" replace />
                    },
                    {
                        path: "unauthorized",
                        element: "unauthorized"
                    },
                    {
                        path: "server-error",
                        element: "unauthorized"
                    }
                ]
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes