import { useState } from "react";
import { Button } from "react-bootstrap";

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
        <div className="border-solid border-1 basis-1/2 mt-2 mx-2 h-[420px] rounded">
          <h2 className="text-center mt-2">PACKAGED ITEMS</h2>
          <ul className="list-disc">
            {travel.packagedList.map((item) => (
              <>
                <li key={item}>{item}</li>
              </>
            ))}
          </ul>
        </div>
        <div className="border-solid border-1 basis-1/2 mt-2 mx-2 h-[420px] rounded">
          <h2 className="text-center mt-2">LEFT TO PACKAGE</h2>
          <ul className="list-disc overflow-hidden">
            {travel.toPackageList.map((item) => (
              <li key={item} className="inline-block mx-4">
                {item}
                <Button
                  variant="transparent"
                  onClick={() => handleItemPackaged(item)}
                >
                  🧳
                </Button>
                <Button
                  variant="transparent"
                  onClick={() => handleDeletedItem(item)}
                >
                  ❌
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TravelDetail;
