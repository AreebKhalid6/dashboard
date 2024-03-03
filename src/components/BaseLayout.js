import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <Navbar/>
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;
