import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  width: 100%;
  position: relative;
  bottom: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} El Safwa Cargo and Export. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
