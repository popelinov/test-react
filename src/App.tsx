import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const MainPage = React.lazy(() => import('./pages/Main'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" element={<MainPage />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
