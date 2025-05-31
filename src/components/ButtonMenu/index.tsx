import { Button } from "@mui/material";
import React from "react";

type ButtonMenuProps = {
  Icon: React.ElementType;
  text: string;
  link?: string;
};

export default function ButtonMenu({ Icon, text, link }: ButtonMenuProps) {
  return (
    <Button variant="outlined" startIcon={<Icon />}>
      {text}
    </Button>
  );
}
