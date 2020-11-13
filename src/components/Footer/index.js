// == Import npm
import React from 'react';

// import du frameworks
import {
  Icon,
} from 'semantic-ui-react';

import FooterStyled from './FooterStyled';

const Footer = () => (
  <FooterStyled>
    <div className="footer-container">
      <div className="contact">
        <div className="adress">
          <p>Contact:  <a href="mailto:ask@gmail.com"><Icon name="envelope outline" />askteamsup@gmail.com</a></p>
        </div>
      </div>
    </div>
  </FooterStyled>
);

// == Export
export default Footer;
