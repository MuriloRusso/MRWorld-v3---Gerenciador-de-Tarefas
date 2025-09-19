import { inputProps } from "./input";

export type Person = {
    id: number;
    name: string;
    id_client: number;
    avatar?: string;
    phone?: string;
    email?: string;
    position?: string; //cargo
    function?: string;
    is_owner: boolean;
    notes?: string;
    created_at: string;
    updated_at?: string;
}

export type PersonData = {
    name: inputProps;
    // id_client: inputProps;
    avatar: inputProps;
    phone: inputProps;
    email: inputProps;
    position: inputProps; //cargo
    function: inputProps;
    is_owner: inputProps;
    notes: inputProps;
}


export type FormPersonParamsProps = {
    state: boolean;
    handleFormFunction: (value: boolean) => void;
}