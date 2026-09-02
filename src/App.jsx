import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/Home/About'
import News from './pages/News'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Approach from './pages/Approach'
import Insights from './pages/Insights'
import Loader from './components/Loader'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      {!loading && (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
