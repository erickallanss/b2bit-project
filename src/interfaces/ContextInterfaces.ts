import { ReactNode } from "react";

export interface AuthContextData {
    signed: boolean;
    token: string | null;
    login(email: string, password: string): Promise<void>;
    logout(): void;
  }
  
  export interface AuthProviderProps {
    children: ReactNode;
  }