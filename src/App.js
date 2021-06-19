import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import { Header } from './components/Header'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path={["/","/rooms"]} exact component={Rooms}></Route>
          <Route path={"/rooms/:roomPK"} component={RoomDetail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
