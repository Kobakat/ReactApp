import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import DemosPage from "./demos/demos-page";
import AboutPage from "./about/about-page";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/demos">
          <DemosPage />
        </Route>
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
