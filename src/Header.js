import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Logo>
        <img src="/images/Tree.png" alt="" />
      </Logo>
      <Wrap>{/* Icons, Tags, ... */}</Wrap>
      <Login>Login</Login>
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
  align-items: center;

  img {
    /* display: flex; */
    width: 90%;
    border-radius: 50px;
    /* align-items: center; */
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

const Login = styled.a`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  margin-right: 45px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
