import { useState } from "react";
import { Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import "../styles.css"

function TravelDetail({
  travel,
  updateToPackage,
  updatePackage,
  deleteToPackageItem,
}) {
  const [inputValue, setInputValue] = useState("");

  function handleAddItem() {
    const itemAdded = inputValue;
    const newToPackageList = [...travel.toPackageList, itemAdded];

    updateToPackage(travel.id, newToPackageList);
    setInputValue("");
  }

  function handleItemPackaged(item) {
    const newPackagedList = [...travel.packagedList, item];
    const newToPackageList = travel.toPackageList.filter((i) => i != item);

    updatePackage(travel.id, newPackagedList, newToPackageList);
    //console.log(packagedItem);
  }

  function handleDeletedItem(item) {
    const newToPackageList = travel.toPackageList.filter((i) => i != item);

    deleteToPackageItem(travel.id, newToPackageList);
  }

  function handleUnpackagedItem(item) {
    const newToPackageList = [...travel.toPackageList, item];
    const newPackagedList = travel.packagedList.filter((i) => i != item);

    updatePackage(travel.id, newPackagedList, newToPackageList);
  }

  return (
    <>
      <div className="px-4 mt-3 flex space-x-2">
        <input
          type="text"
          placeholder="Add all of your luggage or anything you need to remember"
          className="w-full px-2 rounded-full"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button variant="success" onClick={handleAddItem}>
          ✔️
        </Button>
      </div>
      <div className="flex space-x-4">
        <div className="basis-1/2 mt-2 mx-2 h-[420px] rounded overflow-y-auto bg-[#010B13] text-white shadow-2xl">
          <h2 className="text-center mt-2 font-main">PACKAGED ITEMS</h2>
          <ul className="list-disc">
            {travel.packagedList.map((item) => (
              <>
                <li key={item} className="font-main">{item}
                <Button variant="transparent" className="ms-4" onClick={() => handleUnpackagedItem(item)}>🔙</Button>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="basis-1/2 mt-2 mx-2 h-[420px] rounded overflow-y-auto bg-[#010B13] text-white shadow-2xl">
          <h2 className="text-center mt-2 font-main">LEFT TO PACKAGE</h2>
          <ul className="list-disc">
            {travel.toPackageList.map((item) => (
              <>
                <li key={item} className="list-item font-main">{item}
                <Button
                  variant="transparent"
                  onClick={() => handleItemPackaged(item)}
                  className="ms-4"
                >
                  🧳
                </Button>
                <Button
                  variant="transparent"
                  onClick={() => handleDeletedItem(item)}
                  className="ms-2"
                >
                  ❌
                </Button></li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <Alert variant="danger" className="mx-2 mt-2 h-44 font-alerta">
        <span>¡IMPORTANT INFORMATION!</span>
        <p>Some things you must not forget:</p>
        <ol className="list-decimal">
          <li>Passport</li>
          <li>Ticket</li>
          <li>Cellphone</li>
        </ol>
      </Alert>
    </>
  );
}

export default TravelDetail;
