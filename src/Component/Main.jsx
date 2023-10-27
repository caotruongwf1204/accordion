import React from "react";
import MainItem from "./MainItem";

const Main = ({ items }) => {
  console.log(items);
  const MainItems = items.map((item) => (
    <div key={item.title} className="accordion">
      <MainItem
        {...item}
      ></MainItem>
    </div>
  ));
  return <>{MainItems}</>;
};

export default Main;
