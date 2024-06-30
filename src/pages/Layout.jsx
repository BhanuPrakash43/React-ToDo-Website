import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function Layout() {
  return (
    <div>
      <div style={{marginBottom: "2rem"}}>
        <Nav />
      </div>
      <Outlet />
    </div>
  );
}
export default Layout;
