import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footerText">
        <p className="footerTextText">© 2016-2019 Need for drive</p>
        <div className="numberFooter">
          <p className="numberFooterText">8 (495)234-22-44</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
