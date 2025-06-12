import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ToastProps } from '../types/toast';

// Tipagem do que será compartilhado no contexto
type GlobalContextType = {
  toast: ToastProps[];
  addToast: (value: ToastProps) => void;
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

// Componente Provider
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastProps[]>([
    {
        id: 0,
        severity: "success",
        text: "Login efetuado com sucesso!",
        variant: "filled"
    }
  ]);

  const addToast = (value: ToastProps) => {
    const id = Date.now();
    const newToast = { ...value, id };
    setToast(prev => [...prev, newToast]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToast(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <GlobalContext.Provider value={{ toast, addToast }}>
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
