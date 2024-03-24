import Button from "react-bootstrap/Button";

function SidebarCard(props) {
  return (
    <>
      <Button
        className="w-full"
        variant="outline-secondary"
        onClick={props.onSelect}
      >
        From {props.inputStart} to {props.inputEnd}
      </Button>
    </>
  );
}

export default SidebarCard;
