const Form = (props) => {
  const { dataAl, submitData, takimUyeler } = props;
  return (
    <div>
      <form onSubmit={submitData}>
        <label>
          isim
          <input
            type="text"
            id="isim"
            value={takimUyeler.isim}
            onChange={dataAl}
          ></input>
        </label>
        <label>
          email
          <input
            type="text"
            id="email"
            value={takimUyeler.email}
            onChange={dataAl}
          ></input>
        </label>
        <label>
          rol
          <input
            type="text"
            id="rol"
            value={takimUyeler.rol}
            onChange={dataAl}
          ></input>
        </label>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default Form;
