import Button from "react-bootstrap/Button";
import TravelDetail from "../main/TravelDetails";

function SidebarCard(props) {
  const newObj = {
    id: props.id,
    packagedList: props.packagedList,
    toPackageList: props.toPackageList,
  };
  return (
    <>
      <Button className="w-full" variant="outline-secondary" onClick="">
        From {props.inputStart} to {props.inputEnd}
      </Button>
    </>
  );
}

export default SidebarCard;
