import Login from "./Component/Login/Login";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Moreinfo from "./Component/Moreinfo/Moreinfo";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/">
            <Route path="" Component={Login}/>
            <Route path="moreinfo" Component={Moreinfo}/>
          </Route>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
