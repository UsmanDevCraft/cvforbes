"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { AlertContextType, Alert, AlertType } from "../types/shared";

const AlertContext = createContext<AlertContextType | null>(null);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const removeAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const showAlert = useCallback(
    (type: AlertType, title: string, message?: string) => {
      const id = crypto.randomUUID();

      setAlerts((prev) => [
        ...prev,
        {
          id,
          type,
          title,
          message,
        },
      ]);

      setTimeout(() => {
        removeAlert(id);
      }, 4000);
    },
    [removeAlert],
  );

  return (
    <AlertContext.Provider
      value={{
        alerts,
        showAlert,
        removeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);

  if (!context) throw new Error("useAlert must be used inside AlertProvider");

  return context;
}
