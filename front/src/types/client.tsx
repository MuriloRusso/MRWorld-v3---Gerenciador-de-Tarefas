import { inputProps } from "./input"

export type Client = {
    name: string;
    ower: string;
    phone?: string;
    email?: string;
    created_at: string;
    updated_at?: string;
    logo?: string;
}

export type ClientData = {
    name: inputProps;
    ower: inputProps;
    phone: inputProps;
    email: inputProps;
}