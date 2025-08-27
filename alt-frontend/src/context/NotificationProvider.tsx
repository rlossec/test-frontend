import React, { useState } from "react";
import { NotificationContext } from "./NotificationContext";
import type {
  Notification,
  NotificationVariant,
} from "../types/common/notification";
import { v4 as uuidv4 } from "uuid";

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (
    variant: NotificationVariant,
    message: string,
    persistent = false
  ) => {
    const id = uuidv4();
    const newNotification: Notification = { id, variant, message, persistent };

    setNotifications((prev) => [...prev, newNotification]);

    // auto remove si ce n'est pas persistant
    if (!persistent) {
      setTimeout(() => {
        removeNotification(id);
      }, 3000);
    }
  };

  const removeNotification = (id: string) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
