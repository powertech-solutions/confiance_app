import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const UnProtectedRoute = ({ children }: PropsWithChildren) =>{
    // const { authUser } = useAuth();
    const authUser = true
    if (authUser) {
        return <Navigate to={"/"} />
    }
    return children
}