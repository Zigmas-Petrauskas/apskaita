import useAuth from "../../hooks/useAuth";
import formatUserName from "../../utils/formatUserName";

import "./Dashboard.scss";

const Dashboard = () => {
  const { getUser } = useAuth();

  const user = getUser();

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <p>Sveiki prisijungę, {formatUserName(user?.username)}</p>
      </header>
    </section>
  );
};

export default Dashboard;
