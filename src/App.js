import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home  from "./pages/Home";
import Horoscope from "./pages/Horoscope";
import { YourSign } from "./pages/YourSign";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/your_sign" component={YourSign} />
        <Route exact path="/horoscope" component={Horoscope} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
