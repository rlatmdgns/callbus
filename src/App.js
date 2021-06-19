import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import rooms from './pages/rooms';
import { Header } from './components/Header'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path={["/","/rooms"]} exact component={rooms}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
