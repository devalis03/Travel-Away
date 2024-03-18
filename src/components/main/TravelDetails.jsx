import { Button } from "react-bootstrap";

function TravelDetail({ historyCard }) {
  return (
    <>
      <div className="px-4 mt-3 flex">
        <input
          type="text"
          placeholder="Add all of your luggage or anything you need to remember"
          className="w-full px-2"
        />
        <Button variant="success">✔️</Button>
      </div>
      <ul>
        {historyCard.map((travel) => (
          <h1 key={travel.id}>{travel.id}</h1>
        ))}
      </ul>
      {/* <div className="flex space-x-4">
        <div className="border-solid border-1 basis-1/2 mt-2 mx-2 h-[420px] rounded">
          
        </div>
        <div className="border-solid border-1 basis-1/2 mt-2 mx-2 h-[420px] rounded"></div>
      </div> */}
    </>
  );
}

export default TravelDetail;
