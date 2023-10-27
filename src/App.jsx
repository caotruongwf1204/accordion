import "./App.css";
import React, { useState } from "react";
import Main from "./Component/Main";

const items = [
  { title: "Section 1", content: "Content for Section 1" },
  { title: "Section 2", content: "Content for Section 2" },
  { title: "Section 3", content: "Content for Section 3" },
];
function App() {
  return (
    <>
      <Main
        items={items}
      ></Main>
    </>
  );
}

export default App;
