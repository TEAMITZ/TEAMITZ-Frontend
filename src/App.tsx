import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
