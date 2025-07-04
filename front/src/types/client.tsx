import { InputFileProps, inputProps } from "./input"

export type Client = {
    id: number;
    name: string;
    ower: string;
    phone?: string;
    email?: string;
    notes?: string;
    client?: Client;
    created_at?: string;
    updated_at?: string;
    logo?: string;
}

export type ClientData = {
    name: inputProps;
    cnpj: inputProps;
    client: inputProps;
    logo: InputFileProps;
    id_contact_method: inputProps;
    email: inputProps;
    phone: inputProps;
    notes: inputProps;
    cep: inputProps;
    address: inputProps;
    address_number: inputProps;
    neighborhood: inputProps;
    city: inputProps;
    state: inputProps;
    country: inputProps;
}