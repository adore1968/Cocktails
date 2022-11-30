import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { setFormText } = useGlobalContext();
  return (
    <div>
      <form>
        <h4>Search your favorite cocktail</h4>
        <input type="text" onChange={(e) => setFormText(e.target.value)} />
      </form>
    </div>
  );
}

export default Form;
