import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Nav from "./containers/Nav/navbar.tsx";

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
