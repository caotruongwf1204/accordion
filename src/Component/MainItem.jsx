import React, { useState } from "react";

const MainItem = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleShow = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      <div className="accordion-item">
        <button className="accordion-btn" onClick={toggleShow}>
          {title}
        </button>
        {showContent && (
          <div className="accordion-body">{content}</div>
        )}
      </div>
    </>
  );
};

export default MainItem;
