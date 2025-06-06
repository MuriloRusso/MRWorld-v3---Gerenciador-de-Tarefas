import { Alert, AlertTitle } from "@mui/material";

type ToastProps = {
  text: string;
  severity: "success" | "info" | "warning" | "error";
  variant?: "filled" | "outlined" | "standard";
  Icon?: React.ComponentType<any> | false;
  alertTitle?: string;
};

export default function Toast({ text, severity, variant, Icon, alertTitle }: ToastProps) {
  const iconProp = Icon === false ? false : Icon ? <Icon /> : undefined;

  return (
    <Alert severity={severity} variant={variant} icon={iconProp} sx={{position: 'fixed', right: 20, bottom: 10}}>
        {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
        {text}
    </Alert>
  );
}
