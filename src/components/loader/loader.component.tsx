import React from "react";

import "./loader.styles.scss";

const Loader = () => {
  return (
    <div className='spinner-overlay'>
      <div className='spinner-container'></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
