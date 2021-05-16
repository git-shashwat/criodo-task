import React from "react";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <p>Developed with ❤️ and ☕ by Shashwat |&nbsp;</p>
      <p>
        Find me on{" "}
        <a
          href='https://www.linkedin.com/in/shashwattyagi/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn{" "}
        </a>{" "}
        |&nbsp;
      </p>
      <p>
        Drop a 👋 on{" "}
        <a
          href='https://twitter.com/RxShashwat'
          target='_blank'
          rel='noreferrer'
        >
          {" "}
          Twitter{" "}
        </a>
      </p>
    </div>
  );
};

export default Footer;
