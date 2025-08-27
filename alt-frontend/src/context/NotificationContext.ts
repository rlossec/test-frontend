import { createContext } from "react";
import type { NotificationContextType } from "../types/common/notification";

export const NotificationContext =
  createContext<NotificationContextType | null>(null);
