import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  
  span {
    color: ${props => props.theme.textColor}
  }
`;

const Theme = () => {
  return (
    <Container>
      <span>Protect properties</span>
    </Container>
  )
}

export default Theme;