import React from "react";
import Form from "../components/Form";
import Cocktails from "../components/Cocktails";

function Home() {
  return (
    <section className="px-5 sm:px-8">
      <Form />
      <Cocktails />
    </section>
  );
}

export default Home;
