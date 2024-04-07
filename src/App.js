import Login from "./Component/Login/Login";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Moreinfo from "./Component/Moreinfo/Moreinfo";
import Help from "./Component/Help/Help";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/">
            <Route path="" Component={Login}/>
            <Route path="moreinfo" Component={Moreinfo}/>
            <Route path="help" Component={Help}/>
          </Route>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
