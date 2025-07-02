import { Button, Grid, Typography } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useRef, useState } from "react";

export default function InputFile() {
    const [fileName, setFileName] = useState('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);

            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file); // converte o arquivo em base64
        }
    };

    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid sx={{/*borderRadius: '100%',*/ borderColor: '#aaa', borderWidth: 2, borderStyle: 'dashed', backgroundColor: "#efefef",  height: '104px', width: '104px'}}>
                    {imageSrc ? (
                        <img
                        src={imageSrc}
                        alt="Imagem selecionada"
                        style={{ maxWidth: "auto", height: '100px', width: '100px',  /*borderRadius: '100%',*/ objectFit: 'cover' }}
                        />
                    ):
                    <></>
                        // <Typography variant="subtitle1" sx={{color: '#aaa', textAlign: "center", position: "absolute", width: '100px'}}>Logo da Empresa</Typography>
                    }
                </Grid>
                <Grid>
                    <Typography variant="subtitle1">{fileName}</Typography>
                </Grid>
                <Grid>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <Button
                        variant="contained"
                        startIcon={<UploadFileIcon />}
                        onClick={handleButtonClick}
                        sx={{backgroundColor: "#000"}}
                    >
                        Selecionar Logo
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
