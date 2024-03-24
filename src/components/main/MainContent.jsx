import { useState } from "react";
import SideBar from "./Sidebar";
import TravelDetail from "../sub/TravelDetails";

function MainContainer() {
  const [historyCard, setHistoryCard] = useState([]);
  const [selectedTravel, setSelectedTravel] = useState(null);

  // ! Setear la lista de viajes
  const addTravel = (newTravel) => {
    setHistoryCard([...historyCard, newTravel]);
  };

  // ! Setear el viaje seleccionado por el usuario
  const handleTravelSelect = (travelId) => {
    const travel = historyCard.find((t) => t.id === travelId);
    setSelectedTravel(travel);
  };

  // ! Setear la lista de elementos para guardar
  const updateToPackage = (travelId, newToPackageList) => {
    const updatedHistoryCard = historyCard.map((travel) => {
      if (travel.id === travelId) {
        return { ...travel, toPackageList: newToPackageList };
      }
      return travel;
    });
    setHistoryCard(updatedHistoryCard);

    const updatedSelectedTravel = updatedHistoryCard.find(
      (travel) => travel.id === travelId
    );
    setSelectedTravel(updatedSelectedTravel);

    console.log(updatedHistoryCard);
  };

  // ! Setear la lista de elementos guardados
  const updatePackage = (travelId, newPackagedList, newToPackageList) => {
    const updatedHistoryCard = historyCard.map((travel) => {
      if (travel.id === travelId) {
        return {
          ...travel,
          packagedList: newPackagedList,
          toPackageList: newToPackageList,
        };
      }
      return travel;
    });
    setHistoryCard(updatedHistoryCard);

    const updatedSelectedTravel = updatedHistoryCard.find(
      (travel) => travel.id === travelId
    );
    setSelectedTravel(updatedSelectedTravel);

    console.log(updatedHistoryCard);
  };

  // ! Eliminar elemento desde la lista de elementos por guardar
  const deleteToPackageItem = (travelId, newToPackageList) => {
    const updatedHistoryCard = historyCard.map((travel) => {
      if (travel.id === travelId) {
        return {
          ...travel,
          toPackageList: newToPackageList,
        };
      }
      return travel;
    });
    setHistoryCard(updatedHistoryCard);

    const updatedSelectedTravel = updatedHistoryCard.find(
      (travel) => travel.id === travelId
    );
    setSelectedTravel(updatedSelectedTravel);

    console.log(updatedHistoryCard);
  };

  return (
    <div className="flex h-screen">
      <div className="basis-1/4 bg-[#264653]">
        <SideBar
          historyCard={historyCard}
          setHistoryCard={setHistoryCard}
          addTravel={addTravel}
          onTravelSelect={handleTravelSelect}
          setSelectedTravel={setSelectedTravel}
        />
      </div>
      <div className="basis-3/4 bg-slate-600">
        {selectedTravel && (
          <TravelDetail
            travel={selectedTravel}
            updateToPackage={updateToPackage}
            updatePackage={updatePackage}
            deleteToPackageItem={deleteToPackageItem}
          />
        )}
      </div>
    </div>
  );
}

export default MainContainer;
