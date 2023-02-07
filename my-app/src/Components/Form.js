const Form = (props) => {
  const { dataAl } = props;
  return (
    <div>
      <form>
        <label>
          isim
          <input type="text" id="isim" onChange={dataAl}></input>
        </label>
        <label>
          email
          <input type="text" id="email" onChange={dataAl}></input>
        </label>
        <label>
          rol
          <input type="text" id="rol" onChange={dataAl}></input>
        </label>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default Form;
