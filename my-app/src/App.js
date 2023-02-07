import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import { datalar } from "./data";

function App() {
  const [takimUyeler, setTakimUyeler] = useState([...datalar]);
  const [yeniUye, setYeniUye] = useState("");

  const dataAl = (e) => {
    setYeniUye({
      ...yeniUye,
      [e.target.id]: e.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    setTakimUyeler([...takimUyeler, yeniUye]);
  };

  return (
    <div>
      <Form
        submitData={submitData}
        dataAl={dataAl}
        takimUyeler={takimUyeler}
      ></Form>
      {takimUyeler}
    </div>
  );
}

export default App;
