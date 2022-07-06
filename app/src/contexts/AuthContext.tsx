import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, UserProps } from "../global/props";


type Props = NativeStackScreenProps<RootStackParamList>;

type loginType = {
    email: string;
    password: string;
}


interface AuthContextData {
    userFinal: UserProps;
    login: (data: loginType) =>Promise <Number>;
    createUser: (data: UserProps) =>Promise <Number>;
}

interface AuthProviderProps {
    children: ReactNode;
}
interface signInResponse {
    token: String;
    userFinal: UserProps;
}
export const AuthContext = createContext({} as AuthContextData);
export function AuthProvider({ children }: AuthProviderProps) {

    var [userFinal, setUserFinal] = useState<UserProps>({} as UserProps)
    const [loading, setLoading] = useState(false);

    const login = useCallback(async(data: loginType) => {
       
        const response = await api.post<signInResponse>('/users/login',{
                email: data.email,
                password:data.password
        }).then((res) => {
            if(res.status === 403){
                return 2
            }
            setLoading(true);
            const tokonReceived = res.data.token;
            api.defaults.headers.common["Authorization"] = `Bearer ${tokonReceived}`;
            const userReceived = res.data.userFinal;
            console.log(userReceived)
            setUserFinal(userReceived);
            setLoading(false)
            return 1
        }).catch(err =>{
           return 0 
        });
        
        return response
   
    }, []);

    const createUser = useCallback(async(data: UserProps) => {
       
        const response = await api.post<UserProps>('/users',{
                name : data.name,
                email: data.email,
                password:data.password,
                type: 0
        }).then((res) => {

            const userReceived = res.data;
            console.log(userReceived)
            setUserFinal(userReceived);
            return 1
        }).catch(err =>{
           return 0 
        });
        
        return response
   
    }, []);
    
    return (
        <AuthContext.Provider value={{
            userFinal,
            login,
            createUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}