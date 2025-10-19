import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage";

function App() {

  return (
    <Router basename = "/">
      <div className='App'>
        <header className='App-Content'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App
