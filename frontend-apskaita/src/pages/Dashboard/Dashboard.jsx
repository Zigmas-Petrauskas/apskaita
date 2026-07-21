import { FaUsers, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";

import "./Dashboard.scss";

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      title: "Vartotojai",
      value: "1",
      icon: <FaUsers />,
    },
    {
      id: 2,
      title: "Sąskaitos",
      value: "0",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 3,
      title: "Pajamos",
      value: "0 €",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <h1>Valdymo skydas</h1>
        <p>Sveiki prisijungę prie MB apskaitos sistemos</p>
      </header>

      <div className="dashboard-cards">
        {cards.map((card) => (
          <article className="dashboard-card" key={card.id}>
            <div className="dashboard-card-icon">{card.icon}</div>

            <div className="dashboard-card-content">
              <h2>{card.title}</h2>

              <strong>{card.value}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
