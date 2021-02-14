import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
export default () => {
  const [birthdate, setBirthdate] = useState({ month: null, day: null });
  const [zodiac, setZodiac] = useState("");
  const [toggle, setToggle] = useState(false);

  const checkZodiac = () => {
    switch (parseInt(birthdate.month)) {
      case 1:
        if (parseInt(birthdate.day) <= 19) {
          setZodiac("Capricorn");
          setToggle(true);
        } else {
          setZodiac("Aquarius");
          setToggle(true);
        }
        break;
      case 2:
        if (parseInt(birthdate.day) <= 18) {
          setZodiac("Aquarius");
          setToggle(true);
        } else {
          setZodiac("Pisces");
          setToggle(true);
        }
        break;
      case 3:
        if (parseInt(birthdate.day) <= 20) {
          setZodiac("Pisces");
          setToggle(true);
        } else {
          setZodiac("Aries");
          setToggle(true);
        }
        break;
      case 4:
        if (parseInt(birthdate.day) <= 19) {
          setZodiac("Aries");
          setToggle(true);
        } else {
          setZodiac("Taurus");
          setToggle(true);
        }
        break;
      case 5:
        if (parseInt(birthdate.day) <= 20) {
          setZodiac("Taurus");
          setToggle(true);
        } else {
          setZodiac("Gemini");
          setToggle(true);
        }
        break;
      case 6:
        if (parseInt(birthdate.day) <= 20) {
          setZodiac("Gemini");
          setToggle(true);
        } else {
          setZodiac("Cancer");
          setToggle(true);
        }
        break;
      case 7:
        if (parseInt(birthdate.day) <= 22) {
          setZodiac("Cancer");
          setToggle(true);
        } else {
          setZodiac("Leo");
          setToggle(true);
        }
        break;
      case 8:
        if (parseInt(birthdate.day) <= 22) {
          setZodiac("Leo");
          setToggle(true);
        } else {
          setZodiac("Virgo");
          setToggle(true);
        }
        break;
      case 9:
        if (parseInt(birthdate.day) <= 22) {
          setZodiac("Virgo");
          setToggle(true);
        } else {
          setZodiac("Libra");
          setToggle(true);
        }
        break;
      case 10:
        if (parseInt(birthdate.day) <= 22) {
          setZodiac("Libra");
          setToggle(true);
        } else {
          setZodiac("Scorpio");
          setToggle(true);
        }
        break;
      case 11:
        if (parseInt(birthdate.day) <= 21) {
          setZodiac("Scorpio");
          setToggle(true);
        } else {
          setZodiac("Sagittarius");
          setToggle(true);
        }
        break;
      case 12:
        if (parseInt(birthdate.day) <= 21) {
          setZodiac("Sagittarius");
          setToggle(true);
        } else {
          setZodiac("Capricorn");
          setToggle(true);
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkZodiac();
    setBirthdate({month: "", day: ""});
    setTimeout(()=>{setToggle(false)},12000)
  };

  const handleChange = (e) => {
    setBirthdate({ ...birthdate, [e.target.name]: e.target.value });
  };
  return (
    <>
      {toggle && <Alert style={{color: '#ffffff', fontWeight: '600', fontSize: '2em'}}>{zodiac}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Month</Form.Label>
          <Form.Control
            as="select"
            value={birthdate.month}
            name="month"
            onChange={handleChange}
          >
            <option>Choose your month...</option>
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </Form.Control>
          <Form.Label>Day</Form.Label>
          <Form.Control type="number" name="day" onChange={handleChange}  value={birthdate.day}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
