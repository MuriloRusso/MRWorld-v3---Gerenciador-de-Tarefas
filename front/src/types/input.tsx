export type inputProps = {
    label?: string;
    value: string;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    required?: boolean;
}

export type InputFileProps = {
    label?: string;
    value: File | null;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    required?: boolean;
}