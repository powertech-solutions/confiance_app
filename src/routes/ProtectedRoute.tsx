import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: PropsWithChildren) =>{
    // const { authUser } = useAuth();
    const authUser = true
    if (!authUser) {
        return <Navigate to={"/auth/sign-in"} />
    }
    return children
}