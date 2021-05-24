import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Logo>
        <img src="/images/Tree.png" alt="" />
      </Logo>
      <Wrap>{/* Icons, Tags, ... */}</Wrap>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  background-color: #000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.a`
  /* padding: 0; */
  width: 80px;
  /* font-size: 0; */
  /* display: inline-block; */

  img {
    /* display: flex; */
    width: 100%;
    border-radius: 50px;
    align-items: center;
  }
`;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  margin-right: auto;
  margin-left: auto;
`;

export default Header;
