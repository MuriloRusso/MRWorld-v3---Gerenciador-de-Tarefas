import { Button, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState, useEffect } from "react";

type InputProps = {
  /** Arquivo já selecionado */
  value?: File | null;
  /** Dispara quando o usuário escolhe um arquivo */
  onChange?: (file: File) => void;
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
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    console.log('value', value);
    // setImageSrc(value ? value.toString() : '')
  }, [value])

  useEffect(()=>{
    console.log('imageSrc', imageSrc);
    
  },[imageSrc])

  // Caso receba um File como `value`, converte em base64 para exibir
  useEffect(() => {
    if (value instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setFileName(value.name);
      };
      reader.readAsDataURL(value);
    } else {
      if(value){
        setImageSrc(value);

      }else{
        
        setImageSrc(null);
      }
      setFileName("");
    }
    console.log('aquiii');
    
  }, [value]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onChange?.(file); // envia o File para o componente pai
  };

  const handleRemove = () => {
    setImageSrc(null);
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    onChange?.(null as any); // envia null para resetar o valor
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
