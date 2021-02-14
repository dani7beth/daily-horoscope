import SignForm from "../components/SignForm";
import starry_night from "../images/starry_sky.jpg";
import styled from 'styled-components';

export const YourSign = () => {
  return (
    <Background>
      <h1>Enter your Birthdate</h1>
      <SignForm />
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
  flex-direction: column;
`;
