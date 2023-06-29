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
        <div className="w-2/12">
          <SideBar />
        </div>
        {/* Dashboard */}
        <div className="w-10/12 bg-slate-100">
          <TopBar />
        </div>
      </div>
    </div>
  );
}
