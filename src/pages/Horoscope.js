import styled from "styled-components";
import aquarius from "../images/aquarius.png";
import pisces from "../images/pisces.png";
import aries from "../images/aries.png";
import taurus from "../images/taurus.png";

const Horoscope = () => {
  return (
    <>
      <h1>To get started select your sign</h1>
      <div className="cardGroup">
        <Aquarius></Aquarius>
        <Pisces></Pisces>
        <Aries></Aries>
        <Taurus></Taurus>
        <div>Gemini</div>
        <div>Cancer</div>
        <div>Leo</div>
        <div>Virgo</div>
        <div>Libra</div>
        <div>Scorpio</div>
        <div>Sagittarius</div>
        <div>Capricorn</div>
      </div>
    </>
  );
};
export default Horoscope;

export const Aquarius = styled.div`
  background: url(${aquarius}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 400px;
`;
export const Pisces = styled.div`
  background: url(${pisces}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Aries = styled.div`
  background: url(${aries}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 400px;
`;
export const Taurus = styled.div`
  background: url(${taurus}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 400px;
`;
