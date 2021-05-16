import React from "react";

import "./loader.styles.scss";

const Loader = () => {
  return (
    <div className='spinner-overlay'>
      <div className='spinner-container'></div>
    </div>
  );
};

export default Loader;
