import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.submitEt}>
        <label>
          isim
          <input></input>
        </label>
        <label>
          email
          <input></input>
        </label>
        <label>
          rol
          <input></input>
        </label>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default Form;
