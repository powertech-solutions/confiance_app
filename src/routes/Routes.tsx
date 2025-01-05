import App from "@/App";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import MainLayoutProvider from "@/providers/MainLayoutProviders";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { UnProtectedRoute } from "./UnprotectedRoute";
import SignIn from "@/pages/auth/SignIn";

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
                        index: true,
                        // element:
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
                    }
                ]
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes