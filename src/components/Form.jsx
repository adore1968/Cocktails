import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { setFormText } = useGlobalContext();
  return (
    <div className="flex justify-center mb-14">
      <form className="bg-white w-[512px] p-5 rounded">
        <h4 className="capitalize text-lg sm:text-xl text-green-700 mb-2">
          Search your favorite cocktail
        </h4>
        <input
          type="text"
          onChange={(e) => setFormText(e.target.value)}
          className="bg-gray-800 w-full p-1 rounded text-white text-lg sm:text-xl"
        />
      </form>
    </div>
  );
}

export default Form;
