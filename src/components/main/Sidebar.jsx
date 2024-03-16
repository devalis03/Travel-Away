import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { travelHistory } from "../../constants";
import SidebarCard from "../sub/SideCard";
import PlaneIcon from "../../assets/icons/newTravel-Icon.svg";

function SideBar() {
  // States Modal
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // State Card List
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function handleCardHistory() {
    const addCard = {
      id: id,
      inputStart: start,
      inputEnd: end,
    };

    setId(id + 1);
    travelHistory.push(addCard);
    handleClose();
    console.log(travelHistory);
  }

  return (
    <>
      <div className="flex justify-center my-10 flex-col">
        <Button
          variant="outline-secondary"
          className="border-[1px] border-slate-400 rounded-md w-[200px] text-slate-400 text-[18px] flex hover:bg-[#F7F7F7] ms-5"
          onClick={handleShow}
        >
          <div className="flex">
            <img
              src={PlaneIcon}
              alt="travel icon"
              className="w-14 h-14 pt-3 mb-2"
            />
            <p className="ms-3 mt-4">New Travel</p>
          </div>
        </Button>

        <div className="ms-3 me-3 mt-3">
          {travelHistory.length > 0
            ? travelHistory.map((travel) => (
                <SidebarCard
                  key={travel.id}
                  inputStart={travel.inputStart}
                  inputEnd={travel.inputEnd}
                />
              ))
            : null}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Plan Your Journey</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Start:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the start date of your travel"
                onChange={(e) => setStart(e.target.value)}
              />
              <Form.Text className="text-muted">DD/MM/YYYY</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>End:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the end date of your travel"
                onChange={(e) => setEnd(e.target.value)}
              />
              <Form.Text className="text-muted">DD/MM/YYYY</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCardHistory}>
            Let's begin!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SideBar;
