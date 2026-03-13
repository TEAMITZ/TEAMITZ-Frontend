import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@pages/Login'
import { COLORS, TEXT_STYLES } from '@/constants'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className={`min-h-screen ${COLORS.background.main} ${TEXT_STYLES.size.base}`}>
              TEAMITZ
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
