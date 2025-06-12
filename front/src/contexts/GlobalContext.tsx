import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ToastProps } from '../types/toast';

// Tipagem do que será compartilhado no contexto
type GlobalContextType = {
  toast: ToastProps[];
  handleToast: (value: ToastProps) => void;
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

// Componente Provider
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastProps[]>([
    {
        severity: "error",
        text: "teste",
        variant: "outlined"
    },
    {
        severity: "success",
        text: "Login efetuado com sucesso!",
        variant: "filled"
    }
  ]);

  const handleToast = (value: ToastProps) => {
    console.log(value);
    
    // setToast(value);
  }

  return (
    <GlobalContext.Provider value={{ toast, handleToast }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para consumir o contexto
/*export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext deve ser usado dentro de um GlobalProvider');
  }
  return context;
};*/
