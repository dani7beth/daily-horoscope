import styled from "styled-components";
import aquarius from "../images/aquarius.png";
import pisces from "../images/pisces.png";
import aries from "../images/aries.png";
import taurus from "../images/taurus.png";
import gemini from "../images/gemini.png";
import cancer from "../images/cancer.png";
import leo from "../images/leo.png";
import virgo from "../images/virgo.png";
import libra from "../images/libra.png";
import scorpio from "../images/scorpio.png";
import sagittarius from "../images/sagittarius.png";
import capricorn from "../images/capricorn.png";
import { Link } from "react-router-dom";

const Horoscopes = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>To get started select your sign</h1>
      <StyledDiv className="cardGroup">
        <Card>
          <Link to="/horoscope/capricorn">
            <StyledText> December 22 - January 19</StyledText>
            <Capricorn></Capricorn>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/aquarius">
            <StyledText> January 20 - February 18</StyledText>
            <Aquarius></Aquarius>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/pisces">
            <StyledText> February 19 - March 20</StyledText>
            <Pisces></Pisces>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/aries">
            <StyledText> March 21 - April 19</StyledText>
            <Aries></Aries>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/taurus">
            <StyledText> April 20 - May 20</StyledText>
            <Taurus></Taurus>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/gemini">
            <StyledText> May 21 - June 20</StyledText>
            <Gemini></Gemini>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/cancer">
            <StyledText> June 21 - July 22</StyledText>
            <Cancer></Cancer>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/leo">
            <StyledText> July 23 - August 22</StyledText>
            <Leo></Leo>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/virgo">
            <StyledText> August 23 - September 22</StyledText>
            <Virgo></Virgo>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/libra">
            <StyledText> September 23 - October 22</StyledText>
            <Libra></Libra>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/scorpio">
            <StyledText> October 23 - November 21</StyledText>
            <Scorpio></Scorpio>
          </Link>
        </Card>
        <Card>
          <Link to="/horoscope/sagittarius">
            <StyledText> November 22 - December 21</StyledText>
            <Sagittarius></Sagittarius>
          </Link>
        </Card>
      </StyledDiv>
    </>
  );
};
export default Horoscopes;

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledText = styled.p`
  padding: 20px 0;
  color: #ffffff;
`;

export const Card = styled.div`
  flex: 1 0 20%;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #252525;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #282828;
  text-align: center;
`;

export const Aquarius = styled.div`
  background: url(${aquarius}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
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
  height: 200px;
`;
export const Taurus = styled.div`
  background: url(${taurus}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Gemini = styled.div`
  background: url(${gemini}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Cancer = styled.div`
  background: url(${cancer}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Leo = styled.div`
  background: url(${leo}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Virgo = styled.div`
  background: url(${virgo}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Libra = styled.div`
  background: url(${libra}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Scorpio = styled.div`
  background: url(${scorpio}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Sagittarius = styled.div`
  background: url(${sagittarius}) no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
export const Capricorn = styled.div`
  background: url(${capricorn}) no-repeat;
  background-position: center;
  background-size: contain;
  width: 200px;
  height: 200px;
`;
