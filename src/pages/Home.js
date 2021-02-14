import { Button } from "react-bootstrap";
import styled from 'styled-components';
import starry_night from "../images/starry_sky.jpg";

export default () => {
  return (
    <Background>
      <StyledButton href='/horoscopes'>Get your Horoscope</StyledButton>
      <StyledButton href='/your_sign'>Get your Sign</StyledButton>
    </Background>
  );
};
export const Background = styled.div`
  background-image: url(${starry_night});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  background-color: #252525;
  border: none;
  margin: 20px;
  padding: 10px;
  color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover{
    background-color: #191919;
    color: #ffffff;
  }
`;
