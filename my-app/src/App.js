import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import { datalar } from "./data";

function App() {
  const [takimUyeler, setTakimUyeler] = useState([...datalar]);

  const dataAl = (e) => {
    setTakimUyeler([...takimUyeler, { [e.target.id]: e.target.value }]);
  };

  console.log(takimUyeler);

  return <div></div>;
}

export default App;
