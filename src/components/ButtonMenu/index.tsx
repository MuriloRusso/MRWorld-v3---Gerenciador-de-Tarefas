import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type ButtonMenuProps = {
  Icon: React.ElementType;
  text: string;
  link?: string;
};

export default function ButtonMenu({ Icon, text, link }: ButtonMenuProps) {
  return (
    <Link to={link ? link : "/"}>
      <Button
        variant="text"
        startIcon={<Icon size={50}/>}
        sx={{
          borderWidth: 0,
          color: "#000",
          width: "100%",
          textAlign: 'left',
          justifyContent: 'flex-start',
          textTransform: 'none',
          alignContent: 'center',
          alignItems: 'center',
          paddingX: 2
        }}
      >
        <Typography variant="body1" component="p" sx={{fontSize: 20}}>{text}</Typography>
      </Button>
    </Link>
  );
}
