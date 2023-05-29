import styled from "styled-components";
import {useState} from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border: 4px solid ${props => props.borderColor};
  border-radius: 50%;
  background-color: ${props => props.bgColor};
`;

interface Props {
  bgColor: string;
  borderColor?: string;
  // borderColor: string | undefined;
  text?: string;
}

const Circle = ({bgColor, borderColor = bgColor, text}: Props) => {
  const [count, setCount] = useState(0)

  // return <Container bgColor={bgColor} borderColor={borderColor ?? 'green'}></Container>
  return <Container bgColor={bgColor} borderColor={borderColor}>{text ?? 'default'}</Container>
}

export default Circle;