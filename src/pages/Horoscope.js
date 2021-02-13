import axios from "axios";
import { useState, useEffect } from "react";

const Horoscope = ({ match }) => {
  // console.log(match.params.id);

  const [horoscope, setHoroscope] = useState({});
  const date = new Date();

  //example response
  // color: "Shadow Black"
  // compatibility: "Virgo"
  // current_date: "February 13, 2021"
  // date_range: "Dec 22 - Jan 19"
  // description: "This is not the time for you to sign on with anything that seems unclear or unwise -- you might not be able to wiggle out later! Defer any big decisions until later unless you are absolutely sure."
  // lucky_number: "47"
  // lucky_time: "3pm"
  // mood: "Cautious"
  const getHoroscope = async () => {
    try {
      let res = await axios.post(
        `https://aztro.sameerkumar.website/?sign=${match.params.id}&day=today`
      );
      // console.log(res.data);
      setHoroscope(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHoroscope();
  }, []);

  return (
    <>
      <h5>{horoscope.current_date}</h5>
      <p>{horoscope.description}</p>
      <p>compatibility: {horoscope.compatibility}</p>
      <p>mood: {horoscope.mood}</p>
      <p>color: {horoscope.color}</p>
      <p>lucky number: {horoscope.lucky_number}</p>
      <p>lucky time: {horoscope.lucky_time}</p>
    </>
  );
};
export default Horoscope;
