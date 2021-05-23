import { Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Intro } from "./pages/Intro";
import { Start } from "./pages/Start";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Intro} />
      <Route path="/start" component={Start} />
    </Router>
  );
};

export default App;
