import { createContext, useState, useContext, useEffect } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setNotification(null), 300);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setVisible(true);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div
          className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg shadow-md z-50 transition-all ease-in-out duration-300 ${
            visible ? "opacity-100" : "opacity-0 translate-y-2"
          } ${
            notification.type === "error"
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          <p className="text-sm font-medium">{notification.message}</p>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
