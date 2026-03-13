import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="min-h-screen bg-gray-50">TEAMITZ</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
