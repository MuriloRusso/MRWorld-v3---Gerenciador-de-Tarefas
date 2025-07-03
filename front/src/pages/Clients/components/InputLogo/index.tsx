import { Box } from "@mui/material";
import InputFile from "../../../../components/InputFile";
import Label from "../../../../components/Label";
import { ClientData } from "../../../../types/client";

export default function InputLogo({
  fieldsData,
  handleChange
}: {
  fieldsData: ClientData;
  handleChange: (fieldName: keyof ClientData, newValue: File) => void;
}) {
  return (
    <Box sx={{ borderRight: "1px solid #ccc", paddingRight: "30px" }}>
      <Label text={"Logo"} />
      <InputFile
        value={fieldsData.logo.value}
        onChange={(newValue: File) => handleChange("logo", newValue)}
      />
    </Box>
  );
}
