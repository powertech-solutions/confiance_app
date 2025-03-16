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
import ClientModule from "@/pages/modules/ClientsModule";
import SupplyModule from "@/pages/modules/SupplyModule";
import PlanningModule from "@/pages/modules/PlanningModule";
import FinanceModule from "@/pages/modules/FinanceModule";
import DocuementsModule from "@/pages/modules/DocumentsModule";

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
                                element: <Navigate to="client" replace />
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
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes