import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <div className="layout-body">
        <Sidebar />

        <main className="layout-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
