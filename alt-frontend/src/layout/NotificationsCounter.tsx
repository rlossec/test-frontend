import { useNotifications } from "../hooks/useNotifications";
import { BellIcon } from "../icons/state/BellIcon";

export const NotificationsCounter = () => {
  const { notifications, addNotification } = useNotifications();

  /* Artificially add a notification to test the counter */
  const handleClick = () => {
    addNotification("success", "Nouvelle notification persistante", true);
  };

  return (
    <div>
      <div className="relative">
        <BellIcon onClick={handleClick} />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-error text-background text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </div>
    </div>
  );
};
