import Cookies from "js-cookie";
// import Cookies
import { PropsWithChildren, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest, putRequest } from "@/helpers/api/verbes";
import { removeItemFromStore, setItemToStore } from "@/helpers/utils";

interface AuthInfo {
  username: string;
  password: string;
}

interface PasswordInfo {
  oldPassword: string;
  newPassword: string;
}

export interface UserDataType {
  id: string,
  isLoggedIn: boolean;
  account: {
    id: string,
    active: boolean,
    imageProfile: string,
    email: string,
    username: string,
    role: {
      id: string,
      name: string
    },
    token: string
  },
  details: {
    id: string,
    registrationNumber: string,
    dateOfBirth: string,
    firstName: string,
    lastName: string,
    middleName: string,
    gender: string
  }
}

interface AuthContextType {
  authUser: UserDataType | null,
  loginAction: any,
  logoutAction: any,
  removeUserCookies: () => void,
  logoutUser: any,
}

const AuthContext = createContext<AuthContextType>({
  authUser: null,
  loginAction: (data: AuthInfo) => Promise<void>,
  logoutAction: () => Promise<void>,
  removeUserCookies: () => {},
  logoutUser: (userId: any) =>  Promise<void>,
});

export const AuthProvider = ({ children } : PropsWithChildren) => {

  const authUser = Cookies.get('authUser') ? JSON.parse(Cookies.get('authUser')!) : null  

  const navigate = useNavigate();

  const loginAction = async (authData: AuthInfo) => {

    try{
      const response = await postRequest<UserDataType>('/accounts/login', authData)
      if(response.error) {
        return response.error;
      } else {
        Cookies.set("authUser", JSON.stringify(response.data!))
        setItemToStore("token", response.data!.account.token)
        return response.data
      }
    } catch(error:any) {
      throw error
    } 
    
  };

  const changePasswordAction = async (userId:any, passwords:PasswordInfo) => {

    try{
      const response = await postRequest<UserDataType>(`/accounts/change-password/${userId}`, passwords)
      if(response.error) {
        return response.error;
      } else {
        // success user
        // save user
        Cookies.set("authUser", JSON.stringify(response.data!))
        // save token
        setItemToStore("token", response.data!.account.token);
        return response.data
      }
    } catch(error:any) {
      throw error
    } 
    
  };
  

  const logoutAction = async () => {
    // unset user

    try{
      const response = await putRequest<any>(`/accounts/logout/${authUser.account.id}`)
      if(response.error) {
        Cookies.remove('authUser')
        removeItemFromStore('token')
        navigate("/", { replace: true });
        return response.error;
      } else {
        Cookies.remove('authUser')
        removeItemFromStore('token')
        navigate("/", { replace: true });
      }
    } catch(error:any) {
      throw error
    } 
  }

  const logoutUser = async (userAccountId:any) => {
    // unset user

    try{
      const response = await putRequest<any>(`/accounts/logout/${userAccountId}`)
      if(response.error) {
        return response.error;
      } else {
        return response.data.message
      }
    } catch(error:any) {
      throw error
    } 
  }

  const removeUserCookies = () => {
    Cookies.remove('authUser')
    removeItemFromStore('token')
    navigate("/", { replace: true });
  }
  
  const value = useMemo(
    () => ({
      authUser,
      loginAction,
      logoutAction,
      removeUserCookies,
      logoutUser
    }),
    [authUser]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
  
export const useAuth = () => {
  return useContext(AuthContext);
};