import {Switch, Route, Link} from 'react-router-dom';
import Card1 from './examples/card-1/card1';
import Spinner1 from './examples/spinner-1/spinner1';

function App() {
  return (
    <div className="App">
      <nav>
            <Link to="/">Home  |  </Link>
            <Link to="/spinner-1">  Spinner  |</Link>
            <Link to="/card-1">  Card  |</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/card-1">
          <Card1/>
        </Route>
        <Route exact path="/spinner-1">
          <Spinner1/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}
