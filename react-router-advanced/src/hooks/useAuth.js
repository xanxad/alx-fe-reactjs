import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate an authentication check
    const checkAuth = () => {
      // You can replace this with actual authentication logic
      const authStatus = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(authStatus === "true");
    };

    checkAuth();
  }, []);

  return { isAuthenticated };
};

export { useAuth };
