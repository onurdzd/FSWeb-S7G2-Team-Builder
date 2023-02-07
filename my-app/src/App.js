import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [takimUyeler, setTakimUyeler] = useState({
    id: 1,
    name: "onur",
    rol: "full stack",
  });

  const submitEt = () => {};

  return (
    <div>
      <Form submitEt={submitEt}></Form>
    </div>
  );
}

export default App;
