import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Wrap>
        {" "}
        <img src="/images/Tree.png" alt="" />
        <h1>Hi</h1>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: 90px;
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Wrap = styled.div`
  color: #fff;
  width: 20%;
  height: 60px;
  background-color: #fff;
`;

export default Header;
