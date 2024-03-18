import { useState } from "react";
import SideBar from "./Sidebar";
import TravelDetail from "./TravelDetails";

function MainContainer() {
  const [historyCard, setHistoryCard] = useState([]);

  const addTravel = (newTravel) => {
    setHistoryCard([...historyCard, newTravel]);
  };

  return (
    <div className="flex h-screen">
      <div className="basis-1/4 bg-[#264653]">
        <SideBar
          historyCard={historyCard}
          setHistoryCard={setHistoryCard}
          addTravel={addTravel}
        />
      </div>
      <div className="basis-3/4 bg-slate-600">
        <TravelDetail historyCard={historyCard} />
      </div>
    </div>
  );
}

export default MainContainer;
