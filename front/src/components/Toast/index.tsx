import { Alert, AlertTitle, Grid } from "@mui/material";
import { ToastProps } from "../../types/toast";

export default function Toast({ toasts }: { toasts: ToastProps[] }) {
  return (
    <Grid sx={{display: 'flex', flexDirection: 'column', gap: 1, position: "fixed", right: 20, bottom: 10, zIndex: 999999 }}>
      {toasts.map((item, i) => {
        const iconProp = item.Icon === false ? false : item.Icon ? <item.Icon /> : undefined;

        return (
          <Alert
            key={i} // <- importante para evitar warning do React
            severity={item.severity}
            variant={item.variant}
            icon={iconProp}
          >
            {item.alertTitle && <AlertTitle>{item.alertTitle}</AlertTitle>}
            {item.text}
          </Alert>
        );
      })}
    </Grid>
  );
}
