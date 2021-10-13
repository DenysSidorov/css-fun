import {Switch, Route, Link} from 'react-router-dom';
import Card1 from './examples/card-1/card1';

function App() {
  return (
    <div className="App">
      <nav>
            <Link to="/">Home  |  </Link>
            <Link to="/card-1">  Card  |</Link>
      </nav>
      <Switch>
        <Route path="/card-1">
          <Card1/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}
