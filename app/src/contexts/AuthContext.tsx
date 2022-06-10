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
    user: UserProps;
    login: (data: loginType) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}
interface signInResponse {
    token: String;
    //user: UserProps;
}
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    var [user, setUser] = useState<UserProps>({} as UserProps)
    const [loading, setLoading] = useState(false);

    const login = useCallback(async(data: loginType) => {
        try {
            const response = await api.get('/events');
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
        

        setLoading(true);

        //const tokonReceived = response.data.token;
        //api.defaults.headers.common["Authorization"] = `Bearer ${tokonReceived}`;

       // const userReceived = response.data.user;
        //setUser(userReceived);
        setLoading(false)
    }, []);
    
    return (
        <AuthContext.Provider value={{
            user,
            login
        }}>
            {children}
        </AuthContext.Provider>
    );
}