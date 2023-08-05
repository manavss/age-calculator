/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form } from "./components/Form";
import { Output } from "./components/Output";
import { Main } from "./components/MainComponent";
function App() {
  const [ay, setAy] = useState("");
  const [am, setAm] = useState("");
  const [ad, setAd] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Main>
      <Form
        setAy={setAy}
        setAd={setAd}
        setAm={setAm}
        setIsSubmitted={setIsSubmitted}
      />
      {<Output ay={ay} am={am} ad={ad} isSubmitted={isSubmitted} />}
    </Main>
  );
}
export default App;
