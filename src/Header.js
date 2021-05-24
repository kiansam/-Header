import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Wrap>
        <h1>Hi</h1>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Wrap = styled.div`
  margin: 0;
`;

export default Header;
