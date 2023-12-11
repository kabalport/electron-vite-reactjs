import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../routes/Home';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import Calculator22 from "./Calculator22";
import GreenEffort from "../routes/GreenEffort";
import Coin from "../routes/Coin";
import RandomOrder from "../routes/RandomOrder";
import Timer from "../routes/Timer";
import Calculator2 from "../routes/Calculator2";
import MainPage from "../routes/MainPage";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
    background: #e9ecef;
    }
`;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>
        <Route path="/ro">
          <RandomOrder />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/cal2">
          <Calculator2 />
        </Route>
        <Route path="/calculator">
          <Calculator22 />
        </Route>
        <Route path="/coin">
          <Coin />
        </Route>
        <Route path="/ge">
          <GreenEffort />
        </Route>
        <Route path="/todo">
          <Home />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
