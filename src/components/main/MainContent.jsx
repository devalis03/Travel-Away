import SideBar from "./Sidebar";

function MainContainer() {
  return (
    <div className="flex h-screen">
      <div className="basis-1/4 bg-[#264653]">
        <SideBar />
      </div>
      <div className="basis-3/4 bg-slate-600"></div>
    </div>
  );
}

export default MainContainer;
