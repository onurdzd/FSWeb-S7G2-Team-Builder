import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import { datalar } from "./data";

function App() {
  const [takimUyeler, setTakimUyeler] = useState([...datalar]);
  const [yeniUye, setYeniUye] = useState("");
  const [duzenlenecekUye, setDuzenlenecekUye] = useState("");
  const [sartSonuc, setSartSonuc] = useState(true);

  const dataAl = (e) => {
    setYeniUye({
      ...yeniUye,
      [e.target.id]: e.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    if (!duzenlenecekUye) {
      setTakimUyeler([...takimUyeler, yeniUye]);
    }
    setDuzenlenecekUye("");
    setYeniUye("");
  };

  const handleDuzenle = (e) => {
    setYeniUye(takimUyeler.find((item) => item.isim === e.isim));
    setDuzenlenecekUye(yeniUye);
    setTakimUyeler(takimUyeler.filter((item) => item !== e));
  };

  useEffect(() => {
    if (yeniUye) {
      if (!yeniUye.isim || !yeniUye.email || !yeniUye.rol) {
        setSartSonuc(true);
      } else {
        setSartSonuc(false);
      }
    }
  }, [yeniUye]);

  return (
    <div>
      <Form
        submitData={submitData}
        dataAl={dataAl}
        yeniUye={yeniUye}
        sartSonuc={sartSonuc}
      ></Form>
      {takimUyeler.map((item, index) => (
        <div key={index}>
          {item.isim} {item.email} {item.rol}
          <button onClick={() => handleDuzenle(item)}>Düzenle</button>
        </div>
      ))}
    </div>
  );
}

export default App;
