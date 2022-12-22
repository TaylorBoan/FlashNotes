import './Home.css';
import Leyer from './Leyer.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Leyer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;


/*
componentDidMount() {
  window.scrollTo(0, 0)
}
*/
