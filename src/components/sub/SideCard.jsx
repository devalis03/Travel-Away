import Button from "react-bootstrap/Button";

function SidebarCard(props) {
  return (
    <>
      <Button className="w-full mt-3">
        From {props.inputStart} to {props.inputEnd}
      </Button>
    </>
  );
}

export default SidebarCard;
