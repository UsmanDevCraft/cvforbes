export type ProductTabs = "rewriter" | "cover" | "ats";

export type AlertType = "success" | "error" | "warning" | "info";

export interface Alert {
  id: string;
  type: AlertType;
  title: string;
  message?: string;
}

export interface AlertContextType {
  showAlert: (type: AlertType, title: string, message?: string) => void;

  removeAlert: (id: string) => void;

  alerts: Alert[];
}

export interface AlertProps {
  alert: Alert;
}

export interface FormValues {
  file: File | null;
  jobDesc: string;
}

export const initialValues: FormValues = {
  file: null,
  jobDesc: "",
};

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}
