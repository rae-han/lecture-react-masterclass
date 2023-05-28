import styled, {keyframes} from 'styled-components'

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

const Input = styled.input.attrs({ required: true, minLength: 10 })``

const animation = keyframes`
  0% {
    border-radius: 0;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0;
    transform: rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 2rem;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  
  & > span {
    font-size: 2rem;
    
    &:hover {
      font-size: 3rem;
    }
  }
  ${Emoji} {
    &:hover {
      font-size: 3rem;
    }
  }
`;

const Title = styled.h1`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
`;

function App() {
  return (
    <>
      <Container>
        <Box bgColor="teal" />
        <Box bgColor="tomato" />
        <Circle bgColor="teal" />
        <Circle bgColor="tomato" />
        <Button>Button</Button>
        <Button as="a" href="/">Button</Button>
        <Input />
        <Input />
        <Input />
        <Input />
      </Container>
      <Container>
        <Wrap>
          <span>😆</span>
        </Wrap>
        태그에 종속적이지 않다.
        <Wrap>
          <Emoji>😆</Emoji>
        </Wrap>
        <Emoji>😆</Emoji>
        <Title>테마 테스트</Title>
      </Container>
    </>
  );
}

export default App;
