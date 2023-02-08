const Form = (props) => {
  const {
    dataAl,
    setTakimUyeler,
    setYeniUye,
    takimUyeler,
    yeniUye,
    sartSonuc,
  } = props;

  const submitData = (e) => {
    e.preventDefault();
    setTakimUyeler([...takimUyeler, yeniUye]);
    setYeniUye("");
  };

  return (
    <div>
      <fieldset>
        <form onSubmit={submitData}>
          <label>
            isim
            <input
              type="text"
              id="isim"
              value={yeniUye.isim}
              onChange={dataAl}
            ></input>
          </label>
          <label>
            email
            <input
              type="text"
              id="email"
              value={yeniUye.email}
              onChange={dataAl}
            ></input>
          </label>
          <label>
            rol
            <input
              type="text"
              id="rol"
              value={yeniUye.rol}
              onChange={dataAl}
            ></input>
          </label>
          <button type="submit" disabled={sartSonuc}>
            Kaydet
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
