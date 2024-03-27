import {useState} from "react";
import Container from "../components/ui/Container";
import Modal from "../components/ui/Modal";

//* <Button className={"bg-red-400"}>click me</Button>

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <div>
        <h3>home</h3>
        <button onClick={() => setModal(true)}>open modal</button>
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <h1>this is a modal</h1>
          <Modal.CloseButton>close</Modal.CloseButton>
        </Modal>
      </div>
    </Container>
  );
};

export default Home;
