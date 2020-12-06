import React, { useState } from "react";
import "./styles.css";

import Modal from "../modal/index";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setShowModal((modal) => !modal);
    console.log(showModal);
  };
  return (
    <div className="home-container">
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <button className="btn-toggle" onClick={handleClick}>
          modal
        </button>
      )}
    </div>
  );
}

export default Home;
