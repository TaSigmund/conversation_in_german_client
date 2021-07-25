//dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//components
import Conversations from './components/Conversations'
import Conversation from './components/Conversation'
import UnhandledError from './components/UnhandledError'
import NotFound from './components/NotFound'

/***
 * ROUTING
 ***/

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Conversations}/>
        <Route exact path="/conversations/:id" component={Conversation}/>
        <Route exact path="/error" component={UnhandledError}/>
        <Route exact path="/notfound" component={NotFound}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
