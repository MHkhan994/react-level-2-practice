import {useState} from "react";
import Container from "../components/ui/Container";
import NormalForm from "../components/ui/NormalForm";

//* <Button className={"bg-red-400"}>click me</Button>

const Home = () => {
  return (
    <Container>
      <div>
        <h3>home</h3>
        <NormalForm />
      </div>
    </Container>
  );
};

export default Home;
