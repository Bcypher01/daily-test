import { Dashboard } from "../components/Dashboard";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";

export default function Home() {
  return (
    <div>
      {/* Nav bar */}
      <NavBar />
      <div className="flex">
        {/* Side bar */}
        <div className="hidden lg:block w-2/12">
          <SideBar />
        </div>
        {/* Dashboard */}
        <div className="w-full lg:w-10/12 bg-slate-100">
          <TopBar />
          <div className="mt-10 mx-6">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
