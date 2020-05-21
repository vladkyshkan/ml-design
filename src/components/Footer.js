import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <p>Designed & coded by&nbsp;</p>
        <a
          href="https://vladkyshkan.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vlad Kyshkan
        </a>
      </div>
      <p>© 2020</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  width: 100%;
  max-width: 76rem;
  margin-top: 120px;
  padding: 20px 0;
  border-top: 1px solid #b9cbd9;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: rgba(40, 45, 49, 0.5);

  a {
    color: rgba(40, 45, 49, 0.5);

    :hover {
      color: #6275ff;
    }
  }

  div {
    display: flex;
    align-items: baseline;
  }
`;

export default Footer;
