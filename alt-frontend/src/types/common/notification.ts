export type NotificationVariant = "success" | "error" | "info" | "warning";

export interface Notification {
  id: string;
  variant: NotificationVariant;
  message: string;
  persistent?: boolean; // true = listée (avec compteur), false = toast
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (
    variant: NotificationVariant,
    message: string,
    persistent?: boolean
  ) => void;
  removeNotification: (id: string) => void;
}
