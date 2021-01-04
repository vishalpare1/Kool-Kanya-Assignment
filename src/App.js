import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import StreamList from "./pages/StreamList";
import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";
import Footer from "./components/Footer";
import history from "./history";
import StreamCategory from "./pages/StreamCategory";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <TopHeader />
        <BottomHeader title="Popular Title" />
        <div className="container">
          <Switch>
            <Route path="/" exact component={StreamCategory} />
            <Route path="/category" exact component={StreamCategory} />
            <Route path="/list/:type" exact component={StreamList} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
