export interface User{
    id:number;
    idOperateur:number;
    phoneNumber:number;
    name:string;
    firstname:string;
    ncin:string;
    email:string;
    password:string;
    confirmed:string;
    confirmPassword:string;
    operateur:number;
}

export interface Operator{
    id:number,
    name:string,
    preffix:string
}
export interface RouterInfo{
    path:string,
    title:string,
    icon:String,
    class:String
}

export interface call{
    numero: string, 
    durer: number, 
    dateHeure: string,
}

export interface transaction{
    id:number,
    cash:number,
    transaction:number,
    date:string
}