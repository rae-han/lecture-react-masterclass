import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.bgColor};
`;

const Circle = styled(Box)`
  border-radius: 50%;
`

const Button = styled.button`
  border: 0;
  border-radius: 15px;
  background-color: tomato;
  color: white;
`

// const Link = styled

const Input = styled.input.attrs({ required: true, minLength: 10 })``

function App() {
  return (
    <Container className="App">
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
      <Button>Button</Button>
      <Button as="a" href="/">Button</Button>
      {/*  as는 자주 쓰는 방식은 아니다. */}
      <Input />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App;
