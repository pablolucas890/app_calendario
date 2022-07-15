
export type RootStackParamList = {
    Login: undefined;
    Index: undefined;
    BemVindo: undefined;
    Calendario: undefined;
};


export interface UserProps {
 
    id?:string;
    name:string;
    email:string
    type?:Number;
    password?:string;
}