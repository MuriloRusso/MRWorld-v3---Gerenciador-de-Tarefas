import { Button, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";

type InputProps = {
  /** base64 ou URL da imagem (caso já exista) */
  value?: string;
  /** dispara quando o usuário escolhe um arquivo;
   *  você recebe o arquivo e a string base64 */
  onChange: (file: File) => void;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  placeholder?: string;
};

export default function InputFile({
  value,
  onChange,
  error,
  errorText,
  required,
  placeholder = "Logo da Empresa",
}: InputProps) {
  const [fileName, setFileName] = useState("");
  const [imageSrc, setImageSrc] = useState<string | null>(value ?? null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  /* abre o seletor de arquivos */
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  /* processa o arquivo selecionado */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setImageSrc(base64);
    //   onChange(file, base64); // envia para o componente pai
      onChange(base64); // envia para o componente pai
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setImageSrc(null);
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Button
        onClick={handleButtonClick}
        sx={{ p: 0, m: 0, width: 104, height: 104, justifyContent: "start" }}
      >
        <Grid
          sx={{
            border: "2px dashed #aaa",
            backgroundColor: "#efefef",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {imageSrc ? (
            <>
              <CloseIcon
                sx={{
                  position: "absolute",
                  right: 0,
                  p: 0.5,
                  color: "#fff",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={handleRemove}
              />
              <img
                src={imageSrc}
                alt="Logo selecionado"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </>
          ) : (
            <Typography
              variant="subtitle2"
              sx={{
                color: "#aaa",
                textAlign: "center",
                position: "absolute",
                width: "100%",
                top: "40%",
                transform: "translateY(-50%)",
              }}
            >
              {placeholder}
            </Typography>
          )}
        </Grid>
      </Button>

      {fileName && (
        <Typography variant="subtitle2" sx={{ wordBreak: "break-all" }}>
          {fileName}
        </Typography>
      )}

      {/* input escondido */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        required={required}
      />

      {error && (
        <Typography variant="caption" color="error">
          {errorText}
        </Typography>
      )}
    </Grid>
  );
}
