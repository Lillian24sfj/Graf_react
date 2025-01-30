import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/home'
import Graphs from './Pages/Graphs'
import PageLayout from './Layout/PageLayout'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <header className="bg-pink-50 text-gray-800 shadow-md border-b border-pink-200 p-6 mb-8">
          <div>
            <h1 className="text-4xl font-extrabold">Innvandring i Norge</h1>
            <p className="text-lg text-gray-600 mt-2">Grafer over hvor mange innvandrere som er kommet til Norge de siste årene. Og noen unyttige fakta</p>
          </div>
          <div className="mt-4 flex justify-end space-x-6 underline" >
            <Link to="/" className="text-lg text-gray-700 hover:text-pink-600 transition duration-300">Diagram</Link>
            <Link to="/Graphs" className="text-lg text-gray-700 hover:text-pink-600 transition duration-300">Fakta</Link>
          </div>
        </header>

        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Graphs" element={<Graphs />} />
          </Routes>
        </PageLayout>
        <footer className="bg-pink-50 text-center text-sm text-gray-600 py-6 mt-8 border-t border-pink-200 mb-0 align-bottom fixed bottom-0 w-full">
          <div>
            <p>Hentet fra SSB sine APIer</p>
            <div className="space-x-4 mt-2">
              <a href="https://data.ssb.no/" className="text-pink-600 hover:text-pink-800 transition duration-300">Data</a>
              <a href="https://www.ssb.no/" className="text-pink-600 hover:text-pink-800 transition duration-300">SSB</a>
            </div>
          </div>
        </footer>
      </Router>
    </>
  )
}

export default App
