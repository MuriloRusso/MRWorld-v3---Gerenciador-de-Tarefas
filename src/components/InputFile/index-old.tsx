import { Button } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useRef } from "react";

export default function InputFile() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("Arquivo selecionado:", file.name);
            // Você pode fazer upload ou outro processamento aqui
        }
    };

    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <Button
                variant="contained"
                startIcon={<UploadFileIcon />}
                onClick={handleButtonClick}
            >
                Selecionar Arquivo
            </Button>
        </>
    );
}
