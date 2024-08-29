import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Layout = () => {
  // const Layout = ({ children }) => {
  return (
    <>
      <div className=" flex h-screen bg-slate-50">
        {/* <div className={`${open}`}></div> */}
        <SideNav />
        <div className="w-screen bg-white m-5 rounded-lg shadow-lg">
          {<Outlet />}
        </div>
      </div>
    </>
  );
};

export default Layout;
