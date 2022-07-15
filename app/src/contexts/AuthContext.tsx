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
    login: (data: loginType) => Promise<Number>;
    createUser: (data: UserProps) => Promise<Number>;
    eventslist: EventProps[];
    loading:Boolean;
    setUserFinal2: () => void;
    createEvent:(data:EventProps) => Promise<Number>
    setEvento: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}
interface signInResponse {
    token: String;
    userFinal: UserProps;
}
interface EventProps {
    id?: string,
    date_start: string,
    date_end: string,
    title: string,
    description: string,
    event_type: Number,
}
export const AuthContext = createContext({} as AuthContextData);
export function AuthProvider({ children }: AuthProviderProps) {

    var [userFinal, setUserFinal] = useState<UserProps>({} as UserProps)
    const [loading, setLoading] = useState(false);
    const [eventslist, setEventslist] = useState<EventProps[]>([])
    function setUserFinal2(){
        setUserFinal({} as UserProps);
    }
    function setEvento(){
        listEvents()
    }
    const login = useCallback(async (data: loginType) => {

        const response = await api.post<signInResponse>('/users/login', {
            email: data.email,
            password: data.password
        }).then((res) => {
            if (res.status === 403) {
                return 2
            }
            setLoading(true);
            const tokonReceived = res.data.token;
            api.defaults.headers.common["Authorization"] = `Bearer ${tokonReceived}`;
            const userReceived = res.data.userFinal;
            setUserFinal(userReceived);
            setLoading(false)
            return 1
        }).catch(err => {
            return 0
        });

        return response

    }, []);

    const listEvents = useCallback(async () => {

        const response = await api.get<EventProps[]>('/events').then((res) => {
            setLoading(true);
            setEventslist(res.data)
            setLoading(false)
        }).catch(err => {
            
        });
        return response
    }, []);

    const createEvent = useCallback(async (data: EventProps) => {

        const response = await api.post<EventProps>('/events', {
            title: data.title,
            username : userFinal.name,
            description : data.description,
            link : "teste",
            image: 1,
            event_type: data.event_type,
            calendar_type: 1,
            date_start: data.date_start,
            date_end: data.date_end

        }).then((res) => {
            return 1

        }).catch(err => {
            return 0
        });

        return response

    }, []);


    const createUser = useCallback(async (data: UserProps) => {

        const response = await api.post<UserProps>('/users', {
            name: data.name,
            email: data.email,
            password: data.password,
            type: 0
        }).then((res) => {

            const userReceived = res.data;
            console.log(userReceived)
            setUserFinal(userReceived);
            return 1
        }).catch(err => {
            return 0
        });

        return response

    }, []);

    return (
        <AuthContext.Provider value={{
            userFinal,
            login,
            createUser,
            eventslist,
            loading,
            setUserFinal2,
            createEvent,
            setEvento
        }}>
            {children}
        </AuthContext.Provider>
    );
}