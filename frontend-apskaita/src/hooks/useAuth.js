import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const getUser = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  };

  const logout = () => {
    localStorage.removeItem("user");

    navigate("/login");
  };

  return {
    getUser,
    logout,
  };
};

export default useAuth;
