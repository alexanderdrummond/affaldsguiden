import { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [visible, setVisible] = useState(false);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => setNotification(null), 300);
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div
          className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg z-50 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          } ${
            notification.type === "error"
              ? "bg-red-700 text-white"
              : "bg-green-700 text-white"
          }`}
        >
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
