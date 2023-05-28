import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.bgColor};
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
// 중복된 attribute

const StyledComponents = () => {
  return (
    <div className="App">
      <StyledComponents />
    </div>
  )
}

export default StyledComponents;