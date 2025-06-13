import { createContext, useState, ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Tipagem do que será compartilhado no contexto
type AuthContextType = {
  isAuthentiched: boolean;
  signIn: () => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Componente Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthentiched, setAuthentiched] = useState<boolean>(false);
  const navigate = useNavigate();

  const signIn = () => {
    setAuthentiched(true);
    navigate('/clients');
  };

  return (
    <AuthContext.Provider value={{ isAuthentiched, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};