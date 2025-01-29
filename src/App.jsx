import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import SSBData from './Pages/Graphs'
import PageLayout from './Layout/PageLayout'
import './App.css'

function App() {
  return (
    <>
    <Router>
      {"  "}
      <header className="App-header">
        <div>
          <h1>Befolkning i Norge </h1>
          <p>Grafer over befolkningtall i Norge de siste årene</p>
        </div>
        <div className="detteHer">
          <Link to="/">Home</Link>
          <Link to="/SSBData">Diagrammer</Link>
        </div>
      </header>
      {"  "}
      <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SSBData" element={<SSBData />} />
      </Routes>
      </PageLayout>
      <footer className="App-footer">
        <div>
          <p> Hentet fra SSB sine APIer </p>
          <a href="https://data.ssb.no/">Data</a>
          <a href="https://www.ssb.no/">SSB</a>
          
        </div>
      </footer>
    </Router>
    </>
  )
}

export default App
