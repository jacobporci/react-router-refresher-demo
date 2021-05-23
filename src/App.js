import { Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Intro } from "./pages/Intro";
import { PrimaryComponents } from "./pages/PrimaryComponents";
import { Topics } from "./pages/Topics";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
      <Route path="/intro" component={Intro} />
      <Route path="/primary-components" component={PrimaryComponents} />
    </Router>
  );
};

export default App;
